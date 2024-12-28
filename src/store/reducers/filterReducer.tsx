import { SET_FILTER } from '../actions';

const initialState = 'all';

const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default filterReducer;