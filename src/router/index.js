import Vue from "vue"
import VueRouter from "vue-router"
import Films from "@/views/Films.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "films",
        component: Films,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
    },
    {
        path: "/strength",
        name: "strength",
        component: () => import("@/views/Strength.vue"),
    },
    {
        path: "/theimpendingloop",
        name: "theImpendingLoop",
        component: () => import("@/views/TheImpendingLoop.vue"),
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router
