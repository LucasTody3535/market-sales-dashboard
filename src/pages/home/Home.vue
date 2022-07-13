<script setup>
import Menu from "../../components/Menu.vue";

document.querySelector("#app").dataset.page = "home";

const actions = Object.freeze({
   
    toogleMenu() {
        document.querySelector("#aside").classList.toggle("visible");
        document.querySelector("#menu-toggler").classList.toggle("moveToggler")
    }

});

</script>

<template>
    <aside id="aside">
        <Menu></Menu>
    </aside>
    <main role="main" id="main"></main>
    <button @click="actions.toogleMenu" id="menu-toggler"></button>
</template>

<style>
[data-page="home"] {
    display: grid;
    grid-template-columns: 15% 85%;
}

[data-page="home"] aside {
    background-color: #0077ffc0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
}

[data-page="home"] #menu-toggler {
    display: none;
    height: 25px;
    width: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #0077ffc0;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: transparent;
    position: fixed;
    bottom: 0px;
    right: 10px;
    transition: ease-in-out 0.5s;
}

.visible {
    bottom: 0 !important;
}

.moveToggler {
    bottom: 50px !important;
}

@media screen and (max-width: 767px) {
    [data-page="home"] {
        display: block;
        position: relative;
        overflow: hidden;
    }

    [data-page="home"] aside {
        display: block;
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: -50px;
        transition: ease-in-out 0.5s;
        border-top: 1px solid black;
    }

    [data-page="home"] main {
        display: block;
        height: 100%;
    }

    [data-page="home"] #menu-toggler {
        display: block;
    }
}
</style>
