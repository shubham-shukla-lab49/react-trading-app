import * as React from "react"
import './index.scss';
import { render } from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import configureStore from "./store/configureStore";

//Initialize Store
const store = configureStore();

const rootElement = document.getElementById("root")
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)