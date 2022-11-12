import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import AdminLayout from 'layout/AdminLayout';

// login option 3 routing
// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/admin/dashboard')));
const Dashboard2 = Loadable(lazy(() => import('views/admin/dashboard2')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <AdminLayout />,
    children: [
        {
            path: '/admin/dashboard',
            element: <Dashboard />
        },
        {
            path: '/admin/dashboard2',
            element: <Dashboard2 />
        }
    ]
};

export default AuthenticationRoutes;
