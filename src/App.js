// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
      </header>
      <main>
        <NewTaskForm addTask={addTask} />
        <TaskList tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
