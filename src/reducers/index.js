import { combineReducers } from 'redux';
import {ReducerFilingSummary} from './reducer-filing-summary';
import ReducerBuyHistory from './reducer-buy-history';
import ReducerBuyerHistory from './reducer-buyer-history';
import ReducerCloseOtherCells from './reducer-close-other-cells';
import {ReducerAuthView, ReducerUserInfo} from './reducer-auth';
import {ReducerNews} from './reducer-news';

const rootReducer = combineReducers({  
  filingSummary: ReducerFilingSummary,  
  buyHistory: ReducerBuyHistory,
  buyerHistory: ReducerBuyerHistory,
  otherCellsClosed: ReducerCloseOtherCells,
  authView: ReducerAuthView,
  userInfo: ReducerUserInfo,
  newsList: ReducerNews,
});

export default rootReducer;
