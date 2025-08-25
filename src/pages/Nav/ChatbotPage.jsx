import styled from 'styled-components';
//페이지
import Chatbot from '../../features/chatbot/Chatbot';

const Bg = styled.div`
  position: fixed; /* 뷰포트 전체를 덮음 */
  inset: 0;
  z-index: -1; /* 맨 뒤에 */
  pointer-events: none; /* 클릭 막지 않게 */
  background:
  /* 하단을 하얗게 페이드시키는 오버레이 */ linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 65%,
      rgba(255, 255, 255, 0.6) 90%,
      #fff 100%
    ),
    /* 기본 파랑 그라데이션은 더 길게 퍼지게 */
linear-gradient(
  180deg,
  #6fb6ff 0%,     /* 진한 파랑 */
  #61aeff 12%,    /* 중간 파랑 */
  #7fc0ff 22%,    /* 조금 연한 파랑 */
  #a7d6ff 30%,    /* 30%까지 파랑 계열 유지 */
  #d9ebff 55%,    /* 55%쯤에서 연한 하늘색 */
  #f1f8ff 75%,    /* 거의 흰색 */
  #ffffff 100%    /* 맨 아래 흰색 */
);
`;

const Container = styled.div`
  z-index: 1000;
  height: calc(100dvh - 12rem); // 페이지는 100dvh에서 헤더, 높이 빼주기
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.span`
  margin: 0 auto;
  font-size: 2.2rem;
  color: var(--white);
`;

const ChatbotPage = () => {
  return (
    <Container>
      <Bg />
      <Title>AI챗봇</Title>
      <Chatbot />
    </Container>
  );
};

export default ChatbotPage;
