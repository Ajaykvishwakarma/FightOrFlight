import { useNavigate } from 'react-router-dom'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchFlight , fetchAirport} from '../../Redux/action'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Home = () => {

    const baseUrl = `https://flightsmanagement.herokuapp.com`
    
    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    // const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    const dispatch = useDispatch();

   const { flight, airport } =  useSelector(store => store)

   useEffect(() => {
       let url = `${baseUrl}/flights`;
       dispatch(fetchFlight(url))
   },[])


   useEffect(() => {
       let url = `${baseUrl}/airports`;
       dispatch(fetchAirport(url))
   },[])

   console.log(airport)


    return (
        
            <div style={{width:"90%", margin:"auto"}}>
        <h4>Flight Details</h4>

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>From</b></TableCell>
            <TableCell align="right"><b>To&nbsp;</b> </TableCell>
            <TableCell align="right"><b>Cost&nbsp;</b> </TableCell>
            <TableCell align="right"><b>From Time&nbsp;</b> </TableCell>
            <TableCell align="right"><b>To Time&nbsp;</b></TableCell>
            <TableCell align="right"><b>PNR&nbsp;</b> </TableCell>
            <TableCell align="right"><b>Capacity&nbsp;</b> </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {flight.map((e) => (
            <TableRow
            key={e.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {e.airlines}
            </TableCell>
            <TableCell align="right">{e.from}</TableCell>
            <TableCell align="right">{e.to}</TableCell>
            <TableCell align="right">{e.cost}</TableCell>
            <TableCell align="right">{e.FromTime}</TableCell>
            <TableCell align="right">{e.ToTime}</TableCell>
            <TableCell align="right">{e.pnr}</TableCell>
            <TableCell align="right">{e.capacity}</TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>

    <div style={{width:"20%", margin:"auto"}}>
    <h4>Airport Details</h4>

    <TableContainer component={Paper} >
    <Table sx={{ minWidth: 60 }} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell><b>Name</b></TableCell>
            
        </TableRow>
        </TableHead>
        <TableBody>
        {airport.map((e) => (
            <TableRow
            key={e.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {e.airport}
            </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
    </TableContainer>
    </div>
    </div> 
    
  
    )
}












  
   