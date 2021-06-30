import ACTIONS from "../action";

const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default authReducers;
