import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

import {Route} from 'react-router-dom';

const App:React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text:string) =>
    {
      setTodos(prevTodos =>[...prevTodos, {id:Math.random().toString(), text:text}]);
      
    };

    const todoDeleteHandler = (todoId:string) =>{
      setTodos(preTodos =>{
        return preTodos.filter(todo => todo.id !== todoId)
      })
    };

  return (
    <div className="App">
      {/*A component that adds todos*/}
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDleleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
