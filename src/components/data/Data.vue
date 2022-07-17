<script setup>
import BarChart from '../charts/bar/BarChart.vue';
import LineChart from '../charts/line/LineChart.vue';
</script>

<template>
    <div>
        <h3>
            Medium Ticket
        </h3>
        <p>$700,00</p>
    </div>
    <div>
        <h3>
            Revenue
        </h3>
        <p>$50.000</p>
    </div>
    <div>
        <h3>
            Profit
        </h3>
        <p>25%</p>
    </div>
    <div>
        <h3>
            Total Sales
        </h3>
        <p>50.000un</p>
    </div>
    <div id="line-chart">
        <h3>
            Anual Growth
        </h3>
        <LineChart></LineChart>
    </div>
    <div id="bar-chart">
        <h3>
            Sales By Each Department(units)
        </h3>
        <BarChart></BarChart>
    </div>
</template>

<style scoped>
main > div {
    height: 100px;
    background-color: var(--box-color);
    display: grid;
    grid-template-rows: 15% 85%;
    border-radius: 5px;
    border: 1px solid black;
}

#line-chart div {
    width: 80%;
    height: 80%;
    border-radius: 0;
    margin: 0 auto;
}

#bar-chart div {
    width: 80%;
    height: 90%;
    border-radius: 0;
    margin: 0 auto;
}

div h3 {
    color: var(--font-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 5px;
    font-size: 1.3rem;
}

div p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: var(--font-color);
}

div:nth-child(1) {
    width: 23.5%;
    height: 30%;
}

div:nth-child(2) {
    width: 23.5%;
    height: 30%;
}

div:nth-child(3) {
    width: 23.5%;
    height: 30%;
}

div:nth-child(4) {
    width: 23.5%;
    height: 30%;
}

div:nth-child(5) {
    width: 48%;
    height: 65%;
    grid-template-rows: 10% 90%;
}

div:nth-child(6) {
    width: 48%;
    height: 65%;
    grid-template-rows: 10% 90%;
}
</style>
