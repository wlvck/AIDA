export const routes = [
    {
        path: '/',
        redirect: '/statistics'
    },
    {
        path: '/users',
        name: 'users',
        component: () => import("@/pages/users/users.vue")
    },
    {
        path: '/users/:id',
        name: 'userDetail',
        redirect: {name: 'userDetailProfile'},
        component: () => import("@/pages/users/userDetailLayout.vue"),
        children: [
            {
                path: 'user-detail-history',
                name: 'userDetailHistory',
                component: () => import("@/pages/users/userDetailHistory.vue")
            },
            {
                path: 'user-detail-profile',
                name: 'userDetailProfile',
                component: () => import("@/pages/users/userDetailProfile.vue")
            }
        ]
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: () => import("@/pages/statistics.vue")
    },
    {
        path: '/communities',
        name: 'communities',
        component: () => import("@/pages/community/communities.vue")
    },
    {
        path: '/communities/:id',
        name: 'communityDetail',
        redirect: {name: 'communityDetailProfile'},
        component: () => import("@/pages/community/communityDetailLayout.vue"),
        children: [
            {
                path: 'community-detail-profile',
                name: 'communityDetailProfile',
                component: () => import("@/pages/community/communityDetailProfile.vue")
            },
            {
                path: 'community-detail-history',
                name: 'communityDetailHistory',
                component: () => import("@/pages/community/communityDetailHistory.vue")
            }
        ]
    },
    {
        path: '/employees',
        name: 'employees',
        component: () => import("@/pages/employee/employees.vue")
    },
    {
        path: '/employees/:id',
        name: 'employeeDetail',
        redirect: {name: 'employeeDetailProfile'},
        component: () => import("@/pages/employee/employeeDetailLayout.vue"),
        children: [
            {
                path: 'employee-detail-history',
                name: 'employeeDetailHistory',
                component: () => import("@/pages/employee/employeeDetailHistory.vue")
            },
            {
                path: 'employee-detail-profile',
                name: 'employeeDetailProfile',
                component: () => import("@/pages/employee/employeeDetailProfile.vue")
            }
        ]
    },
    {
        path: '/calibration',
        name: 'calibration',
        component: () => import("@/pages/calibration.vue")
    }
];
