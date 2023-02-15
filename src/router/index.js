import {createRouter, createWebHistory} from "vue-router"
import currencies from "../router/views/currencies.vue"
import calculator from "../router/views/calculator.vue"

const routes = [
    {path: "/", component: currencies},
    {path: "/calculator", component: calculator}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router