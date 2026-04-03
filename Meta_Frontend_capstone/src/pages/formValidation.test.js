import { render, screen, fireEvent } from '@testing-library/react';
import ReserveATable from './ReserveATable';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api';

jest.mock('../api');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () => {
  fetchAPI.mockReturnValue(['17:00', '18:00']);

  render(
    <BrowserRouter>
      <ReserveATable />
    </BrowserRouter>
  );
};

describe('Reservation Form Input Attributes', () => {

  test('First Name input has correct attributes', () => {
    renderComponent();

    const input = screen.getByLabelText(/First Name/i);

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toBeRequired();
  });

  test('Last Name input has correct attributes', () => {
    renderComponent();

    const input = screen.getByLabelText(/Last Name/i);

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toBeRequired();
  });

  test('Date input has correct attributes', () => {
    renderComponent();

    const input = screen.getByLabelText(/Choose Date/i);

    expect(input).toHaveAttribute('type', 'date');
    expect(input).toBeRequired();
  });

  test('Time select has correct attributes', () => {
    renderComponent();

    const select = screen.getByLabelText(/Choose Time/i);

    expect(select.tagName).toBe('SELECT');
  });

  test('Guests input has min and max attributes', () => {
    renderComponent();

    const input = screen.getByLabelText(/Number of Guests/i);

    expect(input).toHaveAttribute('type', 'number');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
  });

  test('Occasion select exists', () => {
    renderComponent();

    const select = screen.getByLabelText(/Occasion/i);

    expect(select.tagName).toBe('SELECT');
  });

});


describe('Reservation Form Validation Logic', () => {

  beforeEach(() => {
    fetchAPI.mockReturnValue(['17:00', '18:00']);
    submitAPI.mockReturnValue(true);
  });

  test('First name invalid (empty)', () => {
    renderComponent();

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
  });

  test('First name valid', () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: 'John' }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.queryByText(/First name is required/i)).toBeNull();
  });

  test('Guests invalid (0)', () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: 0 }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.getByText(/Guests must be between 1 and 10/i)).toBeInTheDocument();
  });

  test('Guests valid (5)', () => {
    renderComponent();

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), {
      target: { value: 5 }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.queryByText(/Guests must be between 1 and 10/i)).toBeNull();
  });

  test('Date required validation', () => {
    renderComponent();

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  });

  test('Full valid form submits successfully', () => {
    renderComponent();

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
      target: { value: 3 }
    });

    fireEvent.click(screen.getByText(/Create Reservation/i));

    expect(submitAPI).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/booking-confirmation');
  });

});