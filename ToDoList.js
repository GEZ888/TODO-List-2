import React, { useEffect, useState } from "react";
import { Button, Col, Row } from 'react-bootstrap'
import s from './ToDoList.module.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function ToDoList ({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect( ()=> {
        setFiltered(todo)
    }, [todo])

    function todoFilter(status) {
        if(status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter( item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!==id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
   
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map( item => {
            if (item.id === id) {
                item.title = value
            }
            return item
    })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            <Row>
                <Col className={s.filter}>
                 <ButtonGroup aria-label="Basic example" className={s.btns}>
                 <Button variant="secondary" onClick={ ()=>todoFilter('all')}>All</Button>
                 <Button variant="secondary" onClick={ ()=>todoFilter(true)}>Open</Button>
                 <Button variant="secondary" onClick={ ()=>todoFilter(false)}>Close</Button>
                 </ButtonGroup>
                </Col>
            </Row>
            
            {
                filtered.map( item => (
                    <div key={item.id} className={s.listItems}>
                    {
                        edit === item.id ? 
                        <div>
                         <input value={value} onChange={(e)=>setValue(e.target.value)} />
                        </div> :
                        <div className={ !item.status ? s.close : ''}>{ item.title }</div>
                    
                    }

                    {
                        edit === item.id ?
                            <div>
                                <Button variant="success" onClick={ ()=>saveTodo(item.id)}>Save</Button>
                            </div> :
                            <div>
                                <Button variant="success" onClick={ ()=>deleteTodo(item.id)}>Delete</Button>
                                <Button variant="success" onClick={ ()=>editTodo(item.id, item.title)} className={s.btn}>Edit</Button>
                                <Button variant="success" onClick={ ()=>statusTodo(item.id)} className={s.btn}>
                                {
                                    item.status ? "Close" : "Open"
                                } 
                                </Button>
                            </div>
                    }
                       
                    </div>
                ) )
            }
        </div>
    )
}

export default ToDoList;