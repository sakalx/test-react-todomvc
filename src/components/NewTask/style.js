import styled from 'styled-components';

export const Wrap = styled('section')`
  display: flex;
  flex-wrap: wrap;
  height: 80px;
`;

export const Title = styled('h2')`
  flex: 1 0 100%;
  margin: 0;
`;

export const TextField = styled('input')`
  flex: 1;
  font-size: 18px;
  padding: 8px;
`;

export const AddBtn = styled('button')`
  color: var(--primary-light-color);
  cursor: pointer;
  flex: 0 0 50px;
  font-size: 26px;
`;