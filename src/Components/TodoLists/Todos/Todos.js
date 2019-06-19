import React, { Component } from 'react'
import './Todos.css';


class Todos extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todos;
