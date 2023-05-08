const initialState = {
    formData: {
      shippingName: '',
      billingAddress: '',
      creditCardNumber: '',
      // Add more form fields as needed
    },
    orderData: null, // Initialize with null or appropriate initial value
  };
  
  const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.payload.name]: action.payload.value,
          },
        };
        case 'SUBMIT_FORM':
          // Handle form submission logic here, e.g., make API request, update database, etc.
          // Here, we simply set the order data in the state
          return {
            ...state,
            orderData: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default checkoutReducer;
  