<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { queryCanAccess } from '../../../data/data';
import { appMainStore } from '../../store';

document.querySelector("#app").dataset.page = "login";

const ROUTER = useRouter();
const STORE = appMainStore();

let access_id = ref("");
let password = ref("");

const treatAccessInfo = async () => {
    STORE.user = await queryCanAccess(access_id.value, password.value);
    ROUTER.replace("home");
}
</script>

<template>
    <form @submit.prevent="treatAccessInfo()">
        <div>
            <label for="access_id">Access Id</label>
            <input id="access_id" v-model="access_id" type="text" placeholder="access Id">
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" placeholder="password">
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
    </form>
    <div id="help-links">
        <a href="">Forgot Id?</a>
        <a href="">Forgot Password?</a>
    </div>
</template>

<style>

[data-page = "login"] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

[data-page = "login"] #help-links {
    bottom: 50px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
}

[data-page = "login"] #help-links a {
    color: black;
}

[data-page = "login"] #help-links a:hover {
    color: #0077ffc0;
}

[data-page = "login"] #help-links a:visited {
    color: #003775c0;
}

[data-page = "login"] form {
    background-color: #0077ffc0;
    height: 250px;
    flex: 0.4;
    display: grid;
    grid-template-rows: 38% 38% 20%;
    row-gap: 2%;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
}

[data-page = "login"] form div {
    display: flex;
    flex-direction: column;
    row-gap: 20%;
    border: none;
}

[data-page = "login"] form div:nth-child(3) {
    align-items: flex-start;
    justify-content: center;
    margin-left: 10px;
}

[data-page = "login"] form div input {
    width: 300px;
    height: 30px;
    margin-left: 20px;
    border-radius: 5px;
    border: 1px solid black;
}

[data-page = "login"] form div input:focus {
    outline: none;
}

[data-page = "login"] form div button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #00bb00b2;   
    cursor: pointer;
}

@media screen and (max-width: 767px) {

    [data-page = "login"] {
        flex-direction: column;
        row-gap: 50px;
    }

    [data-page = "login"] form {
        flex: 0.5;
        width: 80%;
    }

    [data-page = "login"] form div input {
        width: 240px;
        margin-left: 10px;
    }

    [data-page = "login"] #help-links {
        width: 200px;
        height: 50px;
        flex-wrap: wrap;
        position: unset;
    }
}

</style>
