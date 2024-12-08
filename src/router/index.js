import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'

const routes = [

    { path: '/', component:HeaderPage }

]

const router = createRouter({

    history: createWebHistory(),

    routes
    
})

export default router
