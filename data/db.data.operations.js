import { formatNumToReadableString } from "../src/utils/numbers/number.utils";

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

export function formatSalesMetadata(sales) {
    for( let sale in sales ) {
        sales[sale].formattedRevenue = `$${formatNumToReadableString(sales[sale].revenue)}`;
        sales[sale].formattedQuantity = `${formatNumToReadableString(sales[sale].quantity)}un`;
    }
}

export function calculateAnualRevenue(quarters) {
    let revenue = calculateRevenue(quarters.sales);
    return revenue;
}

export function calculateAnualGrowth(lastYearRev, actualYearRev) {
    if( lastYearRev === 0 ) return 100;
    let growthInPercent = ((actualYearRev - lastYearRev) / lastYearRev) * 100;
    return growthInPercent.toFixed(2);
}

export function calculateAnualGrowthOfMultipleYears(yearList) {
    let growth = [];
    let isFirstElementStartPoint = true;
    let lastYear = null;
    let lastYearRev = 0;
    let actualYearRev = 0;

    for( let year of yearList ) {
        if( isFirstElementStartPoint ) {
            growth.push(0);
            growth.push(calculateAnualGrowth(0, year));
            isFirstElementStartPoint = false;
            lastYear = year;
            continue;
        }

        for( let lastQuarter in lastYear ) {
            lastYearRev += calculateAnualRevenue(lastYear[lastQuarter]);
        }

        for( let lastQuarter in year ) {
            actualYearRev += calculateAnualRevenue(year[lastQuarter]);
        }

        growth.push(calculateAnualGrowth(lastYearRev, actualYearRev));
    }

    return growth;
}

export function formatLabel(label) {
    if( label.length > 4 ) {
        return label.substring(4);
    }
}