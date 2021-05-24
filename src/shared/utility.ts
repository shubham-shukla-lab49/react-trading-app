import {XrangePointOptionsObject} from "highcharts";

/**
 * Description [Utility function to convert the trades data to ready to use Chart series Data array ]
 *
 *
 */
const setChartData = (trades: ITrade[]) =>{
    let mappedData:XrangePointOptionsObject[] = []
    if(trades.length > 0 ){
        const tradesStateData = [...trades];
        const reducedTrades:any[] = tradesStateData.reduce((acc:any,curr: ITrade)=>{
            if(!acc[curr.symbol]){
                acc[curr.symbol] = [];
            }
            acc[curr.symbol].push(curr);
            return acc;
        },{});

        for(let key in reducedTrades) {
            mappedData.push({
                name: key,
                y:reducedTrades[key].length
            } as XrangePointOptionsObject)
        }

        mappedData = mappedData.sort((a:any,b:any)=>{
            return b.y - a.y;
        })
    }
    return mappedData;
}


export default setChartData;