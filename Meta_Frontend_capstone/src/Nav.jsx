//import logo from "./public/logo.png"
const Nav = () =>{

    return(
        <header>
            <div className="nav-grid">
                <img src={"logo.png"}></img>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav