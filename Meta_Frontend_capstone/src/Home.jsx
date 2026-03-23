import Card from "./Card"
import Review from "./Review"

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
                        <button className="heroBtn">Reserve a Table</button>
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
                    <button className="heroBtn">Online Menu</button>
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
                     <Review pic="johnDoucette.jpg" name="John Doucette" username="Johnny_Utah" text='"We had such a great time celebrating my grandmothers birthday!"'/>
                      <Review pic="jimmyCrickets.jpg" name="Jimmy Crickets" username="crick_it" text='"Such a chilled out atmosphere, love it!"'/>
                       <Review pic="miaMaria.jpg" name="Mia Maria" username="flowerTime" text='"Best Feta Salad in town. Flawless every time!"'/>
                </div>
            </section>
        </>
    )
};

export default Home;