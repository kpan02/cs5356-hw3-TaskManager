import React from 'react';
import DatePicker from './DatePicker';
import Category from './Categories';

const TaskItem = ({ task, onToggleComplete, onDelete, onUpdateDueDate, onUpdateCategory }) => (
  <li className="task-item flex justify-between">
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => onToggleComplete(task.id)}
            className="toggle-btn flex-shrink-0"
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
      </div>

      <div className="w-20 -mt-3 -mb-2">
        <Category 
          style={{ marginLeft: '2.3rem' }}
          className="scale-75"
          selectedCategory={task.category}
          onCategoryChange={(category) => onUpdateCategory(task.id, category)}
        />
      </div>
    </div>
  </li>
);

export default TaskItem;