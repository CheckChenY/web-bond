// import {
//     FETCH_LOGIN_USER_LIST,
//     FETCH_LOGIN_USER_LIST_SUCCESS,
//     FETCH_LOGIN_USER_LIST_FAIL,
//   } from '../../../constants/login/ActionType';

// //   import { OperationStatus } from '../../../constants/OperationStatus';
  
//   const initialState = {
//     list: []
//   };
  
//   const loginEnter = (state = initialState, { type, payload }) => {
//     switch (type) {
//       case FETCH_LOGIN_USER_LIST:
//         return {
//           ...state,
//         //   status: OperationStatus.initial
//         };
//       case FETCH_LOGIN_USER_LIST_SUCCESS:
//         return {
//         //   ...state,
//           login: payload,
//         //   status: OperationStatus.load_success,
//         };
//       case FETCH_LOGIN_USER_LIST_FAIL:
//         return {
//           ...state,
//         //   status: OperationStatus.load_fail,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default loginEnter;



// import { combineReducers } from 'redux';
import update from 'react-addons-update';
import {
    LOGIN_IN_ACTION,
    LOGIN_IN_SUCCESS,
    LOGIN_IN_FAIL
  } from '../../actions/login/index';
  
const initialState = {
    list: []
};


const loginReduceFun = (state = initialState, action) => {
    const newState = update(state,{
        action: { $set: action.type}
    })
    switch (action.type) {
      case LOGIN_IN_ACTION:
        return update(newState,{
            lanage:{ $set: action.data }
        })
    case LOGIN_IN_SUCCESS:
        return update(newState,{
            lanage:{ $set: action.data }
        })
    case LOGIN_IN_FAIL:
        return update(newState,{
            lanage:{ $set: action.data }
        })
      default:
        return state;
    }
};
  
export default loginReduceFun;
  