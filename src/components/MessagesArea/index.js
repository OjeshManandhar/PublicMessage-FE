import React, { useRef, useState, useEffect, useCallback } from 'react';

// components
import Message from 'components/Message';

// utils
import handles from 'utils/Handles';
import publicMessage from 'utils/PublicMessages';

// styles
import * as S from './styles';

const COUNT = 5;

function MessagesArea({ account, updateHandle }) {
  const chatRef = useRef();

  const toastTimeout = useRef();

  const [chat, setChat] = useState([]);
  const [toast, setToast] = useState('');
  const [handle, setHandle] = useState('');
  const [message, setMessage] = useState('');
  const [noMoreMsg, setNoMoreMsg] = useState(false);

  const sendMsg = useCallback(async () => {
    try {
      setToast('Sending your message');
      await publicMessage.sendMessage(message);
    } catch (err) {
      console.log('error in sendMsg:', err);
    } finally {
      setToast('');
      setMessage('');
    }
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

  const getNextPage = useCallback(() => {
    const page = Math.floor(chat.length / COUNT) + 1;

    fetchMessages(page);
  }, [chat, fetchMessages]);

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

    handles.getHandle(account).then(handle => setHandle(handle));

    publicMessage.addEventListener('MessageSaved', handleNewMessage);
    publicMessage.addEventListener('SendingMessage', handleMsgToast);

    return () => {
      publicMessage.removeEventListener('MessageSaved', handleNewMessage);
      publicMessage.removeEventListener('SendingMessage', handleMsgToast);
    };
  }, [account, fetchMessages, handleMsgToast, handleNewMessage]);

  // For toast
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
          {!noMoreMsg && (
            <S.LoadMore onClick={() => getNextPage()}>Load More</S.LoadMore>
          )}

          {chat.map((msg, index) => (
            <Message key={index} message={msg} account={account} />
          ))}
        </S.MessageWrapper>
      </S.Messages>

      <S.Toast show={Boolean(toast)}>{toast}</S.Toast>

      <S.InputArea>
        <S.Btn onClick={() => updateHandle()}>Update Handle</S.Btn>
        <S.Input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={`Send a message as ${handle}`}
        />
        <S.SendBtn onClick={sendMsg}>Send</S.SendBtn>
      </S.InputArea>
    </S.Container>
  );
}

export default MessagesArea;
