import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'
import Home from './pages/Home.jsx'
import ReserveATable from './pages/ReserveATable.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import OrderOnline from './pages/OrderOnline.jsx';
import Login from './pages/Login.jsx';
import BookingConfirmation from './pages/BookingConfirmation.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path:'reservations',
                element: <ReserveATable />
            },
            {
                path:'about',
                element: <About />
            },
            {
                path:'menu',
                element: <Menu />
            },
            {
                path:'order-online',
                element: <OrderOnline />
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'booking-confirmation',
                element:<BookingConfirmation />
            },
        ]
    },
]);

export default router;