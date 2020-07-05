import { combineReducers } from "redux";
import {CHANGE_FILTER} from "./actions";

const initialRecipesState = {
    filter: "wszystkie",
    list: [
        {
            id: 1,
            title: "Budyń",
            category: "deser"
        },
        {
            id: 2,
            title: "Krem z dyni",
            category: "zupa"
        },
        {
            id: 3,
            title: "Amerykańskie naleśniki",
            category: "danie główne"
        },
        {
            id: 4,
            title: "Tort kokosowy",
            category: "ciasto"
        },
        {
            id: 5,
            title: "Krem z białych warzyw",
            category: "zupa"
        },
        {
            id: 6,
            title: "Kruche ciasto z jabłkami",
            category: "ciasto"
        }
    ]
};
const recipes = (state = initialRecipesState, action) => {
    if (action.type === CHANGE_FILTER) {
        return {
            ...state,
            filter: action.payload
        }
    }
    return state;
};

export default combineReducers({
    recipes
});