import styled, {css} from 'styled-components';

const _button = css`
  cursor: pointer;
  font-size: 21px;
`;

export const Item = styled('li')`
  align-items: center;
  border-radius: 4px;
  border: 2px solid var(--disabled-color);
  color: var(--primary-dark-color); 
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  justify-content: flex-end;
  list-style-type: none;
  margin: 8px 0;
  padding: 8px;
  ${props => props.completed && css`
    text-decoration: line-through;
    color: var(--disabled-color);
  `};
`;

export const Content = styled('p')`
  flex: 1;
`;

export const RemoveBtn = styled('button')`
  color: var(--secondary-light-color);
  margin: 0 8px;
  transform: scale(0);
  transition: transform .2s ease-out;
  ${_button};
  ${Item}:hover & {
    transform: scale(1);
  };
`;

export const CompeteBtn = styled('button')`
  color: inherit;
  ${_button};
`;

