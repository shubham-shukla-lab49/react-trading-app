interface ITrade {
    symbol: string
    price: number,
    qty:number,
    time: string
  }

  type AppState = {
    trades: TradeState
  }

  type TradeState = {
    chartData: any[]
    loading: boolean,
    tradeError: boolean //TODO : Change to trade Error Object which includes code & error message
  }

  type TradeAction = {
    type: string,
    payload: ITrade[],
  }

  

