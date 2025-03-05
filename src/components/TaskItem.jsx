import React from 'react';
import DatePicker from './DatePicker';

const TaskItem = ({ task, onToggleComplete, onDelete, onUpdateDueDate }) => (
  <li className="task-item flex justify-between">
    <div className="flex items-center">
      <button
        onClick={() => onToggleComplete(task.id)}
        className="toggle-btn"
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        {task.completed ? '✓' : '○'}
      </button>
      
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
    </div>

    <div className="flex items-center">
      <DatePicker
        date={task.dueDate}
        onDateChange={(date) => onUpdateDueDate(task.id, date)}
        className="h-8 px-2 text-sm"
      />
      
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  </li>
);

export default TaskItem; 