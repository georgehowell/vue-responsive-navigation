import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/About.vue') }
        },
        {
            path: '/contact',
            name: 'contact',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/Contact.vue') }
        },
        {
            path: '/gsap',
            name: 'gsap',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/GSAP.vue') }
        },
        {
            path: '/css',
            name: 'css',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/CSS.vue') }
        },
        {
            path: '/more-css',
            name: 'more-css',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/MoreCSS.vue') }
        },
        {
            path: '/css-again',
            name: 'css-again',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/CSS-again.vue') }
        },
        {
            path: '/css-glitch',
            name: 'css-glitch',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/CSS-Glitch.vue') }
        },
        {
            path: '/css-and-javascript',
            name: 'css-and-javascript',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/CSSandJavascript.vue') }
        },
        {
            path: '/blog/',
            name: 'blog-home',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/BlogHome.vue') }
        },
        {
            path: '/blog/:slug',
            name: 'example-post',
            component: () => { return import ('./views/ExamplePost') }
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => { return import ('./views/Portfolio.vue') }
        }
    ]
})