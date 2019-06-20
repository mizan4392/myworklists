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
    }

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

    render() {

        const todos = this.state.todos.map(todo =>{
            return <Todos 
            task={todo.task} 
            key={todo.id} 
            id={todo.id}
            removeTodo={this.remove}/>
        });

        return (
            <div>
                <h1>My Work Lists!</h1>
                <ul>
                    <TodoForm CreateTodos={this.create}/>
                   {todos}
                </ul>
            </div>
        )
    }
}

export default TodoLists;
