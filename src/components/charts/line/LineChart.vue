<script setup>
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { inject, onMounted, ref, watch } from "vue";

let salesData = inject("salesData");
let CHART_REF = null;

Chart.register(
    LineController, LineElement,
    CategoryScale,
    LinearScale, PointElement,
    Legend,
    Tooltip
);


onMounted(() => {
    let area = document.querySelector("#lineChart");

    CHART_REF = new Chart(area, {
        type: "line",
        data: {
            labels: ["from", "to"],
            datasets: [
                {
                    label: "Data in Percent",
                    data: [65, 59, 80, 20, 35, 100],
                    fill: false,
                    borderColor: "black",
                    tension: 0.1
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "black"
                    }
                },
                tooltip: {
                    usePointStyle: true,
                    callbacks: {
                        label: function(metadata) {
                            return `${metadata.raw}%`
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: "black"
                    },
                    ticks: {
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
    let values = salesData.value.anualGrowth.values;
    let labels = salesData.value.anualGrowth.flags;
    CHART_REF.data.datasets[0].data = values;
    CHART_REF.data.labels = labels;
    CHART_REF.update();
})

</script>

<template>
    <div class="chart-container">
        <canvas height="100px" id="lineChart"></canvas>      
    </div>
</template>

<style scoped>
    .chart-container {
        width: 100%;
        height: 100%;
    }
</style>