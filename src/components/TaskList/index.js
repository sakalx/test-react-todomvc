import React from 'react';

import {connect} from 'react-redux';

import Task from 'root/components/Task';

import {List} from './style';

function TaskList({tasks}) {
  const completedToBottom = (task) => tasks.completed[task.id] ? 1 : -1;

  if (!tasks.list.length) return null;
  /* or another way:
  * { Boolean(tasks.list.length) && <List>...</List> }
  * */
  return (
      <List>
        {tasks.list.sort(completedToBottom).map((task) =>
            <Task key={task.id} task={task}/>,
        )}
      </List>
  );
}

const mapStateToProps = ({tasks}) => ({
  tasks,
});

export default connect(mapStateToProps, null)(TaskList);