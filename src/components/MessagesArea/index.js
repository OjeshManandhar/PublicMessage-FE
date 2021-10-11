import React, { useRef, useState, useEffect, useCallback } from 'react';

// components
import Message from 'components/Message';

// styles
import * as S from './styles';

function MessagesArea() {
  const chatRef = useRef();

  const toastTimeout = useRef();

  const [toast, setToast] = useState('');
  const [message, setMessage] = useState('');

  const sendMsg = useCallback(() => {
    const msg = message;

    console.log('message to send:', msg);

    setMessage('');
  }, [message]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  });

  useEffect(() => {
    if (toast) {
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }

      toastTimeout.current = setTimeout(() => setToast(''), 3000);
    }
  }, [toast]);

  useEffect(() => {
    setTimeout(() => setToast('ASD is sending a message'), 1000);
    setTimeout(() => setToast('ASD is sending another message'), 2000);
  }, []);

  return (
    <S.Container>
      <S.Messages>
        <S.MessageWrapper ref={chatRef}>
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />

          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message message={{ from: 'Ojesh', msg: 'Test' }} />
          <Message
            message={{
              from: 'DeadSkull',
              msg: 'hadg;asdb;sakdbsa;kjdb sa;d jbsa;dbas;dvas;dvashdjlbas;djbsa;dkjbas;djkbas;djasb;ndkjasbdlkasjbdsaijkdba;skjdbas;kdjbas;djkba;sdasbldijaksbdkasjbd;askjdbasdbaslkdjbasldikajsbd;akjdb;asiudjb;sajkdba;kdajbd.sajdb;asidkjb'
            }}
          />
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
