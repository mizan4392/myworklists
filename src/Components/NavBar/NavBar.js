import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, Container, IconButton, Badge } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';

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

    render() {
        const { classes } = this.props
        return (
            <AppBar position="static" className={classes.AppBar}>
                <Container>
                    <Toolbar className={classes.Toolbar}>
                        <div>
                            <Typography variant="h6" >
                                WorkeHub
                        </Typography>
                        </div>

                        <div>
                            <IconButton>
                                <AddIcon style={{ color: '#fff' }} /> 
                            </IconButton>

                            <IconButton aria-label="show 11 new notifications" color="inherit">
                                <Badge badgeContent={11} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <IconButton>
                                <AccountBoxIcon style={{ color: '#fff' }} />
                            </IconButton>
                        </div>

                    </Toolbar>
                </Container>

            </AppBar>
        )
    }
}

export default withStyles(styles)(NavBar)
