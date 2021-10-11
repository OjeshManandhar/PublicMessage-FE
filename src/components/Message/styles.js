// packages
import styled from 'styled-components';

export const Container = styled.li`
  align-self: ${props => (props.own ? 'flex-end' : 'flex-start')};

  width: auto;
  max-width: 80%;

  text-align: ${props => (props.own ? 'right' : 'left')};

  margin-bottom: 0.5rem;

  &::last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  text-align: inherit;
`;

export const Msg = styled.p`
  background-color: red;

  padding: 0.5rem 1rem;
  margin-bottom: 0.15rem;

  word-wrap: break-word;

  border-radius: 1rem;
`;

export const From = styled.div`
  font-size: 0.75rem;

  ${props => (props.own ? 'margin-right: 0.5rem;' : 'margin-left: 0.5rem;')}
`;
