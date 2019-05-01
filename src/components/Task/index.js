import React from 'react';

import {connect} from 'react-redux';
import {removeTask, toggleCompleted} from 'root/redux-core/actions/tasks';

import {Item, RemoveBtn, CompeteBtn, Content} from './style';

function Task({task, completed, removeTask, toggleCompleted}) {
  const handleToggleCompete = () => {
    toggleCompleted(task.id);
  };

  const handleRemove = () => {
    removeTask(task.id);
  };

  const isCompleted = Boolean(completed[task.id]);

  return (
      <Item completed={isCompleted}>
        <Content>{task.data}</Content>
        <div>
          <RemoveBtn onClick={handleRemove}>✖</RemoveBtn>
          <CompeteBtn onClick={handleToggleCompete}>
            {isCompleted ? '♻' : '✔'}
          </CompeteBtn>
        </div>
      </Item>
  );
}

const mapStateToProps = ({tasks: {completed}}) => ({
  completed,
});

const mapDispatchToProps = {
  removeTask,
  toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);