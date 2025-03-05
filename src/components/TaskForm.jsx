import { useState } from 'react';
import DatePicker from './DatePicker';

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim(), dueDate);
      setText('');
      setDueDate(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

      
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="p-2 border rounded flex-grow"
        />
        <DatePicker 
          date={dueDate} 
          onDateChange={setDueDate} 
          className="p-2 border rounded w-35"
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm; 