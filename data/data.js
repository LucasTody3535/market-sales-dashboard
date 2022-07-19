import { formatNumToReadableString } from "../src/utils/numbers/number.utils";
import { SYMBOLS } from "../src/utils/symbols/symbols.utils";
import { SALES_DATA, KPIS, USERS } from "./db";
import { calculateAnualGrowth, calculateAnualGrowthOfMultipleYears, calculateAnualRevenue, calculateProfitMargin, calculateRevenue, calculateTicket, calculateTotalSales, formatLabel, formatSalesMetadata } from "./db.data.operations";

export async function queryCanAccess(access_id, password) {
    for( let user of USERS ) {
        if( user.access_id === access_id,  user.password === password) return { canAccess: true, user };
    }
}

export async function queryKpiAndFormat(user_id) {
    let userKpis = null;
    let formattedNumberToString = "";

    for( let kpi of KPIS ) {
        if( kpi.user_id === user_id ) {
            userKpis = kpi;
            break;
        }
    }

    for( let kpi of userKpis.items ) {
        formattedNumberToString = formatNumToReadableString(kpi.value);
        if( kpi.type === "money" ) kpi.value = `${SYMBOLS.money}${formattedNumberToString}`;
        else if( kpi.type === "unity" ) kpi.value = `${formattedNumberToString}${SYMBOLS.unity}`;
    }

    return userKpis;
}

export async function queryUserSalesData(user_id, year, quarter) {
    let salesInfo = null;
    let years = [];
    let yearsLabels = [];
    let lastYearRevenue = 0;
    let actualYearRevenue = 0;
    let salesFormattedInfo = {
        revenue: 0,
        ticket: 0,
        profitMargin: 0,
        totalSales: 0,
        items: null,
        anualGrowth: {
            values: [],
            flags: []
        }
    };

    for( let sale of SALES_DATA ) {
        if( sale.user_id === user_id ) {
            for( let yearId in sale.items ) {
                if( yearId === year ) {
                    salesInfo = sale.items[year][quarter];
                    years.push(sale.items[yearId]);
                    yearsLabels.push(formatLabel(yearId));
                    break;
                }
                years.push(sale.items[yearId]);
                yearsLabels.push(formatLabel(yearId));
            }
        }
    }

    salesFormattedInfo.anualGrowth.values = calculateAnualGrowthOfMultipleYears(years);
    salesFormattedInfo.anualGrowth.flags = yearsLabels;

    salesFormattedInfo.revenue = calculateRevenue(salesInfo.sales);
    salesFormattedInfo.ticket = calculateTicket(salesFormattedInfo.revenue, salesInfo.clients);
    salesFormattedInfo.profitMargin = calculateProfitMargin(salesInfo.profit, salesFormattedInfo.revenue);
    salesFormattedInfo.totalSales = calculateTotalSales(salesInfo.sales);
    salesFormattedInfo.revenue = formatNumToReadableString(salesFormattedInfo.revenue);
    salesFormattedInfo.totalSales = formatNumToReadableString(salesFormattedInfo.totalSales);

    salesFormattedInfo.profitMargin = `${salesFormattedInfo.profitMargin}${SYMBOLS.percent}`;
    salesFormattedInfo.revenue = `${SYMBOLS.money}${salesFormattedInfo.revenue}`;
    salesFormattedInfo.ticket = `${SYMBOLS.money}${salesFormattedInfo.ticket}`;
    salesFormattedInfo.totalSales = `${salesFormattedInfo.totalSales}${SYMBOLS.unity}`;

    salesFormattedInfo.items = salesInfo.sales;
    formatSalesMetadata(salesFormattedInfo.items);

    salesFormattedInfo.anualGrowth.to = calculateAnualGrowth(lastYearRevenue, actualYearRevenue);

    return salesFormattedInfo;
}
