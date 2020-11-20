import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "./types";

// export const getLogs = () => {
//     return async (dispatch){
//         setLoading();

//         const res = await fetch("http://localhost:5000/logs");
//         const data = await res.json();

//         dispatch({
//             type:   GET_LOGS,
//             payload: data
//         })
//     }
// }
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//add log

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("http://localhost:5000/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

//Delete log

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`http://localhost:5000/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
