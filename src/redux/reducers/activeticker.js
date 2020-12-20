import { ACTIVE_TICKER } from '../actionsTypes';

const initialState = {
    activeSymbls: null
};

export const activeTicker = (state = initialState, action) => {
    console.log('i am active')
    switch (action.type) {
        case ACTIVE_TICKER: {
            return action.payload;
        }
        default:
            return state;
    }
}