import React, {PropsWithChildren, useEffect} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, {PointClickEventObject} from 'highcharts';
import {Link} from 'react-router-dom';
import {fetchTradeAction} from "../store/actions/tradeAction";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

/**
 * Description [Higher Order chart functional component for trades chart which is for creating options as per trade Reducer state
 * And then share as prop to Trades chart functional component]
 *
 *
 */
const HoCTradesChart: any = (WrappedComponent: PropsWithChildren<any>) => {

    function HOC(props: any) {
        const dispatch = useDispatch();
        useEffect(()=>{
            //dispatching the fetchTradeAction to get trades of array
            dispatch(fetchTradeAction())
        },[dispatch]);

        //Pie Slice Selection Change Handler
        const pieSliceSelectionHandler = (item:PointClickEventObject)=>{
            console.log(item.point.name)
        }

        //Trade State to consume, one fetched to reducer by fetchTradesSaga
        const state:TradeState = useSelector((state: AppState) => state.trades, shallowEqual);

        //Mapped Chart data : converted for array of trades using utility function
        const tradesMappedData = state.chartData;

        //chartOptions provided as Props to HighchartsReact component.
        const chartOptions:any = {
            chart: {
                type: 'pie',
            },
            title: {
                verticalAlign: 'top',
                floating: true,
                text: '<div><span><strong></span></div>',
                style: {
                    fontSize: '10px',
                }
            },
            tooltip: {
                pointFormat: 'Trades : <b>{point.y:.0f}</b><br/>' +
                    'Percentage : {point.percentage:.1f}%'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: <b>{point.y:.0f}',
                        style: {
                            color: String(Highcharts.Color)|| 'black'
                        }
                    },
                    innerSize: '70%',
                    showInLegend: true,
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: (item:PointClickEventObject)=>{pieSliceSelectionHandler(item)}
                        }
                    }
                },
            },
            series : {
                name:"Trades",
                data: tradesMappedData
            }
        };

        return (
            <div>
                {state.loading && <div><p>Loading...</p></div>}
                {state.tradeError && <div style={{color: 'red'}}>ERROR Occurred ....</div>}
                {<WrappedComponent {...props} chartOptions={chartOptions}/>}
            </div>
        );
    }
    return HOC;
};

/**
 * Description [functional component trades chart using which we are showing Trades Chart]
 *
 *
 */
const TradesChart : React.FC = (props:any) =>{
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={props.chartOptions}
            />
        { props.chartOptions.series.data.length>0 &&
        <div>
            <Link to="trades/addTrade" title="Add Trade">
                <button className="btn btn-primary">Add Trade</button>
            </Link>
        </div>}
        </>
    );
}
export default HoCTradesChart(TradesChart)