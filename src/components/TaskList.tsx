import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <ul className="task-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;

