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
        path: '/employees/:id',
        name: 'employeeDetail',
        redirect: {name: 'employeeDetailProfile'},
        component: () => import("@/pages/employeeDetail.vue"),
        children: [
            {
                path: 'employee-detail-history',
                name: 'employeeDetailHistory',
                component: () => import("@/pages/employeeDetailHistory.vue")
            },
            {
                path: 'employee-detail-profile',
                name: 'employeeDetailProfile',
                component: () => import("@/pages/employeeDetailProfile.vue")
            }
        ]
    },
    {
        path: '/calibration',
        name: 'calibration',
        component: () => import("@/pages/calibration.vue")
    }
];
