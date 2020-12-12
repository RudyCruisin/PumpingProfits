import { SAVE_TICKERS } from './actionsTypes';

export const saveTickers = symbl => {
    return {
        type: SAVE_TICKERS,
        payload :{
            savedSymbl: {
                symbl,
                date: Date.now()
            }
        }
    }
}