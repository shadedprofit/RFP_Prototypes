import { CLOSE_CARD, ADD_CARD } from "./actionTypes/cardActionTypes";

export const closeCard = id => ({
    type: CLOSE_CARD,
    payload: {
        id
    }
});

export const addCard = (card) => ({
    type:  ADD_CARD,
    payload: card
});