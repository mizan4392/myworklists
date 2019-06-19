import React, { Component } from 'react'
import './TodoLists.css'
import Todos from './Todos/Todos';
import TodoForm from './TodoForm/TodoForm';

class TodoLists extends Component {

    constructor(props){
        super(props);
        this.state = {todos: [{task:"Walk the Fish"},{task:"Groom Chickens"}]}
    }

    create(newTodo){
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }

    render() {

        const todos = this.state.todos.map(todo =>{
            return <Todos task={todo.task}/>
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
