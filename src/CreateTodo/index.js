import React from "react";
import './CreateTodo.css';
import image from './imagen.png';
import { TodoContext } from "../TodoContext";

function CreateTodo() {
    const {addTodo} = React.useContext(TodoContext);
    const [newTodoValue,setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length>1){
          addTodo(newTodoValue);
        }
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <div className="containerFormCreateTodo">
            <form className="CreateTodoForm" onSubmit={onSubmit}>
                <label>Agregar nuevo ToDo</label>
                <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="ej: Aprender React.js"></textarea>
                <button type="submit">Agregar</button>
                <img className="image" src={image} alt="TaskBudy"/>
            </form>
        </div>
    )
}

export { CreateTodo };