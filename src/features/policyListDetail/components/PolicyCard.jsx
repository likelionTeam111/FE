import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 8.2rem;
  flex-shrink: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: none;
  border-radius: 20px;
  padding: 1rem;
  gap: 0.3rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
`;

const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const Title = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;
const Button = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  background-color: var(--whtie);
`;
const Keyword = styled.span`
  padding-left: 1rem;
  color: var(--buttonGrey);
  font-size: 1rem;
`;

const CategoryWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  gap: 1rem;
`;
const Category = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 9999px;
  border: solid var(--mainBlue);
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--mainBlue);
  color: var(--white);
`;

const PolicyCard = ({ policyInfo }) => {
  const { id, plcyKywdNm, plcyNm, lclsfNm, mclsfNm } = policyInfo;
  const navigate = useNavigate();


  return (
    <Container onClick={()=>navigate(`/policyDetail/${id}`)}>
      <TitleWrapper>
        <Title>{plcyNm}</Title>
          <Button>{'>'}</Button>
      </TitleWrapper>
      <Keyword># {plcyKywdNm}</Keyword>
      <CategoryWrapper>
        <Category>{lclsfNm}</Category>
        <Category>{mclsfNm}</Category>
      </CategoryWrapper>
    </Container>
  );
};

export default PolicyCard;
