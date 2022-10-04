
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './todo.js';
import FormTodo from './formTodo.js';

function Todos(props) {

    return (
        <div className="style">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={props.addTodo} />
            {props.todos.map((todo, i) => (
                <Card>
                    <Card.Body>
                        <div className="todo">
                            <Todo task={todo} key={i} index={i} markTodo={props.markTodo}
                                toogleTodo={props.toogleTodo} removeTodo={props.removeTodo}
                            />
                        </div >
                    </Card.Body>
                </Card>
            ))}
        </div >

    );
}
export default Todos;