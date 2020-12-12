import { SAVE_TICKERS } from '../actionsTypes';

const initialState = {
    savedSymbls: []
};

export const stockTickers = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TICKERS: {
            return {
                ...state,
                savedSymbls: [
                    ...state.savedSymbls,
                    {
                        ...action.payload.savedSymbl
                    }
                ]
            }
        }
        default:
            return state;
    }
}