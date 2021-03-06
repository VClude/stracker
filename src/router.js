import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
/* webpackChunkName: "about" */


export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/guide',
            name: 'guide',
            component: () =>
                import ('./views/Guide.vue')
        },
        {
            path: '/pool',
            name: 'pool',
            component: () =>
                import ('./views/Pool.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () =>
                import ('./views/Notfound.vue')
        },
        {
            path: '/heroes',
            name: 'heroes',
            component: () =>
                import ('./views/Heroes.vue')
        },
        {
            path: '/hero/:id',
            name: 'hero',
            component: () =>
                import ('./views/Hero.vue')
        },
        {
            path: '/abilities',
            name: 'abilities',
            component: () =>
                import ('./views/Abilities.vue')
        },
        {
            path: '/ability/:id',
            name: 'ability',
            component: () =>
                import ('./views/Ability.vue')
        },
        {
            path: '/ladder',
            name: 'ladder',
            component: () =>
                import ('./views/Ladder.vue')
        },
        {
            path: '/regions',
            name: 'regions',
            component: () =>
                import ('./views/Regions.vue')
        },
        {
            path: '/drafter',
            name: 'drafter',
            component: () =>
                import ('./views/Drafter.vue')
        },
        {
            path: '/draft',
            name: 'draft',
            component: () =>
                import ('./views/Draft.vue')
        },
        {
            path: '/profile/',
            name: 'profile',
            component: () =>
                import ('./views/Profile.vue')
        },
        {
            path: '/player/:id',
            name: 'player',
            component: () =>
                import ('./views/Profile.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./components/Login.vue')
        },
        {
            path: '/authenticated',
            name: 'authenticated',
            component: () =>
                import ('./components/Authenticated.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
