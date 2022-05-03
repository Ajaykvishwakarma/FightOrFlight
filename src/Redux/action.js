import { AUTH, FETCH_DATA, FETCH_FLIGHT, FETCH_AIRPORT, LOADING } from './actionTypes';

export const setData = (payload) => ({type : FETCH_DATA, payload})
export const setLoading = (payload) => ({type : LOADING, payload })
export const setFlight = (payload) => ({type : FETCH_FLIGHT, payload})
export const setAirport = (payload) => ({type : FETCH_AIRPORT, payload})
export const setAuth = (payload) => ({type : AUTH, payload })

export const fetchData = (url) => async (dispatch) => {

    const token = JSON.parse(localStorage.getItem('token'))
    // console.log({url})
    dispatch(setLoading(false))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res
    console.log(data)
    dispatch(setLoading(true))
    dispatch(setData(data))
}

export const fetchFlight = (url) => async (dispatch)=> {
    const token = JSON.parse(localStorage.getItem('token'))
    // console.log(token)
    console.log(url)
    dispatch(setLoading(false))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res
    // console.log(data)
    dispatch(setLoading(true))
    dispatch(setFlight(data))
}


export const fetchAirport = (url) => async (dispatch)=> {
    const token = JSON.parse(localStorage.getItem('token'))
    // console.log({url})
    dispatch(setLoading(false))
    const a = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const res = await a.json()
    const data = res
    console.log(data)
    dispatch(setLoading(true))
    dispatch(setAirport(data))
}