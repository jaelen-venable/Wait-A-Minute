import React from 'react';
import {AppBar, Button, Toolbar, Typography, Box} from '@mui/material'

const Header = () => {
    return <AppBar>
        <Toolbar>
            <Typography variant="h4">Wait A Minute</Typography>
            <Box display="flex" marginLeft="auto">
                <Button color="warning">Login</Button>
                <Button color="warning">Signup</Button>
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header