
const ReserveATable =()=>{

    return(
        <div className="bookingSection">
            <h2>Book Your Reservation</h2>
            <form className="bookingForm">
                <div className="name">
                    <div className="firstName">
                        <label htmlFor="firstNameContainer container">First Name<span className="required">*</span></label>
                        <input type="text" id="firstName" name="firstName" />
                    </div>
                    <div className="lastNameContainer container">
                        <label htmlFor="lastName">Last Name<span className="required">*</span></label>
                        <input type="text" id="lastName" name="lastName"/>
                    </div>
                </div>
                <div className="dateContainer container">
                    <label htmlFor="date">Choose Date<span className="required">*</span></label>
                    <input type="date" id="date" name="date"/>
                </div>
                <div className="timeContainer container">
                    <label htmlFor="time">Choose Time<span className="required">*</span></label>
                    <select name="time" id="time">
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                    </select>
                </div>
                <div className="occasionContainer container">
                    <label htmlFor="occasion">Occasion</label>
                    <select name="occasion" id="occasion">
                        <option value="none">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                 <button className="reservationBtn" type="sumbit">Create Reservation</button>
            </form>
        </div>
    );
}

export default ReserveATable;