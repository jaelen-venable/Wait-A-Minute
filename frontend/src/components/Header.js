import React from 'react';
import {AppBar, Button, Toolbar, Typography, Box, Tab, Tabs} from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state=> state.isLoggedIn);
    const [value, setValue] = useState();
    return <AppBar
            position="sticky">
        <Toolbar>
            <Typography variant="h4">Wait A Minute</Typography>
            { !isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight="auto">
                <Tabs textColor="inherit" value={value} onChange={(e, val) =>setValue(val)}>
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
                </Tabs>
            </Box>}
            <Box display="flex" marginLeft="auto">
                { !isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant="warning">Login</Button></>}
                { !isLoggedIn && <><Button LinkComponent={Link} to="/auth" variant="warning">Signup</Button></>}
               { !isLoggedIn && ( <><Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to="/auth" variant="warning">Logout</Button></>)}
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header;