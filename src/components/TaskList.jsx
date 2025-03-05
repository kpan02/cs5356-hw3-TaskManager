import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete, onUpdateDueDate }) => (
  <ul className="task-list">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        onToggleComplete={onToggleComplete}
        onDelete={onDelete}
        onUpdateDueDate={onUpdateDueDate}
      />
    ))}
  </ul>
);

export default TaskList; 