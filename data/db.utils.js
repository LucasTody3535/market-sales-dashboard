const setDepartmentsSalesData = () => ({
    bakery: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    bazaar: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    butchery: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    cleaning: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    dairyProducts: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    electronics: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    grocery: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    hortifrutti: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    winery: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
    },
    textile: {
        quantity: Math.floor(Math.random() * (5000 - 1000) + 1000),
        revenue: Math.floor(Math.random() * (10000 - 1000) + 1000)
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
