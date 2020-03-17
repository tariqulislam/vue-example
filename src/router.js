import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
//import About from './views/About.vue'
//import Product from './views/Product.vue'

Vue.use(Router)

function loadView (view) {
    return () => import(`@/views/${view}.vue`/* webpackChunkName: "view-[request]" */ )
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: loadView('Home')
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('About')
        },
        {
            path: '/product',
            name: 'product',
            component: loadView('Product')
        }
    ]
})