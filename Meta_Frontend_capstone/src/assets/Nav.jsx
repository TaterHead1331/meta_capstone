import { Link } from 'react-router-dom';
const Nav = () =>{


    return(
        <header>
            <div className="nav-grid">
                <img src={"logo.png"}></img>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="about">About</Link></li>
                        <li> <Link to="menu">Menu</Link></li>
                        <li> <Link to="reservations">Reservations</Link></li>
                        <li> <Link to="order-online">Order Online</Link></li>
                        <li> <Link to="login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav