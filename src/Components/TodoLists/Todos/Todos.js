import React, { Component } from 'react'
import './Todos.css';


class Todos extends Component {

    constructor(props){
        super(props);

        this.handelRemove = this.handelRemove.bind(this);
    }

    handelRemove(){
        this.props.removeTodo(this.props.id);
    }
    render() {
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handelRemove}>Delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todos;
