import { put, call } from 'redux-saga/effects';
import {fetchTrades} from '../../Api/TradesApi';
import * as types from '../constants/actiontypes';
import setChartData from "../../shared/utility";

//delay to show loader
const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

/**
 * Description [Function responsible for fetching trades, making calls to the API
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.]
 *
 *
 */
export function* fetchTradeSaga() {
    try {
        yield delay(5000);
        const trades: ITrade[] = yield call(fetchTrades);
        const chartData: any[] = yield setChartData(trades);
        yield put({ type: types.FETCH_TRADES_SUCCESS, payload:chartData });
    } catch (error) {
        yield put({ type: types.FETCH_TRADES_ERROR, error });
    }
}