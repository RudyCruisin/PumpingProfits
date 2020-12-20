import { combineReducers } from 'redux';
import { stockTickers } from './stocktickers';
import { stockApi } from './stockapi';
import { activeTicker } from './activeticker';


export default combineReducers({ stockTickers, stockApi, activeTicker });