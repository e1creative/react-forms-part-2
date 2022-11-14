import React, { useState } from 'react';
import './NewTodoForm.css'

const NewTodoForm = ({addTodo}) => {
    // JMT: initialize state to an empty object holding our values
    const INITIAL_STATE = { task: "" }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleFormDataChange = e => {
        const { name, value } = e.target
        setFormData(data => {
            return ({...data, [name]: value})
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // JMT: destructure formData since it contains all the current values
        const { task, done=false } = formData;
        /**
         * JMT: NOTE about formData vs. e.target - if we use e.target, we are NOT 
         * doing things the react-y way.  we would be relying on the form itself as
         * the source of truth, rather than the form's state.  By using formData we
         * rely on the state as the source of truth
         */
        addTodo(task, done)
        setFormData(INITIAL_STATE)
    }

    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
                <input type="text" id="task" name="task" placeholder="Enter task" value={formData.task} onChange={handleFormDataChange} />
                <button type="submit">Add Todo</button>
        </form>
    )
}

export default NewTodoForm;