
const  Footer = () =>{

    return(
        <footer>
            <img src={"footer_logo.png"} alt="" />
            <div className="footer-links">
                <div className="footer-flex">
                    <div>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Reservations</a></li>
                            <li><a href="">Order Online</a></li>
                            <li><a href="">Login</a></li>
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