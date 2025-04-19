import { createBrowserRouter} from 'react-router-dom';
import { lazy } from 'react';
import Auth from '../pages/Auth';
import Signin from '../pages/Signin';
import Accountcreate from '../pages/Create';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
    },
    {
        path: '/signin',
        element: <Signin></Signin>,
    },
    {
        path: '/createaccount',
        element: <Accountcreate />,
    },
]);