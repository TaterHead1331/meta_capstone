import {useState} from 'react';

const ReserveATable =()=>{

    const [formData, setFormData] = useState[{
        firstName: "",
        lastName: "",
        date: "",
        time: "",
        occasion: "None",
    }];

    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Submitted:", formData);
    alert(JSON.stringify(formData, null, 2));
  };

    return(
        <div className="bookingSection">
            <div className="bookingWrapper">
                <h2>Book Your Reservation</h2>
                <form onSubmit={handleSubmit} className="bookingForm">
                    <div className="name">
                        <div className="firstNameContainer container">
                            <label htmlFor="firstName">First Name<span className="required">*</span></label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        <div className="lastNameContainer container">
                            <label htmlFor="lastName">Last Name<span className="required">*</span></label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="dateContainer container">
                        <label htmlFor="date">Choose Date<span className="required">*</span></label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                    </div>
                    <div className="timeContainer container">
                        <label htmlFor="time">Choose Time<span className="required">*</span></label>
                        <select name="time" id="time" value={formData.time} onChange={handleChange}>
                            {availableTimes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="occasionContainer container">
                        <label htmlFor="occasion">Occasion</label>
                        <select name="occasion" id="occasion" value={formData.occasion} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                     <button className="reservationBtn" type="sumbit">Create Reservation</button>
                </form>
            </div>
        </div>
    );
}

export default ReserveATable;