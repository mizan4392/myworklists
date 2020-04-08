import React, { Component } from 'react'
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton, Avatar,
    Button
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';


class Todos extends Component {

    state = {

    }
    render() {


        const renderTodosList = [1, 2, 3, 4].map(i => {
            return (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Single-line item"
                        secondary='Secondary text'
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        })


        return (
            <div>
                <h3 style={{ textAlign: 'center', background: 'black', color: '#fff', padding: '10px' }}> Todos </h3>
                <List >
                    {renderTodosList}
                    <ListItem style={{display:'flex',justifyContent:'center',background: 'green'}}>
                        <Button style={{textAlign:'center',color:'#fff'}}>Create New Todos</Button>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Todos
