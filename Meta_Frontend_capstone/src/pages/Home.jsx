import Card from "../assets/Card"
import Review from "../assets/Review"
import {Link} from 'react-router-dom'

const Home =()=>{

    return(
        <>
            <section className="heroSection twelveColGrid">
                <div className="heroLeft">
                    <div className="">
                        <div>
                            <h1>Little Lemon</h1>
                             <h3>Chicago</h3>
                        </div>
                        <p>We are a family owned Mediterranean restaurant,  focused on traditional recipes served with a modern  twist.</p>
                        <Link to="reservations"><button className="heroBtn">Reserve a Table</button></Link>
                    </div>
                </div>
                <div className="imgContainer">
                    <img src={"header_image.jpg"} alt="" ></img>
                </div>
            </section>
            <section className="specialsSection twelveColGrid">
                <span className="specials sectionTitle">
                    <h2>This Weeks Specials!</h2>
                </span>
                <span className="specials btn-div">
                    <Link to="menu"><button className="heroBtn">Online Menu</button></Link>
                </span>
                <article className="specialsList">
                    <Card image="greekSalad.jpg" dish="Greek Salad" price="12.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                    <Card image="brushetta.png" dish="Brushetta" price="5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
                    <Card image="lemonDessert.jpg" dish="Lemon Dessert" price="4.99" description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
                </article>
            </section>
            <section className="testimonials twelveColGrid">
                <h3>What do our customers think?</h3>
                <div className="reviewsContainer">
                    <Review pic="saraLopez.jpg" name="Sara Lopez" username="Sara72" text='"Seriously cannot stop thinking about the Turkish Mac n Cheese!!"'/>
                    <Review pic="johnDoucette.jpg" name="John Doucette" username="Johnny_Utah" text='"We hadsuch a great time celebrating my grandmothers birthday!"'/>
                    <Review pic="jimmyCrickets2.jpg" name="Jimmy Crickets" username="crick_it" text='"Such achilled out atmosphere, love it!"'/>
                    <Review pic="miaMaria.jpg" name="Mia Maria" username="flowerTime" text='"Best Feta Salad in town. Flawless every time!"'/>
                </div>
            </section>
            <section className="aboutSection twelveColGrid">
                <div className="aboutInfo">
                    <div>
                        <div className="aboutTitle">
                            <h2>Little Lemon</h2>
                            <h3>Chicago</h3>
                        </div>
                        <p>Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
                    </div>
                </div>
                <div className="aboutImgContainer">
                    <div className="aboutImg" id="aboutTwo"></div>
                    <div className="aboutImg" id="aboutOne"></div>
                </div>

            </section>
        </>
    )
};

export default Home;