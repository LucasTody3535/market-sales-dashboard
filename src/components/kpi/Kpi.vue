<script setup>
import { inject } from 'vue';
import KpiItem from '../kpi-item/KpiItem.vue';

const kpi = inject("kpiData");
</script>

<template>
    <h2>KPIs</h2>
    <div id="kpi-items">
        <KpiItem v-for="(kpi, index) in kpi.list" :key="index" :legend="kpi.name" :value="kpi.value"></KpiItem>
    </div>
</template>

<style scoped>
h2 {
    background-color: var(--box-color);
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    color: var(--font-color);
    border-radius: 5px;
    border: 1px solid black;
}

#kpi-items {
    display: block;
    height: 90%;
    width: 90%;
    display: flex;
    row-gap: 10px;
    flex-direction: column;
}

#kpi-items * {
    border: 1px solid black;
}
</style>
