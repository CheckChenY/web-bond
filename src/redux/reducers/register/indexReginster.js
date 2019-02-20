
// import { combineReducers } from 'redux';
import update from 'react-addons-update';
import {
    FETCH_REGISTER_USER_LIST_SUCCESS
  } from '../../actions/register/index';
  


const initialState = {
    list: [],
    lanage:'zh-CN'
};


const plusAeducers = (state = initialState, action) => {
    const newState = update(state,{
        action: { $set: action.type}
    })
    switch (action.type) {
      case FETCH_REGISTER_USER_LIST_SUCCESS:
        return update(newState,{
            plus:{ $set: action.data }
        })
      default:
        return state;
    }
};
  
export default plusAeducers;