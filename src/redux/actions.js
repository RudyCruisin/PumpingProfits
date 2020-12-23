import { SAVE_TICKERS, STOCK_DATA, ACTIVE_TICKER } from './actionsTypes';

export const saveTickers = symbl => {
    return {
        type: SAVE_TICKERS,
        payload: {
            savedSymbl: {
                symbl,
                date: Date.now()
            }
        }
    }
}

export const activeTicker = activeSymbl => {
    return {
        type: ACTIVE_TICKER,
        payload: {
            activeSymbl
        }
    }
}

export const stockApi = (ticker) => dispatch => {
    fetch(`https://cloud.iexapis.com/stable/stock/spce/quote?token=pk_4fc5d3b61472414c8d99930c0ccbffe6`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return dispatch(fetchSuccess(true, data))
        })
        .catch(err => dispatch(fetchSuccess(false, err.message)))
};

const fetchSuccess = (isSuccess, data) => {
    // console.log("I WILL BE SUCCESSFUL")
    return {
        type: STOCK_DATA,
        payload: {
            tickers: isSuccess ? data : null,
            error: !isSuccess ? data : null
        }
    }
}