import { formatNumToReadableString } from "../src/utils/numbers/number.utils";
import { SYMBOLS } from "../src/utils/symbols/symbols.utils";

const USERS = Object.freeze([
    {
       id: 1,
       access_id: "20FGtr24",
       password: "12345",
       startYear: 2015
    }
]);

const KPIS = Object.freeze([
    {
        user_id: USERS[0].id,
        items: [
            {
                name: "Target Sales",
                value: 3000,
                type: "unity"
            },
            {
                name: "Target Expenses",
                value: 20000,
                type: "money"
            },
            {
                name: "Target Incomes",
                value: 3000,
                type: "money"
            }
        ]
    }
]);

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
