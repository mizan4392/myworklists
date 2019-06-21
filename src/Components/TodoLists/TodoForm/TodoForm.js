import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './TodoForm.css'; 


class TodoForm extends Component {

    constructor(props){
        super(props);

        this.state = {task:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.CreateTodos({...this.state,id:uuid(),completed:false});
        this.setState({task:""});
 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Work</label>
                <input 
                 type="text" 
                 placeholder="New Work" 
                 id="task"
                 name='task'
                 value={this.state.task}
                 onChange={this.handleChange}/>
                 <button >Add Work</button>
            </form>
        )
    }
}

export default TodoForm;
