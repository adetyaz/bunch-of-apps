import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Converter from '@/components/Converter.vue'
import CityCard from '@/components/CityCard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/converter',
        name: 'Converter',
        component: Converter,
    },
    {
        path: '/citycard',
        name: 'CityCard',
        component: CityCard,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
