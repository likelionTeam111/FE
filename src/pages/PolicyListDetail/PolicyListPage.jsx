import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';

const Container = styled.div`
  height: calc(100vh - 14vh);
  display: flex;
  flex-direction: column;
  background: var(--mainSky);
  gap: 5vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`;
const Title = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
const Description = styled.span`
  font-size: 1.5rem;
`;

const PolicyCardWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  padding-bottom: 7vh; // 푸터만큼 빼주기
`;

const PolicyListPage = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>AI 맞춤 정책 목록</Title>
        <Description>자립님에게 도움이 될 만한 정책들을 모아봤어요.</Description>
      </TitleWrapper>
      <PolicyCardWrapper>
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
        <PolicyCard />
      </PolicyCardWrapper>
    </Container>
  );
};

export default PolicyListPage;
