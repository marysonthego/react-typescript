import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { isTypeOperatorNode } from 'typescript';
import {Todo} from './model';
import {SingleTodo} from './SingleTodo';
import './styles.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
  <div className='container'>
    <Droppable droppableId='TodosList'>
      {(provided) => (
          <div
            className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className='todos__heading'>
              Active Tasks
            </span>
            {todos.map((todo) =>
            !todo.isDone ?
              <SingleTodo
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              /> : null
            )}
          </div>
        )
      }
    </Droppable>
    <Droppable droppableId='TodosRemove'>
      {(provided) => (
      <div
        className='todos remove'
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <span className='todos__heading'>
          Completed Tasks
        </span>
        {todos.map((todo) =>
          todo.isDone ?
          <SingleTodo
            todo={todo}
            todos={todos}
            key={todo.id}
            setTodos={setTodos}
          /> : null
        )}
      </div>
    )}
    </Droppable>
  </div>
  );
};

