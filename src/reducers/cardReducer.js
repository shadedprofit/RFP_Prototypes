import { CLOSE_CARD, ADD_CARD } from "../actions/actionTypes/cardActionTypes";

const INITIAL_DATA = [{
    title: 'Supplier Geography'
}];

const CardReducer = (state=INITIAL_DATA, action) => {
    switch (action.type) {
        case CLOSE_CARD:
            return state.filter((card, id) => id !== action.payload.id);
        case ADD_CARD:
            debugger;
            return state.concat(action.payload);
        default:
            return state;
    }
};

export default CardReducer;