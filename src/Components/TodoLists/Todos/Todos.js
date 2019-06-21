import React, { Component } from 'react'
import './Todos.css';
import pen from '../../../icons/pen-solid.svg';
import edite from '../../../icons/trash-solid.svg';


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
                <div className="Todo">
                    <form onSubmit={this.handleUpdate} className="Todo-form">
                        <input type='text' value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )   
        }else{
            result =(
               <div className="Todo">
                    <li className={this.props.completed ? "Todo-task Completed" : "Todo-task"} onClick={this.handletoggle}>{this.props.task}</li>
                    <div className="Todo-button">
                        <button onClick={this.toggleForm}><img src={pen} height="20px" width="20px"></img></button>
                        <button onClick={this.handelRemove}><img src={edite} height="20px" width="20px"></img></button>
                    </div>
                </div>
            )
        }

        return result;
    }
}

export default Todos;
