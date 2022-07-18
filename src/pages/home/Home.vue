<script setup>
import { onMounted, provide, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { queryKpiAndFormat, queryUserSalesData } from '../../../data/data';
import Data from '../../components/data/Data.vue';
import Kpi from '../../components/kpi/Kpi.vue';
import Menu from '../../components/menu/Menu.vue';
import { appMainStore } from '../../store';

const STORE = appMainStore();
const ROUTER = useRouter();
let KPI_DATA = reactive({
    list: []
});
const SALES_DATA = reactive({
    value: null
});

async function treatChangeOfOptions(data) {
    if( STORE.user === null ) return;
    let res = await queryUserSalesData(STORE.user.user.id, data.y.value, data.q.value);
    SALES_DATA.value = res;
}

provide("kpiData", KPI_DATA);
provide("salesData", SALES_DATA);

document.querySelector("#app").dataset.page = "home";

onMounted(async () => {
    if( STORE.user === null ) {
        await ROUTER.replace("/login");
        return;
    }
    
    let usr = await queryKpiAndFormat(STORE.user.user.id);
    KPI_DATA.list = usr.items;
})
</script>

<template>
    <nav>
        <Menu @optionsChanged="treatChangeOfOptions"></Menu>
    </nav>
    <aside>
        <Kpi></Kpi>
    </aside>
    <main>
        <Data></Data>
    </main>
</template>

<style>
[data-page="home"] {
    background-color: white;
    display: grid;
    grid-template-areas:
    "menu menu menu";
    grid-template-rows: 10vh 90vh;
    grid-template-columns: 15% 85%;
}

[data-page="home"] nav {
    grid-area: menu;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: var(--box-color);
    border-bottom: 1px solid black;
}

[data-page="home"] aside {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

[data-page="home"] main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    row-gap: 5px;
    column-gap: 5px;
    flex-wrap: wrap;
    overflow: scroll;
    scrollbar-width: none;
}

[data-page="home"] main::-webkit-scrollbar {
    display: none;
}
</style>