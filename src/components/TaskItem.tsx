import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../store/actions';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedTitle.trim() && editedTitle !== task.title) {
      dispatch(editTask(task.id, editedTitle));
    }
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleEdit}
          />
        ) : (
          <span className={task.completed ? 'completed' : ''}>{task.title}</span>
        )}
      </div>
      <div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="edit-btn"
        >
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="delete-btn"
        >
          Удалить
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

