import { fetchData } from "./action";
import { AUTH, FETCH_DATA, FETCH_FLIGHT, FETCH_AIRPORT, LOADING  } from "./actionTypes";

const initialState = {
    dataObj : {},
    flight : [],
    airport : [],
    loading : true,
    auth : false
}

export const reducer = ( state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_DATA:
            return { ...state, dataObj: payload}
        case LOADING:
            return { ...state, loading : payload}
        case FETCH_FLIGHT:
            return { ...state, flight : payload}
        case AUTH : 
            return { ...state, auth : payload}
        case FETCH_AIRPORT:
            return { ...state, airport : payload}
        default : 
            return state
    }
}