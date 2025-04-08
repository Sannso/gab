// get best buyers
export function getBestCustomers(sells: Array<any>): Array<any> {
    let data: any = {};
    sells.forEach(({ client_id, client, price, cost }) => {
        const ganancia = price - cost

        if (!data[client_id]) {
            data[client_id] = { // Crea el cliente
                name: client, // client
                value: 0 // ganancia total
            }
        }

        data[client_id].value += ganancia
    })

    return Object.values(data)
        .sort((a: any, b: any) => b.value - a.value)
        .filter((sell:any) => sell.name != "Yo")
        .slice(0, 4)
}

// get best products
export function getBestProducts(sells: Array<any>): Array<any> {
    let data: any = {};
    sells.forEach(({ product, price, cost }) => {
        const ganancia = price - cost

        if (!data[product]) {
            data[product] = { // Crea el producto
                name: product, // product
                value: 0 // ganancia total
            }
        }

        data[product].value += ganancia
    })

    return Object.values(data)
    .sort((a: any, b: any) => b.value - a.value)
    .slice(0, 4)
}