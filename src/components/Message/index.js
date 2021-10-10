import React from 'react';

// styles
import * as S from './styles';

function Message({ message: { from, msg } }) {
  return (
    <S.Container own={from === 'Ojesh'}>
      <S.Content>
        <S.Msg>{msg}</S.Msg>

        <S.From own={from === 'Ojesh'}>{from}</S.From>
      </S.Content>
    </S.Container>
  );
}

export default Message;
