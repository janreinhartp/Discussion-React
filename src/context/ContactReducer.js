const contactReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_ALL_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: action.payload,
      };
    case "GET_CONTACT":
      return {
        ...state,
        contact: action.payload,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: action.payload,
      };
    case "EDIT_CONTACT":
      return {
        ...state,
        formData: action.payload,
      };
    case "SET_EDIT":
      return {
        ...state,
        isEdit: true,
      };
    case "SET_EDIT_FALSE":
      return {
        ...state,
        isEdit: false,
      };
    default:
      return state;
  }
};

export default contactReducer;
