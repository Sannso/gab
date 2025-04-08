import type { APIRoute } from 'astro';
import { supabaseAuth } from '@lib/supabase';

export const GET: APIRoute = async ({ request }) => {
    const userUUID = request.headers.get("id")!;
    const token = request.headers.get("token")!;

    // BD fetch GET ALL DATA TO DASHBOARD
    const [userBasicsRes, activityRes, productsRes] = await Promise.all([
        supabaseAuth(token)
            .from("user_basics")
            .select()
            .eq("user_uuid", userUUID),
        supabaseAuth(token)
            .from("user_activity")
            .select(`
                id,
                sold,
                purchase,
                profit,
                created_at,
                products (
                  id,
                  name
                ),
                clients(
                  id,
                  name,
                  last_name,
                  phone,
                  address
                )
            `)
            .eq("user_uuid", userUUID),
        supabaseAuth(token)
            .from("user_products")
            .select(`
                id,
                products (
                  name
                ),
                stock,
                selling_price,
                purchase_price
            `)
            .eq("user_uuid", userUUID),
            supabaseAuth(token)
            .from("user_products")
            .select(`
                id,
                products (
                  name
                ),
                stock,
                selling_price,
                purchase_price
            `)
            .eq("user_uuid", userUUID),
    ])

    // Error
    if (userBasicsRes.error || activityRes.error || productsRes.error) {
        return new Response(JSON.stringify({ error: 'Error get data' }), { status: 401 });
    }

    // Calculate profit
    let profit = 0
    activityRes.data.forEach((sell: any) => {
        profit = sell.profit + profit
    });

    // Organize sells
    let sells: Array<any>;
    sells = activityRes.data.map((item: any) => (
        {
            id: item.id,
            client: `${item.clients.name} ${item.clients.last_name}`.replace(/null/g, '').trim(),
            client_id: item.clients.id,
            product: item.products.name,
            price: item.sold,
            date: item.created_at.split('T')[0],
            cost: item.purchase,
        })
    );

    // Organize products
    let products: Array<any>;
    products = productsRes.data.map((item: any) => (
        {
            id: item.id,
            product: item.products.name,
            sellingPrice: item.selling_price,
            purchasePrice: item.purchase_price,
        })
    );

    const allData = {
        // User data
        userName: userBasicsRes.data[0].user_name,
        userLastName: userBasicsRes.data[0].user_lastname,
        amount: userBasicsRes.data[0].amount,
        profit,

        // User Sells from Activity
        sells,
        products,
    }

    // Success
    return new Response(JSON.stringify({ allData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};