const setDepartmentsSalesData = () => ({
    bakery: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    bazaar: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    butchery: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    cleaning: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    dairyProducts: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    electronics: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    grocery: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    hortifrutti: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    winery: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
    textile: {
        quantity: Math.floor(Math.random() * (5000 - 5) + 5),
        revenue: Math.floor(Math.random() * (10000 - 5) + 5),
    },
});

export const setRandomData = () => ({
    firstQuarter: {
        clients: Math.floor(Math.random() * (2000 - 5) + 5),
        profit: Math.floor(Math.random() * (100 - 5) + 5),
        sales: setDepartmentsSalesData()
    },
    secondQuarter: {
        clients: Math.floor(Math.random() * (2000 - 5) + 5),
        profit: Math.floor(Math.random() * (100 - 5) + 5),
        sales: setDepartmentsSalesData()
    },
    thirdQuarter: {
        clients: Math.floor(Math.random() * (2000 - 5) + 5),
        profit: Math.floor(Math.random() * (100 - 5) + 5),
        sales: setDepartmentsSalesData()
    },
    fourthQuarter: {
        clients: Math.floor(Math.random() * (2000 - 5) + 5),
        profit: Math.floor(Math.random() * (100 - 5) + 5),
        sales: setDepartmentsSalesData()
    }
});
