import { all } from 'redux-saga/effects';
import {watchFetchTrade} from "./watcher";



// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForeman() {
    yield all([watchFetchTrade()])
}