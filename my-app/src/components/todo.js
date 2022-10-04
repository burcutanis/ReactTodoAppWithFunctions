
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";


function Todo(props) {

    function markTodo() {
        props.markTodo(props.index);
    }
    return (
        <React.Fragment>
            <span style={{ textDecoration: props.task.completed ? "line-through" : "" }}>{props.task.text}</span>
            <Button variant="outline-success" onClick={markTodo}>✓</Button>{' '}
            <Button variant="outline-success" onClick={props.toogleTodo.bind(null, props.index)}>Toogle</Button>{' '}
            <Button variant="outline-danger" onClick={props.removeTodo.bind(null, props.index)}>✕</Button>

        </React.Fragment>

    );
}
export default Todo;