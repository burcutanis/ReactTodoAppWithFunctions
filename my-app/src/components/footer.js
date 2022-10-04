
import { Button, Card, Form } from 'react-bootstrap';
import React from "react";



function Footer(props) {

    return (
        <footer className="style2">
            <Button variant="outline-success" className={props.currentFilter === 'Active' ? 'selected' : ''} href="#/active" onClick={props.setCurrentFilter.bind(null, "Active")}>Active</Button>{' '}
            <Button variant="outline-info" className={props.currentFilter === 'All' ? 'selected' : ''} href="#/" onClick={props.setCurrentFilter.bind(null, "All")}>All</Button>{' '}
            <Button variant="outline-danger" className={props.currentFilter === 'Completed' ? 'selected' : ''} href="#/completed" onClick={props.setCurrentFilter.bind(null, "Completed")}>Completed</Button>

        </footer>

    );
}
export default Footer;