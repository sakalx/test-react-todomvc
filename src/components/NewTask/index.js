import React, {useState} from 'react';

import {connect} from 'react-redux';
import {addNewTask} from 'root/redux-core/actions/tasks';

import {AddBtn, TextField, Title, Wrap} from './style';

const ENTER_KEY = new Set([13, 'Enter']);

function NewTask({addNewTask}) {
  const [task, setTask] = useState('');

  const handleOnChange = ({target}) => {
    setTask(target.value);
  };

  const handleKeyPress = (e) => {
    if (ENTER_KEY.has(e.which) || ENTER_KEY.has(e.key)) {
      handleCreateTask();
    }
  };

  const handleCreateTask = () => {
    const newTask = task.trim();

    if (isValid(newTask)) {
      addNewTask(newTask);
      setTask('');
    }
  };

  const isValid = (newTask) => {
    return Boolean(newTask);
  };

  return (
      <Wrap>
        <Title>Add new Task.</Title>
        <TextField
            autoFocus
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
            placeholder='New'
            type='text'
            value={task}
        />
        <AddBtn onClick={handleCreateTask}>+</AddBtn>
      </Wrap>
  );
}

const mapDispatchToProps = {
  addNewTask,
};

export default connect(null, mapDispatchToProps)(NewTask);