import styled from 'styled-components';

const Container = styled.div`
  height: 12rem;
  flex-shrink: 0;
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: none;
  border-radius: 30px;
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const Button = styled.button`
  font-size: 2rem;
  font-weight: bold;
  background-color: var(--whtie);
`;

const KeywordWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  gap: 2rem;
`;
const Keyword = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 9999px;
  border: solid var(--mainBlue);
  padding: 0.5rem;
  min-width: 8rem;
  background-color: var(--mainBlue);
  color: var(--white);
`;

const PolicyCard = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>청년 자격증 지원 사업</Title>
        <Button>{'>'}</Button>
      </TitleWrapper>
      <KeywordWrapper>
        <Keyword>일자리</Keyword>
        <Keyword>취업</Keyword>
        <Keyword>청년 일자리사업 참여청년 모집</Keyword>
      </KeywordWrapper>
    </Container>
  );
};

export default PolicyCard;
