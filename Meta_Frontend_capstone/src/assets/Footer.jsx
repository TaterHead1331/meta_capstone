import {Link} from 'react-router-dom'

const  Footer = () =>{

    return(
        <footer>
            <img src={"footer_logo.png"} alt="" />
            <div className="footer-links">
                <div className="footer-flex">
                    <div>
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="menu">Menu</Link></li>
                            <li><Link to="reservations">Reservations</Link></li>
                            <li><Link to="order-online">Order Online</Link></li>
                            <li><Link to="login">Login</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="">69 Vico Araratiano</a></li>
                            <li><a href="">(709) 879-4459</a></li>
                            <li><a href="">Email Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Socials</h4>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer