import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Flight.css';

export const Flight = () => {

    
    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    tokenStr ? JSON.parse(tokenStr) : navigate('/signin')


    return (
      <div className="flightContainer">
        <Box component="form"
          sx={{
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
           <TextField id="demo-helper-text-misaligned-no-helper" label="Airline" />
           <TextField id="demo-helper-text-misaligned-no-helper" label="From" />
           <TextField id="demo-helper-text-misaligned-no-helper" label="To" />
           <TextField id="demo-helper-text-misaligned-no-helper" type = "number" label="Cost" />
           <TextField id="demo-helper-text-misaligned-no-helper" label="FromTime" />
           <TextField id="demo-helper-text-misaligned-no-helper" label="ToTime" />
           <TextField id="demo-helper-text-misaligned-no-helper" type = "number" label="PNR" />
           <TextField id="demo-helper-text-misaligned-no-helper" type = "number" label="Capacity" /><br></br>
           <Button
              type="submit"
              fullWidth
              variant="contained"
              className="flightBtn"
            >
              Book
            </Button>
        </Box>
        </div>
      );
}

