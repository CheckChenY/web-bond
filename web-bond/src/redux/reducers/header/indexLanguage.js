
// import { combineReducers } from 'redux';
import update from 'react-addons-update';
import {
    FETCH_TAB_LANGUAGE
  } from '../../actions/header/index';
  
const initialState = {
    list: []
};


const tabLanguange = (state = initialState, action) => {
    const newState = update(state,{
        action: { $set: action.type}
    })
    switch (action.type) {
      case FETCH_TAB_LANGUAGE:
        return update(newState,{
            lanage:{ $set: action.data }
        })
      default:
        return state;
    }
};
  
export default tabLanguange;