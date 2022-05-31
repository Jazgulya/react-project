import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleValues(){
        let user ={
            email, 
            password
        }
        console.log(user);
    }
    return (
        <Box height={"70vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="h3" component="h2">Register</Typography>
            <TextField value={email} onChange={(e)=> setEmail(e.target.value)} style={{width:"40%", margin: "10px"}} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e)=> setPassword(e.target.value)} style={{width:"40%", margin: "10px"}} id="outlined-basic" label="Password" variant="outlined" />
            <Button onClick={handleValues} style={{width:"40%", margin: "10px"}} variant="contained">Register</Button>
        </Box>
    );
};

export default RegisterForm;