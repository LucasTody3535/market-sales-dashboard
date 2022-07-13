import { createRouter, createWebHistory } from 'vue-router';
import Login from "./pages/login/Login.vue";
import Home from "./pages/home/Home.vue";

export const routesConfig = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "login",
            component: Login,
            path: "/login"
        },
        {
            name: "home",
            component: Home,
            path: "/home"
        },
        {
            name: "default",
            path: "/:pathMatch(.*)*",
            redirect: "/login"
        }
    ]
});

routesConfig.beforeEach((to, from) => {
    let authCookie = true;
    //let authCookie = document.cookie.auth;

    if(authCookie && to.name !== from.name) {
        return true;
    }
    return false;
});
