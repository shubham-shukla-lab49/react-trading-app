import * as React from "react"
import "./App.scss";
import TradesChart from "./components/TradesChart";
import { BrowserRouter, Route } from  "react-router-dom";
import Header from "./Header";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Route path="/" exact component={TradesChart}/>
            <Route exact path="/trades" component={TradesChart}/>
        </BrowserRouter>
    )
}
export default App;