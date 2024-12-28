import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Header: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <header>
      <h1>Список задач</h1>
      <p className="task-count">
        {completedTasks} из {tasks.length} задач выполнено
      </p>
    </header>
  );
};

export default Header;

