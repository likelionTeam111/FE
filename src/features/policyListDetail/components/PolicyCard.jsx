import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 12rem;
  flex-shrink: 0;
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: none;
  border-radius: 20px;
  padding: 2rem;
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
const Keyword = styled.span`
  padding-left: 2rem;
  color: var(--grey);
  font-size: 1.5rem;
`;

const KeywordWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;
  gap: 1rem;
`;
const Category = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border-radius: 9999px;
  border: solid var(--mainBlue);
  padding: 0.5rem;
  min-width: 5rem;
  background-color: var(--mainBlue);
  color: var(--white);
`;

const PolicyCard = ({ policy }) => {
  const { plcyNo, plcyKywdNm, plcyNm, lclsfNm, mclsfNm } = policy;

  return (
    <Container>
      <TitleWrapper>
        <Title>{plcyNm}</Title>
        <Link to={`/policyDetail/${plcyNo}`}>
          <Button>{'>'}</Button>
        </Link>
      </TitleWrapper>
      <Keyword># {plcyKywdNm}</Keyword>
      <KeywordWrapper>
        <Category>{lclsfNm}</Category>
        <Category>{mclsfNm}</Category>
      </KeywordWrapper>
    </Container>
  );
};

export default PolicyCard;
