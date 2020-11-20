import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "../actions/types";

const initialState = {
  logs: null,
  loading: false,
  current: null,
  error: null,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        current: action.payload,
        logs: state.logs.map((log) =>
          log.id === action.payload ? action.payload : log
        ),
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
