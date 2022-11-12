import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/user/sample-page')));
const SamplePage2 = Loadable(lazy(() => import('views/user/sample-page2')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/user/',
    element: <MainLayout />,
    children: [
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'sample-page2',
            element: <SamplePage2 />
        }
    ]
};

export default MainRoutes;
