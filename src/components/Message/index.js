import React from 'react';

// utils
import web3js from 'utils/Web3js';

// styles
import * as S from './styles';

function Message({ message: { from, msg } }) {
  const own = from === web3js.account;

  return (
    <S.Container own={own}>
      <S.Content own={own}>
        <S.Msg>{msg}</S.Msg>

        <S.From own={own}>{from}</S.From>
      </S.Content>
    </S.Container>
  );
}

export default Message;
