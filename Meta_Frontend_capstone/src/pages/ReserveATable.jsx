import { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';

const getToday = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: 'none',
  },
  errors: {},
  isSubmitting: false,
  availableTimes: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
      };

    case 'SET_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.value,
      };

    case 'SET_TIMES':
      return {
        ...state,
        availableTimes: action.times,
      };

    case 'RESET_FORM':
      return initialState;

    default:
      return state;
  }
}

const ReserveATable = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const { formData, errors, isSubmitting, availableTimes } = state;

  useEffect(() => {
    if (!formData.date) return;

    const dateObj = new Date(formData.date);
    const times = fetchAPI(dateObj);

    dispatch({ type: 'SET_TIMES', times });
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: 'SET_FIELD',
      field: name,
      value: name === 'guests' ? Number(value) : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1 || formData.guests > 10)
      newErrors.guests = 'Guests must be between 1 and 10';

    dispatch({ type: 'SET_ERRORS', errors: newErrors });

    return Object.keys(newErrors).length === 0;
  };


  const submitForm = (formData) => {
    return submitAPI(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: 'SET_SUBMITTING', value: true });

    if (!validate()) {
      dispatch({ type: 'SET_SUBMITTING', value: false });
      return;
    }

    const success = submitForm(formData);

    if (success) {
      navigate('/booking-confirmation');
    } else {
      dispatch({ type: 'SET_SUBMITTING', value: false });
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bookingSection">
      <div className="bookingWrapper">
        <h2>Book Your Reservation</h2>

        <form onSubmit={handleSubmit} className="bookingForm" noValidate>
          <div className="name">
            <div className="container">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>

            <div className="container">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>
          </div>

          <div className="container">
            <label htmlFor="date">Choose Date *</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              min={getToday()}
              onChange={handleChange}
              aria-invalid={!!errors.date}
            />
            {errors.date && <span>{errors.date}</span>}
          </div>

          <div className="container">
            <label htmlFor="time">Choose Time *</label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-invalid={!!errors.time}
              disabled={!availableTimes.length}
            >
              <option value="">Select time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.time && <span>{errors.time}</span>}
          </div>

          <div className="container">
            <label htmlFor="guests">Number of Guests *</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              aria-invalid={!!errors.guests}
            />
            {errors.guests && <span>{errors.guests}</span>}
          </div>

          <div className="container">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="none">None</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>

          <button
            aria-label="On Click"
            type="submit"
            className="reservationBtn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Create Reservation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveATable;
