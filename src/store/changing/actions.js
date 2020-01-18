export const ADD_CITY = "ADD_CITY";
export const DEL_CITY = "DEL_CITY";
export const FILTER_CITY = "FILTER_CITY";

export const addCity = city => ({
  type: ADD_CITY,
  payload: city
});

export const delCity = city => ({
  type: DEL_CITY,
  payload: city
});

export const filterCity = (temp, city) => ({
  type: FILTER_CITY,
  payload: temp,
  city: city
});
