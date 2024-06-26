import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleFilter={handleFilter} handleToggle={handleToggle} />
               )
           })}
           <button className='clear-completed' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
       </div>
   );
};
 
export default ToDoList;