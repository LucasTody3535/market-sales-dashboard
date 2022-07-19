<script setup>
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, PointElement, Tooltip } from "chart.js";
import { inject, onMounted, ref, watch } from "vue";
import { COLORS, DEPARTMENTS } from "../../../consts/consts";

let salesData = inject("salesData");

Chart.register(
    BarController, BarElement,
    CategoryScale,
    LinearScale, PointElement,
    Legend,
    Tooltip
);

let CHART_REF = null;
let ITEMS_PROFIT = {};

onMounted(() => {
    let area = document.querySelector("#barChart");

    CHART_REF = new Chart(area, {
        type: "bar",
        data: {
            labels: DEPARTMENTS,
            datasets: [
                {
                    data: [4000, 6000, 15000, 5000, 2000, 2000, 6000, 2000, 6000, 2000],
                    fill: false,
                    backgroundColor: COLORS,
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    usePointStyle: true,
                    callbacks: {
                        label: function(metadata) {
                            let meta = null;

                            if( metadata.label === "dairy products" ) meta = ITEMS_PROFIT["dairyProducts"];
                            else meta =  ITEMS_PROFIT[metadata.label];

                            if( meta === undefined ) return;

                            return `Quantity: ${meta.formattedQuantity} - Revenue: ${meta.formattedRevenue}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "black"
                    },
                    grid: {
                        color: "black"
                    }
                },
                y: {
                    grid: {
                        color: "black"
                    },
                    ticks: {
                        color: "black"
                    }
                }
            }
        }
    })

})

watch(salesData, () => {
    let dataList = [];
    ITEMS_PROFIT = salesData.value.items;

    for( let data in ITEMS_PROFIT ) {
        dataList.push(ITEMS_PROFIT[data].quantity);
    }

    CHART_REF.data.datasets[0].data = dataList
    CHART_REF.update();
})
</script>

<template>
    <div class="chart-container">
        <canvas height="100px" width="200px" id="barChart"></canvas>      
    </div>
</template>

<style scoped>
    .chart-container {
        width: 100%;
        height: 100%;
    }
</style>