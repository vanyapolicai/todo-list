import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <TaskInput />
        <TaskList />
        <TaskFilters />
      </div>
    </Provider>
  );
};

export default App;

