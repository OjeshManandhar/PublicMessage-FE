// packages
import styled from 'styled-components';

// global
import colors from 'global/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 1rem;

  background-color: ${colors.unbleachedSilk};

  border-radius: 2rem;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;

  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;

  margin-bottom: 2rem;
`;

export const Strong = styled.strong`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Input = styled.input`
  width: 80%;

  font-size: 1rem;
  text-align: center;

  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;

  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.eerieBlack};

  outline: none;
  background: none;
  background-color: ${colors.antiqueWhite};

  cursor: text;
`;

export const SetBtn = styled.button`
  font-size: 1rem;

  margin-top: 1rem;
  padding: 0.5rem 1rem;

  border-radius: 0.5rem;
  border: 0.1rem solid ${colors.eerieBlack};

  outline: none;
  background: none;
  background-color: ${colors.antiqueWhite};

  cursor: pointer;
`;

export const CancleBtn = styled(SetBtn)`
  margin-top: 0.5rem;

  background-color: ${colors.ghostWhite};
`;
