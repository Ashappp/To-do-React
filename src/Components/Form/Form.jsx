import React from 'react';
import  './Form.css';

const Form = ({task,EditNewTask,addToArr}) => {
    return (
        <form action="" onSubmit={addToArr}>
        <input type="text" className='inputText' placeholder='Enter your task' value = {task} name='task' onChange={EditNewTask}/>
        <button className='submitBtn'>Create</button>
        </form>
    );
};

export default Form;