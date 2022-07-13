<script setup></script>

<template>
    <nav role="navigation">
        <a href="">Products</a>
        <a href="">Incomes</a>
        <a href="">Expenses</a>
    </nav>
</template>

<style>
    nav {
        height: 95%;
        width: 100%;
        margin: 0 auto;
        flex-direction: column;
        display: flex;
        align-items: flex-start;
        display: grid;
        padding-top: 5%;
        grid-template-rows: repeat(3, 50px);
    }

    nav a {
        width: 95%;
        height: 100%;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-left: 5px;
        padding-left: 5px;
    }

    nav a:hover {
        background-color: #003fb4;
    }

    @media screen and (max-width: 767px) {
        nav {
            width: 100%;
            height: 100%;
            grid-template-columns: repeat(3, 33%);
            grid-template-rows: 100%;
            column-gap: 2px;
            padding: 0;
        }

        nav a {
            width: 100%;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
        }
    }
</style>
