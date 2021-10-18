import React, { useRef, useState, useEffect, useCallback } from 'react';

// components
import Message from 'components/Message';

// utils
import publicMessage from 'utils/PublicMessages';

// styles
import * as S from './styles';

const COUNT = 5;

function MessagesArea({ account }) {
  const chatRef = useRef();

  const toastTimeout = useRef();

  const [chat, setChat] = useState([]);
  const [toast, setToast] = useState('');
  const [message, setMessage] = useState('');
  const [noMoreMsg, setNoMoreMsg] = useState(false);

  const sendMsg = useCallback(() => {
    publicMessage.sendMessage(message);

    setMessage('');
  }, [message]);

  const fetchMessages = useCallback(
    async (page = 1) => {
      if (noMoreMsg) return;

      // const page = Math.floor(chat.length / COUNT) + 1;

      const _msgs = await publicMessage.getMessages(page, COUNT);

      const msgs = _msgs.map(m => ({
        from: m[0],
        msg: m[1]
      }));

      console.log('msgs:', msgs);

      if (msgs.length < COUNT) {
        setNoMoreMsg(true);
      }

      setChat(old => {
        const newChat = [...msgs, ...old];

        return newChat;
      });
    },
    [noMoreMsg]
  );

  const handleNewMessage = useCallback(event => {
    const { _from, _msg } = event.returnValues;

    setChat(old => {
      const newMsg = {
        from: _from,
        msg: _msg
      };

      const newChat = [...old, newMsg];

      return newChat;
    });
  }, []);

  const handleMsgToast = useCallback(event => {
    console.log(
      'handleMsgToast:',
      new Date().toISOString(),
      event.returnValues
    );
  }, []);

  // For scrolling to bottom of chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, []);

  // init
  useEffect(() => {
    fetchMessages();

    publicMessage.addEventListener('MessageSaved', handleNewMessage);
    publicMessage.addEventListener('SendingMessage', handleMsgToast);

    return () => {
      publicMessage.removeEventListener('MessageSaved', handleNewMessage);
      publicMessage.removeEventListener('SendingMessage', handleMsgToast);
    };
  }, [fetchMessages, handleMsgToast, handleNewMessage]);

  useEffect(() => {
    if (toast) {
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }

      toastTimeout.current = setTimeout(() => setToast(''), 3000);
    }
  }, [toast]);

  return (
    <S.Container>
      <S.Messages>
        <S.MessageWrapper ref={chatRef}>
          {chat.map((msg, index) => (
            <Message key={index} message={msg} account={account} />
          ))}
        </S.MessageWrapper>
      </S.Messages>

      <S.Toast show={Boolean(toast)}>{toast}</S.Toast>

      <S.InputArea>
        <S.Input value={message} onChange={e => setMessage(e.target.value)} />
        <S.SendBtn onClick={sendMsg}>Send</S.SendBtn>
      </S.InputArea>
    </S.Container>
  );
}

export default MessagesArea;
