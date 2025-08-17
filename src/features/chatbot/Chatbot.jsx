import styled from 'styled-components';
import { useState, useEffect } from 'react';

// 이미지
import ai from '../../assets/img/ai.png';
import send from '../../assets/img/send.png';

// api
import { openAi } from '../../apis/openAi';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1; /* 부모 높이를 꽉 채움 */
  min-height: 0; /* 내부 스크롤 허용 (중요) */
  gap: 0.5rem;
`;
const MessageWrapper = styled.div`
  flex: 1; /* 남는 높이를 가져감 */
  min-height: 0; /* flex 자식 스크롤 허용 (중요) */
  overflow-y: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const MsseageBox = styled.div`
  display: flex;
  margin: 1rem;
`;

const Message = styled.div`
  font-size: 1.2rem;
  width: 28rem;
  box-sizing: border-box;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-left: ${({ $right }) => ($right ? 'auto' : '0')}; /*조건에 따라 좌-우 정렬*/
  white-space: pre-wrap;
  word-break: break-all;
`;
const Avatar = styled.img`
  margin-top: 1rem;
  width: 3rem;
  height: 3rem;
`;

const Form = styled.form`
  height: auto;
  margin: 0 auto 0.5rem; /* 가운데 정렬만, 세로 auto 제거 */
`;

const ResetBnt = styled.button`
  width: 14rem;
  height: 3rem;
  background-color: var(--mainBlue);
  border-radius: 20px;
  color: var(--white);
  font-size: 1.5rem;
  margin-left: 3rem;
  margin-top: 1rem;
`;
const Input = styled.input`
  width: 30rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  height: 4rem;
  border-radius: 15px;
  box-sizing: border-box;
  padding-left: 2rem;
`;
const SendBtn = styled.button`
  background-color: var(--white);
  margin-left: 1rem;
  img {
    width: 2.5rem;
    display: block;
  }
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  //대화 기록 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('chat_message');
    if (saved !== null) setMessages(JSON.parse(saved));
  }, []);

  // 대화 초기화
  const handleReset = () => {
    localStorage.removeItem('chat_message');
    setMessages([]);
  };
  //메시지 보내기
  const handeSend = async (e) => {
    e.preventDefault();

    // 사용자 메시지
    const useMsg = {
      message: input,
      direction: 'outgoing',
    };

    const userUpdated = [...messages, useMsg];
    setMessages(userUpdated);
    localStorage.setItem('chat_message', JSON.stringify(userUpdated));

    // 봇 메세지
    const prompt = {
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        { role: 'user', content: input },
      ],
    };
    const reply = await openAi(prompt);
    setInput('');

    const BotMsg = {
      message: reply,
      direction: 'ingoing',
    };

    const botUpdated = [...userUpdated, BotMsg];
    setMessages(botUpdated);
    localStorage.setItem('chat_message', JSON.stringify(botUpdated));
  };

  return (
    <Container>
      <MessageWrapper>
        <MsseageBox>
          <Avatar src={ai} alt="ai" />
          <Message>
            어떻게 도와드릴까요? <br />
            ex1) 창업 준비중인데, 관련 정책 별로 가장 혜택이 높은 순으로 알려줘.
            <br />
            ex2) 이제 막 취업해서 첫 월급 받았는데 뭐부터 해야 할지 하나도 모르겠어.
          </Message>
        </MsseageBox>

        {messages?.map((m, idx) => {
          return (
            <MsseageBox key={idx}>
              {m.direction === 'ingoing' && <Avatar src={ai} />}
              <Message $right={m.direction === 'outgoing'}>{m.message}</Message>
            </MsseageBox>
          );
        })}
      </MessageWrapper>
      <ResetBnt onClick={handleReset}>대화 새로 시작하기</ResetBnt>

      <Form onSubmit={handeSend}>
        <Input placeholder="무엇이든 물어보세요!" value={input} onChange={(e) => setInput(e.target.value)} />
        <SendBtn type="submit">
          <img src={send} alt="send" />
        </SendBtn>
      </Form>
    </Container>
  );
};

export default Chatbot;
