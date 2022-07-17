<script setup>
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, PointElement, Tooltip } from "chart.js";
import { onMounted, ref } from "vue";
import { COLORS, DEPARTMENTS } from "../../../consts/consts";

Chart.register(
    BarController, BarElement,
    CategoryScale,
    LinearScale, PointElement,
    Legend,
    Tooltip
);

const CHART_REF = ref(null);

onMounted(() => {
    let area = document.querySelector("#barChart");
    console.log(area.id)

    CHART_REF.value = new Chart(area, {
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