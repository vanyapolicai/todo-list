import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/actions';
import { RootState } from '../store';

const TaskFilters: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.filter);

  return (
    <div className="task-filters">
      <button
        onClick={() => dispatch(setFilter('all'))}
        className={currentFilter === 'all' ? 'active' : ''}
      >
        Все
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        className={currentFilter === 'active' ? 'active' : ''}
      >
        Активные
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        className={currentFilter === 'completed' ? 'active' : ''}
      >
        Выполненные
      </button>
    </div>
  );
};

export default TaskFilters;

