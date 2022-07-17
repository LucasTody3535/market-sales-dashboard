<script setup></script>

<template>
    <label for="year">Year:</label>
    <select name="year" id="year">
        <option value="2021">2021</option>
    </select>
    <label for="year">Period:</label>
    <select name="period" id="period">
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
    color: white;
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
