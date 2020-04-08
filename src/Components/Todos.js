import React, { Component } from 'react'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton, Tooltip,
    Button
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


class Todos extends Component {

    state = {

    }
    render() {


        const renderTodosList = [1, 2, 3, 4].map(i => {
            return (
                <ListItem>
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
            <div style={{ marginTop: '8%' }}>
                <h3 style={{ textAlign: 'center', background: 'black', color: '#fff', padding: '10px' }}> Todos </h3>
                <List >
                    {renderTodosList}
                    <ListItem style={{ display: 'flex', justifyContent: 'center', background: 'green' }}>
                        <Button style={{ textAlign: 'center', color: '#fff' ,width:'100%'}}>Create New Todos</Button>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Todos
