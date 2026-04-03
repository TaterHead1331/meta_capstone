import { render, screen, fireEvent } from '@testing-library/react';
import ReserveATable from './ReserveATable';
import { fetchAPI, submitAPI } from '../api';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../api');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ReserveATable Form', () => {

  beforeEach(() => {
    fetchAPI.mockReturnValue(['17:00', '18:00']);
    submitAPI.mockReturnValue(true);
    mockNavigate.mockClear();
  });

  test('renders form fields', () => {
    render(
      <BrowserRouter>
        <ReserveATable />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
  });

  test('shows error on empty submit', () => {
    render(
      <BrowserRouter>
        <ReserveATable />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
  });

  test('accepts valid input', () => {
    render(
      <BrowserRouter>
        <ReserveATable />
      </BrowserRouter>
    );

    const input = screen.getByLabelText(/First Name/i);

    fireEvent.change(input, {
      target: { value: 'John' }
    });

    expect(input.value).toBe('John');
  });

  test('invalid guest count shows error', () => {
    render(
      <BrowserRouter>
        <ReserveATable />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: 0 }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.getByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('calls submitAPI on valid form submit', () => {
    render(
      <BrowserRouter>
        <ReserveATable />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' }
    });

    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: 'Doe' }
    });

    fireEvent.change(screen.getByLabelText(/Choose Date/i), {
      target: { value: '2026-12-25' }
    });

    fireEvent.change(screen.getByLabelText(/Choose Time/i), {
      target: { value: '18:00' }
    });

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: 2 }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(submitAPI).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      date: '2026-12-25',
      time: '18:00',
      guests: 2,
      occasion: 'none',
    });

    expect(mockNavigate).toHaveBeenCalledWith('/booking-confirmation');
  });

});