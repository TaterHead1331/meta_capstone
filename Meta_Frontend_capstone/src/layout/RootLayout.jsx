import { Outlet } from 'react-router-dom';
import Nav from '../assets/Nav';
import Footer from '../assets/Footer';



const  RootLayout = () =>{
    return(
        <>
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
};

export default RootLayout;
