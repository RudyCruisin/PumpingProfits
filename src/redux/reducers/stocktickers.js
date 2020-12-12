import { SAVE_TICKERS } from '../actionsTypes';

const initialState = {
    savedSymbl: []
};

export const stockTickers = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TICKERS: {
            return {
                ...state,
                savedSymbl: [
                    ...state.savedSymbl,
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