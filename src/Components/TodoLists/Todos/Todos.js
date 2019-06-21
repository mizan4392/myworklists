import React, { Component } from 'react'
import './Todos.css';


class Todos extends Component {

    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            task:this.props.task
        }
        this.handelRemove = this.handelRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handletoggle = this.handletoggle.bind(this);
    }

    handelRemove(){
        this.props.removeTodo(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing:!this.state.isEditing});
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.updateTask(this.props.id,this.state.task);
        this.setState({isEditing:false});

    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handletoggle(e){
        e.preventDefault();
        this.props.toggleComplition(this.props.id);

    }

    render() {

        let result;

        if(this.state.isEditing){
            result =(
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )   
        }else{
            result =(
<               div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handelRemove}>Delete</button>
                    <li className={this.props.completed ? "Completed" : ""} onClick={this.handletoggle}>{this.props.task}</li>
                </div>
            )
        }

        return result;
    }
}

export default Todos;
