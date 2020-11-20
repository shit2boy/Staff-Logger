import {
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  ADD_TECH,
} from "../actions/types";

const initialState = {
  techs: null,
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };

    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
