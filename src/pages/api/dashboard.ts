import type { APIRoute } from 'astro';
import { supabaseAuth } from '@lib/supabase';

export const GET: APIRoute = async ({ request }) => {
    const userUUID = request.headers.get("id")!;
    const token = request.headers.get("token")!;

    // BD fetch
    const { data, error } = await supabaseAuth(token)
        .from("user_related")
        .select();

    // Error
    if (!data) {
        return new Response(JSON.stringify({ error: 'No session' }), { status: 401 });
    }


    // Success
    return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};