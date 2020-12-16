import { combineReducers } from 'redux';
import { stockTickers } from './stocktickers';
import { stockApi } from './stockapi';


export default combineReducers({ stockTickers, stockApi });