const Review =(props)=>{

    return(
        <>
        <div className="review-card">
            <div className="picAndUsername">
                <div className="img-container">
                    <img src={props.pic} alt="" />
                </div>
                <div className="username">
                    <p>{props.name}</p>
                    <small>{props.username}</small>
                </div>
            </div>
            <div className="rating">
                <p>*****</p>
            </div>
            <p>{props.text}</p>
        </div>
        </>
    );
};

export default Review;