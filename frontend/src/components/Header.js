import React from 'react';
import {AppBar, Button, Toolbar, Typography, Box, Tab, Tabs} from '@mui/material'
import { useState } from 'react';

const Header = () => {
    const [value, setValue] = useState();
    return <AppBar
            position="sticky">
        <Toolbar>
            <Typography variant="h4">Wait A Minute</Typography>
            <Box display="flex">
                <Tabs textColor="inherit" value={value} onChange={(e, val) =>setValue(val)}>
            <Tab label="All Blogs"/>
            <Tab label="My Blogs"/>
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto">
                <Button variant="warning">Login</Button>
                <Button variant="warning">Signup</Button>
                <Button variant="warning">Logout</Button>
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header