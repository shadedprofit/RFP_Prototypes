import { combineReducers } from 'redux';
import CardReducer from './cardReducer';

export default combineReducers({
    cardState: CardReducer
});