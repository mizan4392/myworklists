import React, { Component } from 'react'
import './TodoLists.css'
import Todos from './Todos/Todos';
import TodoForm from './TodoForm/TodoForm';

class TodoLists extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos: []
        };

        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleComplition = this.toggleComplition.bind(this);
    }
9
    create(newTodo){
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }

    remove(id){
        this.setState({
            todos:this.state.todos.filter(t => t.id !== id)
        })
    }
    updateTask(id,updatedTask){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return{...todo,task:updatedTask}
            }
            return todo;
        })
        this.setState({todos:updatedTodos});
    }
    toggleComplition(id){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return{...todo,completed:!todo.completed}
            }
            return todo;
        })
        this.setState({todos:updatedTodos});
    }

    render() {

        const todos = this.state.todos.map(todo =>{
            return <Todos 
            task={todo.task} 
            key={todo.id} 
            id={todo.id}
            removeTodo={this.remove}
            updateTask ={this.updateTask}
            completed={todo.completed}
            toggleComplition={this.toggleComplition}/>
            
        });

        return (
            <div className='TodoList'>
                <h1>My Works! <span>A Simple React Todo List App</span></h1>
                <ul>{todos}</ul>
                <TodoForm CreateTodos={this.create}/>
            </div>
        )
    }
}

export default TodoLists;
