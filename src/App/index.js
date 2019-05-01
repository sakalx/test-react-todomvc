import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from '../redux-core/store';

import ThemeProvider from '../theme';
import NewTask from 'root/components/NewTask';
import AppBar from 'root/components/AppBar';
import TaskList from 'root/components/TaskList';
import Counter from 'root/components/Counter';

import {Wrap} from './style';

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider>
          <Wrap>
            <AppBar/>
            <NewTask/>
            <Counter/>
            <TaskList/>
          </Wrap>
        </ThemeProvider>
      </Provider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));