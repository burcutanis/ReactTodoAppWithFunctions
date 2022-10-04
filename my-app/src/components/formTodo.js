
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormTodo(props) {
    //const [value, setValue] = React.useState("");
    const inputRef = React.useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        console.log("input value:", inputValue);
        if (!inputValue) return;
        props.addTodo(inputValue);
        //setValue("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Add Todo</b></Form.Label>
                <Form.Control
                    ref={inputRef}
                    type="text"
                    className="input"
                    //value={value} 
                    //onChange={e => setValue(e.target.value)} 
                    placeholder="Add new todo" />
            </Form.Group>
            <button className='button' type="submit">
                Submit
            </button>
        </Form>
    );
}
export default FormTodo;
