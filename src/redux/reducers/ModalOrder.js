 
const initialState = {
    ordermodal: false,
    name: '',
    modalInputName: '',
  };
  
  const modalOrder = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_ORDER':
        return {
          ...state,
          ordermodal: action.payload,
          name: '',
          modalInputName: '',
        };
      default:
        return state;
    }
  };
  
  export default modalOrder;