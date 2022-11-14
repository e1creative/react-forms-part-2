import React, { useState } from 'react';
import Todo from './Todo'
import NewTodoForm from './NewTodoForm';

import './TodoList.css'

const TodoList = () => {
    const [todos, updateTodos] = useState([])

    const addTodo = (task, done) => {
        updateTodos(data => [...data, { task, done }]);
    }

    const removeTodo = (idx) => {
        // remove the box from the boxes.array at the passed index
        updateTodos(data =>  [...data].filter((todo, i) => i !== idx ));
    }

    return (
        <div className="TodoList">
            <h1 className="TodoList-title">Todo List</h1>
            <NewTodoForm addTodo={addTodo} />
            { todos.map((todo, idx) => {
                return  <Todo key={idx} task={todo.task} done={todo.done} removeTodo={removeTodo} idx={idx} />;

            }) }
        </div>
    )
}

export default TodoList;