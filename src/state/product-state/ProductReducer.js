import { actionTypes } from './actionTypes';

export const initialState = {
  default: true,
  lowToHigh: false,
  highToLow: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DEFAULT:
      return {
        ...state,
        default: true,
        lowToHigh: false,
        highToLow: false,
      };

    case actionTypes.LOW_TO_HIGH:
      return {
        ...state,
        default: false,
        lowToHigh: true,
        highToLow: false,
      };

    case actionTypes.HIGH_TO_LOW:
      return {
        ...state,
        default: false,
        lowToHigh: false,
        highToLow: true,
      };

    default:
      return state;
  }
};
