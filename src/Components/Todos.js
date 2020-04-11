import React, { Component } from 'react'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Tooltip,
    Button,
    Paper,
    withStyles
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { withRouter } from 'react-router-dom'



const styles = theme => ({
    Todos: {
        textAlign: 'center',
        background: 'black',
        color: '#fff',
        padding: '10px',
        cursor: 'pointer'
    },
    ListItem: {
        display: 'flex',
        justifyContent: 'center',
        background: 'green'
    },
    CreateTodos: {
        textAlign: 'center',
        color: '#fff',
        width: '100%'
    }
})


class Todos extends Component {

    state = {

    }
    render() {

        const { classes } = this.props
        const renderTodosList = [1, 2, 3, 4].map(i => {
            return (
                <ListItem key={i}>
                    <ListItemAvatar>
                        <IconButton>
                            <Tooltip title="Detailes">
                                <VisibilityIcon />
                            </Tooltip>
                        </IconButton>

                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                        secondary='Secondary text'
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="edit">
                            <Tooltip title="Edit">
                                <EditIcon />
                            </Tooltip>
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <Tooltip title="Delete">
                                <DeleteIcon />
                            </Tooltip>
                        </IconButton>

                    </ListItemSecondaryAction>
                </ListItem>
            )
        })


        return (
            <div style={{ marginTop: '9%' }}>
                <Paper>
                    <h3 className={classes.Todos} onClick={() => {
                        
                        if(this.props.history.location.pathname !== "/todos"){
                            this.props.history.push('/todos')
                        }
                        
                    }}> Todos </h3>
                    <List >
                        {renderTodosList}
                        <ListItem className={classes.ListItem}>
                            <Button className={classes.CreateTodos}>Create New Todos</Button>
                        </ListItem>
                    </List>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(Todos))
