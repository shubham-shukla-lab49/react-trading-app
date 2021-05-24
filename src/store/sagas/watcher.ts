import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actiontypes';
import {fetchTradeSaga} from "./tradeSaga";

// Watches for FETCH_TRADES_REQUEST action type asynchronously
export function* watchFetchTrade() {
    yield takeLatest(types.FETCH_TRADES_REQUEST, fetchTradeSaga);
}
