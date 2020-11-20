import { GET_TECHS, DELETE_TECH, TECHS_ERROR, ADD_TECH } from "./types";

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//add technician
export const addTech = (tech) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:5000/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
export const deleteTech = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: DELETE_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
