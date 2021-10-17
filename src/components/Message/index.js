import React, { useState, useEffect } from 'react';

// utils
import web3js from 'utils/Web3js';
import handles from 'utils/Handles';

// styles
import * as S from './styles';

function Message({ message: { from, msg } }) {
  const [handle, setHandle] = useState(from);

  const own = from === web3js.account;

  useEffect(() => {
    handles.getHandle(from).then(handle => setHandle(handle));
  }, [from]);

  return (
    <S.Container own={own}>
      <S.Content own={own}>
        <S.Msg>{msg}</S.Msg>

        <S.From own={own}>{handle}</S.From>
      </S.Content>
    </S.Container>
  );
}

export default Message;
