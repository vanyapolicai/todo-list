import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';

const TaskInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Добавить новую задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TaskInput;

