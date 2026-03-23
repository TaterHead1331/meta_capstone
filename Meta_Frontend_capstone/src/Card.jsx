const Card =(props)=>{
    return(
        <div className="card">
            <div className="cardImg">
                <img src={props.image} alt="" />
            </div>
            <div className="cardTitle">
                <h4>{props.dish}</h4>
                <p>${props.price}</p>
            </div>
            <div className="cardDescription">
                <p>{props.description}</p>
            </div>
            <div className="order">
                <a href="/booking">Order a delivery</a>
                <img src={"dishSVG.svg"} alt="" />
            </div>
        </div>
    )
};

export default Card;