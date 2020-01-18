export const ADD_CITY = "ADD_CITY";
export const DEL_CITY = "DEL_CITY";

export const addCity = city => ({
  type: ADD_CITY,
  payload: city
});

export const delCity = city => ({
  type: DEL_CITY,
  payload: city
});
