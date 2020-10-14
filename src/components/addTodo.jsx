import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';

function AddTodo({addTodo}) {
    const [value,setValue]=useState("");

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const handleAdd=()=>{
        setValue("");
        addTodo(value);
    }

    return (
        <>
            <input type="text" placeholder="What Is In Your Mind?" onChange={handleChange} value={value} />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}

export default connect(null, { addTodo })(AddTodo);