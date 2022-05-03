import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Airport = () => {


    const navigate = useNavigate()
    const tokenStr = localStorage.getItem('token')
    const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')
    // console.log(JSON.parse(tokenStr))

    return (
        <div className="flightContainer">
        <Box component="form"
          sx={{
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
           <TextField id="demo-helper-text-misaligned-no-helper" label="Airport" />
           <br></br>
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
    )
}



