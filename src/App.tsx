import React, { createContext, useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { Todo } from "./components/model";
import {
  Person,
  PersonDestructured,
  PersonFC,
  HairColor,
} from "./components/Person";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null > (null);

const App: React.FC = () => {
  const contextValue = {
    name: "Jack",
    age: 20,
    country: "Brazil",
  };

  const [todo, setTodo] = useState<string | number>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    console.log(result);
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <AppContext.Provider value={contextValue}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <span className="heading">Taskify</span>
          <span className="heading">
            {" "}
            Person:
            <Person
              name="Jack"
              email="marysonthego@gmail.com"
              hairColor={HairColor.Blonde}
            />
          </span>
          <span className="heading">
            PersonDestructured:
            <PersonDestructured
              name="Jack"
              email="marysonthego@gmail.com"
              hairColor={HairColor.Blonde}
            />
          </span>
          <span className="heading">
            PersonFC:
            <PersonFC
              name="Pedro"
              email="marysonthego@gmail.com"
              hairColor={HairColor.Blonde}
            />
          </span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </DragDropContext>
    </AppContext.Provider>
  );
};

export default App;
