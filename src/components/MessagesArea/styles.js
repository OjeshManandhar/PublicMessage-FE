// packages
import styled from 'styled-components';

// global
import colors from 'global/colors';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 1rem;

  overflow: auto;
`;

export const MessageWrapper = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  flex-grow: 1;
`;

export const LoadMore = styled.li`
  font-size: 0.8rem;

  align-self: center;

  margin-bottom: 1rem;
  padding: 0.15rem 0.6rem;

  color: ${colors.maxBluePurple};

  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.maxBluePurple};

  cursor: pointer;
`;

export const Toast = styled.div`
  font-size: 1rem;
  font-style: italic;

  color: grey;
  background: pink;

  ${props => {
    if (props.show) {
      return `
        height: auto;
        padding: 1rem;

        opacity: 1;
      `;
    }

    return `
      height: 0;
      opacity: 0;
    `;
  }}

  transition: all 0.3s ease;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0.5rem;

  border-top: 0.125rem solid ${colors.eerieBlack};
`;

export const Btn = styled.button`
  font-size: 1rem;

  padding: 0.5rem 1rem;

  margin-right: 1rem;

  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.eerieBlack};

  outline: none;
  background: none;
  background-color: ${colors.antiqueWhite};

  cursor: pointer;
`;

export const Input = styled.input`
  flex-grow: 1;

  font-size: 1rem;

  padding: 0.5rem 1rem;

  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.eerieBlack};

  outline: none;
  background: none;
  background-color: ${colors.antiqueWhite};

  cursor: text;
`;

export const SendBtn = styled(Btn)`
  margin-right: 0;
  margin-left: 1rem;
`;
