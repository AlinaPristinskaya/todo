import React from 'react';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomeView from './components/view/HomeView';
import Tasks from './components/view/Tasks';
import Task from './components/view/Task';
import Persons from './components/view/Persons';
import Person from './components/view/Person';

function App() {
  return (
    <Container>
      <AppBar />
     
      <Routes>
        
      <Route path="/" exact element={<HomeView />} />
      <Route path="/persons/:personId" exact  element={<Person/>} />
      <Route path="/persons/" exact  element={<Persons/>} />
      <Route path="/tasks/:taskId" element={<Task/>} />
      <Route path="/tasks" exact  element={<Tasks/>} />
      
      </Routes>
      
    </Container>
  )}

  
  export default (App);

