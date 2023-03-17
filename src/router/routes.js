export const routes = [
    {
        path: '/',
        redirect: '/users'
    },
    {
        path: '/users',
        name: 'users',
        component: () => import("@/pages/users.vue")
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import("@/pages/statistics.vue")
    },
    {
        path: '/communities',
        name: 'communities',
        component: () => import("@/pages/communities.vue")
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import("@/pages/employees.vue")
    },
    {
        path: '/calibration',
        name: 'calibration',
        component: () => import("@/pages/calibration.vue")
    }
];
