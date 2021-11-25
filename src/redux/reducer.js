import * as types from './actionType';

const initialState = {
  phones: [],
  phone: {},
  region: '+7',
  loading: true,
};

const phonesReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PHONES:
      return {
        ...state,
        phones: action.payload,
        loading: false,
      }
    case types.ADD_PHONE:
      return {
        ...state,
        phones: state.phones.concat(action.payload),
        loading: false
      }
    case types.CHANGE_REGION:
      return {
        ...state,
        region: action.payload,
      }
    default:
      return state;
  }
};

export default phonesReducers;