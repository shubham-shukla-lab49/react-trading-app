import * as types from '../constants/actiontypes';
import initialState from './intialState';

/**
 * Description [Reducer for Trade State, manage tradeState as per FETCH_TRADES action]
 *
 */
const tradesReducer = (
    state: TradeState = initialState,
    action: TradeAction
  ): TradeState => {
    switch (action.type) {
        case types.FETCH_TRADES_REQUEST:
            return {...state,loading:true}
        case types.FETCH_TRADES_SUCCESS:
            return {
                ...state,
                loading: false,
                chartData: action.payload
            }
        case types.FETCH_TRADES_ERROR:
            return {...state,loading:false, tradeError: true};
        default:
            return state;
    }
  }

export default tradesReducer;