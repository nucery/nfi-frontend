import { initialState } from './initial-state';
import * as actionJs from './action';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionJs.type.userId:
      return Object.assign({}, state, {
        userId: action.value,
      });
    case actionJs.type.connectionMask:
      return Object.assign({}, state, {
        connectionMask: action.value,
      });
    case actionJs.type.connectionToUrl:
      return Object.assign({}, state, {
        connectionToUrl: action.value,
      });
    case actionJs.type.depositWithdrawMask:
      return Object.assign({}, state, {
        depositWithdrawMask: action.value,
      });
    case actionJs.type.deposit:
      return Object.assign({}, state, {
        deposit: action.value,
      });
    case actionJs.type.language:
      return Object.assign({}, state, {
        language: action.value,
      });
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
