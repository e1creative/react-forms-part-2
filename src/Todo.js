import React from 'react';

import './Todo.css'

 const Todo = ({idx, task, removeTodo}) => {
    return  (
        <div className="Todo">
            <div className="Todo-task">{task}</div>
            <button className="Todo-button--done">Done</button>
            <button className="Todo-button--remove" onClick={() => removeTodo(idx)}>Remove</button>
        </div>
    )
 }

 export default Todo;