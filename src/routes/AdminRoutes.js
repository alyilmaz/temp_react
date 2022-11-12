import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/admin/dashboard')));
const Dashboard2 = Loadable(lazy(() => import('views/admin/dashboard copy')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
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
