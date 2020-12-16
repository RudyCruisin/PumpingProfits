import { STOCK_DATA } from '../actionsTypes';

const initialState = {
    tickers: null,
    error: null
};

export const stockApi = (state = initialState, action) => {
    console.log("AM I DISPATCHING??!")
    console.log(action.payload)
    switch (action.type) {
        case STOCK_DATA: {
            return action.payload;
        }
        default:
            return state;
    }
}