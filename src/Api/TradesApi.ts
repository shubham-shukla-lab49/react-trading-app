import axios from "axios";

//TODO:  change in logic required when we have to use different API url for Prod Mode
const API_URL = 'http://localhost:3000/api/trades';
/**
 * Description [Access Trades fetch endpoint for trades]
 *
 * @return { Array of trades}
 */
export const fetchTrades = async () => {
    const response  = await axios.get(API_URL);
    return response.data;
};
