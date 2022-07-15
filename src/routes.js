import { createRouter, createWebHistory } from 'vue-router';
import Login from "./pages/login/Login.vue";
import Home from "./pages/home/Home.vue";
import { appMainStore } from "./store";

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
    let hasUser = appMainStore().user;

    if( from.fullPath === "/" ) return true;
    if( hasUser && to.name !== from.name ) return true;
    if( from.fullPath === "/home" && !hasUser ) return true;

    return false;
});
