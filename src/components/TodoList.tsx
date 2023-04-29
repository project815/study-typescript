import React from 'react'
import { Todo } from '../todo.model';
import './TodoList.css';

interface TodoListProps{
    items:{id:string, text:string}[];
    onDleleteTodo:(id:string) => void;
}
const TodoList:React.FC<TodoListProps> = props =>{
    return<ul>
        {props.items.map((todo) =>(
            <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDleleteTodo.bind(null, todo.id)}>DELETE</button>
            </li>
        ))}
    </ul>
};

export default TodoList;
