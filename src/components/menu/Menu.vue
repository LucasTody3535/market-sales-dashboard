<script setup>
import { onMounted, ref } from 'vue';

const emit = defineEmits(['optionsChanged']);
let year = ref("year2015");
let quarter = ref("firstQuarter");

function whenOptionChanged() {
    emit("optionsChanged", {
        y: year,
        q: quarter
    });
}

onMounted(() => {
    emit("optionsChanged", {
        y: year,
        q: quarter
    });
});

</script>

<template>
    <label for="year">Year:</label>
    <select @change="whenOptionChanged" v-model="year" name="year" id="year">
        <option value="year2015">2015</option>
        <option value="year2016">2016</option>
        <option value="year2017">2017</option>
        <option value="year2018">2018</option>
    </select>
    <label for="year">Period:</label>
    <select @change="whenOptionChanged" v-model="quarter" name="period" id="period">
        <option value="firstQuarter">First Quarter</option>
        <option value="secondQuarter">Second Quarter</option>
        <option value="thirdQuarter">Third Quarter</option>
        <option value="fourthQuarter">Fourth Quarter</option>
    </select>
</template>

<style scoped>
select {
    margin-left: 10px;
    background-color: transparent;
    border: none;
    height: 30px;
    border-bottom: 1px solid var(--font-color);
    color: var(--font-color);
    font-size: 1.2rem;
}

select:nth-child(4) {
    width: 150px;
}

label:nth-child(3) {
    margin-left: 30px;
}

label {
    margin-left: 10px;
    font-size: 1.2rem;
    color: var(--font-color);
}

@media screen and (max-width: 767px) {
    select {
        font-size: 0.9rem;
        height: 20px;
    }

    select:nth-child(4) {
        width: 100px;
    }
}
</style>
