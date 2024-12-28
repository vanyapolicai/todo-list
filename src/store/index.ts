import { createStore, combineReducers } from 'redux';
import tasksReducer from './reducers/tasksReducer';
import filterReducer from './reducers/filterReducer';
import { loadState, saveState } from '../utils/localStorage';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;