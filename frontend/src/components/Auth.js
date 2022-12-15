import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = () => {
    const [inputs, setInputs] = useState({
        name:"", email:"", password:""
    });
    const [isSignup, setSignup] = useState(false);
    const handleChange = (e) =>{
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={'column'} alignItems='center' boxShadow="10px 10px 20px #ccc" padding={3} margin="auto" marginTop={5} borderRadius={5} maxWidth={400}>
                    <Typography variant="h2" padding={3} textAlign="center">
                    {isSignup ? "Signup" : "Login"}
                    </Typography>
                    {isSignup && <TextField name="name" onChange={handleChange} value={inputs.name} placeholder="Name" margin="normal"/>}{""}
                    <TextField name="email" onChange={handleChange} value={inputs.email} type={'email'} placeholder="Email" margin="normal" />
                    <TextField name="password" onChange={handleChange} value={inputs.password} type={'password'} placeholder="Password" margin="normal" />
                    <Button type="submit" sx={{borderRadius: 3, marginTop: 3}}variant="contained" color="warning">Submit</Button>
                    <Button onClick={()=>setSignup(!isSignup)} sx={{borderRadius: 3}}> Change to {isSignup ? "Login":"Signup"}</Button>
                </Box>
            </form>
        </div>
    )
    
};

export default Auth;