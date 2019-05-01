import React from 'react';

import {connect} from 'react-redux';

import {Title, Wrap} from './style';

function Counter({tasks}) {
  const uncompleted = tasks.list.filter(({id}) => !tasks.completed[id]).length;
  const pluralized = (str, sfx = 's') => uncompleted === 1 ? str : str + sfx;

  return (
      <Wrap>
        <Title hasUncompleted={Boolean(uncompleted)}>
          <strong>{uncompleted}</strong> {pluralized('item')} left.
        </Title>
      </Wrap>
  );
}

const mapStateToProps = ({tasks}) => ({
  tasks,
});

export default connect(mapStateToProps, null)(Counter);