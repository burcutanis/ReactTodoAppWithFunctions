import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/todos';
import Footer from './components/footer';


function App() {
  const [todos, setTodos] = React.useState([{ text: "text11", completed: false },
  { text: "text2", completed: false },
  { text: "text3", completed: false },
  ]);
  const [currentFilter, setFilter] = React.useState("All");

  function addTodo(newText) {
    //const newTodos = todos;
    //newTodos.push({ text: newText, completed: false });
    const newTodos = [...todos, { text: newText, completed: false }];
    setTodos(newTodos);
  }

  function markTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  function toogleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  var filterFn = function (task) {
    if (currentFilter === 'All') {
      return true;
    }

    if (currentFilter === 'Active') {
      return !task.completed;
    }

    if (currentFilter === 'Completed') {
      return task.completed;
    }
  }.bind(this);

  function setCurrentFilter(filterName) {
    setFilter(filterName);
  }

  var tasksForCriteria = todos.filter(filterFn);


  return (
    <React.Fragment>
      <div className="app" >
        <Todos todos={tasksForCriteria} markTodo={markTodo} toogleTodo={toogleTodo} removeTodo={removeTodo} addTodo={addTodo} />
        <Footer currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      </div>

    </React.Fragment>
  );
}

export default App;
