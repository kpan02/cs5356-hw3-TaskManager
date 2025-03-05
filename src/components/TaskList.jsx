import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onUpdateDueDate, onUpdateCategory }) => (
  <ul className="task-list">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggleComplete={onToggleComplete}
        onDelete={onDelete}
        onUpdateDueDate={onUpdateDueDate}
        onUpdateCategory={onUpdateCategory}
      />
    ))}
  </ul>
);

export default TaskList; 