import React, {useRef, useEffect} from 'react'

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo:(todoText:string) => void;
}

const NewTodo:React.FC<NewTodoProps> = props => {

    useEffect();
    
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value; // null이 아니라는 전제가 있다 >> !
        // console.log(enteredText);
        props.onAddTodo(enteredText);
    };

    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">TodoList</label>
            <input type='text' id='todo-text' ref={textInputRef}></input>
        </div>
        <button type='submit'>ADD TODO</button>
    </form>
};
export default NewTodo;
