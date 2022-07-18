import { setRandomData } from "./db.utils";

export const USERS = Object.freeze([
    {
       id: 1,
       access_id: "20FGtr24",
       password: "12345",
       startYear: 2015
    }
]);

export const KPIS = Object.freeze([
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



export const SALES_DATA = Object.freeze([
    {
        user_id: USERS[0].id,
        items: {
            year2015: setRandomData(),
            year2016: setRandomData(),
            year2017: setRandomData(),
            year2018: setRandomData()
        }
    }
]);