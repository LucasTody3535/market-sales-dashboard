export function calculateRevenue(sales) {
    let revenue = 0;

    for( let sale in sales ) {
        revenue += sales[sale].revenue;
    }

    return revenue;
}

export function calculateTotalSales(sales) {
    let totalSales = 0;

    for( let sale in sales ) {
        totalSales += sales[sale].quantity;
    }

    return totalSales;
}

export function calculateTicket(totalSales, totalClients) {
    let ticket = totalSales / totalClients;
    return Number(ticket.toFixed(2));
}

export function calculateProfitMargin(profit, revenue) {
    let profitMargin = (profit / revenue) * 100;
    return Number(profitMargin.toFixed(2));
}
