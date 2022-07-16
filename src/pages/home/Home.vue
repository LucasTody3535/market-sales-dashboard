<script setup>
document.querySelector("#app").dataset.page = "home";
</script>

<template>
    <nav>
        Menu
    </nav>
    <aside>
        Kpi
    </aside>
    <main>
        Charts
    </main>
</template>

<style>
[data-page="home"] {
    background-color: black;
    display: grid;
    grid-template-areas:
    "menu menu menu";
    grid-template-rows: 10vh 90vh;
    grid-template-columns: repeat(2, 50%);
}

[data-page="home"] * {
    background-color: brown;
}

[data-page="home"] nav {
    background-color: red;
    grid-area: menu;
}
</style>
