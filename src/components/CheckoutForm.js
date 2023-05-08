import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import './checkout-form.css'; // Import the CSS file

const CheckoutForm = () => {
  const formData = useSelector(state => state.checkout.formData);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [showErrors, setShowErrors] = useState(false); // State to control error display

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { name, value } });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setShowErrors(false);
    const form = event.currentTarget;

    if (form.checkValidity()) {
      dispatch({ type: 'SUBMIT_FORM', payload: formData });
    } else {
      setShowErrors(true); // Show errors if form is not valid
    }

    setValidated(true);
  };

  return (
    <div className="checkout-form-container">
      <Form className="checkout-form" noValidate validated={validated} onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <h2>Shipping Information</h2>
        <Form.Group controlId="shippingName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="shippingName"
            value={formData.shippingName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Billing Information */}
        <h2>Billing Information</h2>
        <Form.Group controlId="billingAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Order Summary */}
        <h2>Order Summary</h2>
        <ul>
          {/* Iterate over items and display them */}
          {formData?.items?.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
        <p className='total-label'>Total: {formData.total}</p>

        {/* Payment Information */}
        <h2>Payment Information</h2>
        <Form.Group controlId="creditCardNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            name="creditCardNumber"
            value={formData.creditCardNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit">Complete Purchase</Button>

         {/* Error Message */}
         {showErrors && (
          <p className="error-message">Please fill in all required fields correctly.</p>
        )}
      </Form>
    </div>
  );
};

export default CheckoutForm;
