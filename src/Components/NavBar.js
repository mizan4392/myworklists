import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, Container, IconButton, Badge, Menu, MenuItem } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import Notification from './Notification';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: '#040c24'
    },
    Toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor:'#040c24'
    }
})

class NavBar extends Component {

    state = {
        profileMenue: null
    }


    handelProfileOpen = e => {
        this.setState({ profileMenue: e.currentTarget });
    };
    handelProfileClose = e => {
        this.setState({ profileMenue: null });
    };

    render() {
        const { classes } = this.props

        const login = true
        const renderProfileMenu = (

            login ? <Menu
                id="simple-menu"
                anchorEl={this.state.profileMenue}
                keepMounted
                open={Boolean(this.state.profileMenue)}
                onClose={this.handelProfileClose}
            >
                <MenuItem
                    onClick={() => {
                        // this.props.history.push("/profile");
                    }}
                >
                    Profile
              </MenuItem>

                <MenuItem onClick={() => {
                    // this.props.signout()
                }}>SignOut</MenuItem>
            </Menu> :
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.profileMenue}
                    keepMounted
                    open={Boolean(this.state.profileMenue)}
                    onClose={this.handelProfileClose}
                >
                    <MenuItem onClick={() => {
                        // this.props.history.push("/login");
                    }}>Login</MenuItem>
                    <MenuItem onClick={() => {
                        // this.props.history.push("/signup");
                    }}>Signup</MenuItem>
                </Menu>


        );


        return (
            <AppBar position="static" className={classes.AppBar}>
                <Container>
                    <Toolbar className={classes.Toolbar}>
                        <div>
                            <Typography variant="h6" >
                                WorkeHub
                        </Typography>
                        </div>

                        <div style={{display:'flex'}}> 
                            <IconButton>
                                <AddIcon style={{ color: '#fff' }} />
                            </IconButton>
                            <div>
                                <Notification />
                            </div>


                            <IconButton onClick={this.handelProfileOpen}>
                                <AccountBoxIcon style={{ color: '#fff' }} />
                            </IconButton>
                        </div>

                    </Toolbar>
                    {renderProfileMenu}
                </Container>

            </AppBar>
        )
    }
}

export default withStyles(styles)(NavBar)
