import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Auth = () => {
    return (
        <div>
            <form>
                <Box display="flex" flexDirection={'column'} alignItems='center' boxShadow="10px 10px 20px #ccc" padding={3} margin="auto" marginTop={5} borderRadius={5} maxWidth={400}>
                    <Typography>Login</Typography>
                    <TextField />
                    <TextField />
                    <TextField />
                    <Button>Submit</Button>
                    <Button> Change to Signup</Button>
                </Box>
            </form>
        </div>
    )
    
};

export default Auth;