import React, { useState, useCallback } from 'react';

// styles
import * as S from './styles';

function MessagesBox() {
  const [message, setMessage] = useState('');

  const sendMsg = useCallback(() => {
    const msg = message;

    console.log('message to send:', msg);

    setMessage('');
  }, [message]);

  return (
    <S.Container>
      <S.Messages>
        <li>Just a test</li>
        <li>Just another test</li>
      </S.Messages>

      <S.Toast>ASD is sending a message</S.Toast>

      <S.InputArea>
        <S.Input value={message} onChange={e => setMessage(e.target.value)} />
        <S.SendBtn onClick={sendMsg}>Send</S.SendBtn>
      </S.InputArea>
    </S.Container>
  );
}

export default MessagesBox;
