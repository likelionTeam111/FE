import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';
import { useState } from 'react';

// api
import { recommend } from '../../apis/api/recommend';

const Container = styled.div`
  height: calc(100vh - 14vh);
  display: flex;
  flex-direction: column;
  background-color: var(--mainSky);
  gap: 5vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`;
const Title = styled.span`
  font-size: 2.5rem;
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
  gap: 2rem;
  padding-bottom: 7vh; // 푸터만큼 빼주기
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const CategoryBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background-color: var(--mainBlue);
  color: var(--white);
`;

const categories = ['일자리', '주거', '교육', '복지문화', '참여권리'];

const PolicyListPage = () => {
  const [policyList, setPolicyList] = useState([]);

  const handleCategory = async (cat) => {
    try {
      const data = await recommend(cat);
      setPolicyList(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>AI 맞춤 정책 목록</Title>
        <Description>자립에게 도움이 될 만한 정책들을 모아봤어요.</Description>
        <CategoryBox>
          {categories.map((cat, idx) => {
            return (
              <CategoryBtn key={idx} onClick={() => handleCategory(cat)}>
                {cat}
              </CategoryBtn>
            );
          })}
        </CategoryBox>
      </TitleWrapper>

      <PolicyCardWrapper>
        {policyList?.map((policyInfo) => {
          return <PolicyCard key={policyInfo.id} policyInfo={policyInfo} />;
        })}
      </PolicyCardWrapper>
    </Container>
  );
};

export default PolicyListPage;
