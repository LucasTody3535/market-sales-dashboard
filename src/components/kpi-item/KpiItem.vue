<script setup>

defineProps({
    legend: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div>
        <p>Per Quarter</p>
        <p v-text="value"></p>
        <p v-text="legend"></p>
    </div>
</template>

<style scoped>
div {
    height: 100px;
    width: 100%;
    background-color: var(--box-color);
    display: grid;
    grid-template-rows: 15% 70% 15%;
    border-radius: 5px;
}

div p {
    margin: 0;
    padding: 0;
    color: var(--font-color);
}

div p:nth-child(1) {
    margin-left: 5px;
}

div p:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
}

div p:nth-child(3) {
    text-align: center;
}
</style>
