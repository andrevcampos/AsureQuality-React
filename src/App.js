import React, { useState } from 'react';
import Header from './header';
import Hero from './hero';
import Footer from './footer';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const styles = {
    minHeight: '510px',
  };
  const styles2 = {
    scale: '1.4',
  };
  const styles3 = {
    width: '300px',
  };

  return (
    
    <div>

      <Header />
      <Hero />
      <div class="p-3 container" style={styles}>
        <h2>React and Javascript to-do list</h2>

        <div class="d-flex mt-4 mb-4">
          <input class="form-control" type="text" style={styles3} placeholder="Enter a task" value={newTask} onChange={handleInputChange} required/>
          <button class="btn btn-primary" onClick={handleAddTask}>Add Task</button>
        </div>

        {tasks.map((task, index) => (
            <div class="form-check task-item">
              <input type="checkbox" class="form-check-input" style={styles2}/>
              <label class="form-check-label ml-1">{task}</label>
              <button class="btn btn-link btn-sm" onClick={() => handleRemoveTask(index)}>Remove</button>
            </div>
        ))}
        
      </div>

      <Footer />

    </div>
  );
}

export default App;
