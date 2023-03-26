import React, { useState }  from "react";
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './ToDoForm.module.css'

function ToDoForm({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if(value) {
        setTodo( 
         [...todo, {
            id: uuidv4(),
            title: value,
            status: true
         }]
        )
        setValue('')
    }
    }
    return (
        <Row>
            <Col className="s.ToDoForm">
              <FormControl placeholder="Введите задачу" value={value} onChange={ (e)=>setValue(e.target.value)}/>
              <Button variant="secondary" onClick={saveTodo} className={s.btn}>Сохранить</Button>
            </Col>
        </Row>
    )
}

export default ToDoForm;