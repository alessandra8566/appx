import { createRouter, createWebHistory } from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard',
        component: () => import('../layouts/Dashboard.vue'),
        children: [{
            path: '/dashboard',
            name: 'Dasboard',
            component: () => import('../views/Dashboard.vue')
        }]
    },
    {
        path: '/default',
        name: 'Default',
        layout: 'default',
        component: () => import('../views/Dashboard.vue')
    },
];

// function addLayoutToRoute(route, parentLayout = "default") {
//     route.meta = route.meta || {};
//     route.meta.layout = route.layout || parentLayout;

//     if (route.children) {
//         route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
//     }
//     return route;
// }

// routes = routes.map((route) => addLayoutToRoute(route))

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
