import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK } from '../actions';
import { Task } from '../../types';

const initialState: Task[] = [];

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
        },
      ];
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.title }
          : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};

export default tasksReducer;