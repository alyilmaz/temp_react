import { useRoutes } from 'react-router-dom';

// routes
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([UserRoutes, AdminRoutes]);
}
