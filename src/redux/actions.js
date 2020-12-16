import { SAVE_TICKERS, STOCK_DATA } from './actionsTypes';

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

export const stockApi = () => dispatch => {
    fetch('https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_4fc5d3b61472414c8d99930c0ccbffe6')
        .then(response => response.json())
        .then(data => {
            console.log(data[0])
            return dispatch(fetchSuccess(true, data[0]))
        })
        .catch(err => dispatch(fetchSuccess(false, err.message)))
};

const fetchSuccess = (isSuccess, data) => {
    console.log("I WILL BE SUCCESSFUL")
    return {
        type: STOCK_DATA,
        payload: {
            tickers: isSuccess ? data : null,
            error: !isSuccess ? data : null
        }
    }
}