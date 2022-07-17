<script setup>
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { onMounted, ref } from "vue";

Chart.register(
    LineController, LineElement,
    CategoryScale,
    LinearScale, PointElement,
    Legend,
    Tooltip
);

const CHART_REF = ref(null);

onMounted(() => {
    let area = document.querySelector("#lineChart");

    CHART_REF.value = new Chart(area, {
        type: "line",
        data: {
            labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
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