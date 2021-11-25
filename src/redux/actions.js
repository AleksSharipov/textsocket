import * as types from './actionType';
import axios from 'axios';

const getPhones = (phones) => ({
  type: types.GET_PHONES,
  payload: phones,
});

export const changeRegion = (region) => ({
  type: types.CHANGE_REGION,
  payload: region,
});

const phoneAdded = (num) => ({
  type: types.ADD_PHONE,
  payload: num
});

export const fetchPhones = () => {
  return function (dispatch) {
    axios.get('http://localhost:5000/phones')
      .then((resp) => {
        dispatch(getPhones(resp.data))
      })
      .catch(err => console.log(err))
  }
};


export const addPhone = (phone) => {
  return function (dispatch) {
    axios.post('http://localhost:5000/phones', phone)
      .then((resp) => {
        console.log(resp)
        dispatch(phoneAdded(resp.data));
        dispatch(fetchPhones());
      })
      .catch(err => console.log(err))
  }
};
