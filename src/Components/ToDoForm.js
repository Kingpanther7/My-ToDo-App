import React, {useState} from "react";


function ToDoForm ({addTask}) {
    const [userInput, setUserInput]= useState('');

    const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    
    }
    return(
        <form onSubmit={handleSubmit}  className="form">
            <input value={userInput} type="text" onChange={handleChange} placeholder="Add Task..."/>
            <button className="submit">Submit</button>
        </form>
    )

}

export default ToDoForm;