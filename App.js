import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import { Container } from 'react-bootstrap';



function App() {

  const [todo, setTodo] = useState([])



  return (
    <Container>
    <Header />
    <ToDoForm todo={todo} setTodo={setTodo}/>
    <ToDoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
