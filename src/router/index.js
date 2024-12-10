import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import AboutPage from '@/components/AboutPage.vue'

const routes = [

    { path: '/', component: MainPage },
    { path: '/about-us', component: AboutPage }

]

const router = createRouter({

    history: createWebHistory(),

    routes

})

export default router
