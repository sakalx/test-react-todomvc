import styled from 'styled-components';

export const Wrap = styled('section')`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled('h4')`
  color: ${props => props.hasUncompleted
    ? 'var(--secondary-color)'
    : 'var(--disabled-color)'}; 
`;
