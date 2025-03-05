import React, { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import CategoryFilter from './components/CategoryFilter';

const initialTasks = [
  { id: 1, text: 'Refill food bowl before yowling begins', completed: false, dueDate: null, category: null },
  { id: 2, text: 'Schedule vet visit, prepare for betrayal', completed: false, dueDate: null, category: null },
  { id: 3, text: 'Remove cat from keyboard (again)', completed: true, dueDate: null, category: null },
];

const App = () => {
  const [tasks, setTasks] = useLocalStorageState('tasks', { defaultValue: initialTasks });
  const [categoryFilter, setCategoryFilter] = useState(null);

  const addTask = (text, dueDate = null, category = null) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      dueDate,
      category,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateDueDate = (taskId, date) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, dueDate: date } : task
    ));
  };

  const updateCategory = (taskId, category) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, category } : task
    ));
  };

  // Filter tasks based on selected category
  const filteredTasks = categoryFilter
    ? tasks.filter(task => 
        task.category && task.category.id === categoryFilter.id
      )
    : tasks;

  return (
    <main>
      <h1 className="text-center">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}> <hr /> </div>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <CategoryFilter 
          selectedCategory={categoryFilter}
          onCategoryChange={setCategoryFilter}
          className="w-48 border rounded-md"
        />
      </div>
      
      <TaskList
        tasks={filteredTasks}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onUpdateDueDate={updateDueDate}
        onUpdateCategory={updateCategory}
      />
      <TaskStats tasks={filteredTasks} />
    </main>
  );
};

export default App; 