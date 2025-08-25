import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';
import { useState, useEffect } from 'react';

// api
import { recommend, recommendAll } from '../../apis/api/recommend';

const Container = styled.div`
  height: calc(100vh - 10vh);
  display: flex;
  flex-direction: column;
  background-color: var(--mainSky);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--white);
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--black);
`;

const CategoryBox = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.5rem;
  border-bottom: 1.5px solid var(--grey, #ddd);
  background: #fff;
`;

const CategoryBtn = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  font-size: 1.3rem;
  cursor: pointer;
  width: 5rem;
  /* 활성 탭 밑줄 */
  &::after {
    content: '';
    position: absolute;
    left: -10%;
    width: 6rem;
    bottom: -1rem; /* 하단 보더 위에 살짝 겹치도록 */
    height: 2px;
    border-radius: 999px;
    background: var(--mainBlue);
    transform: scaleX(${(p) => (p.$active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.18s ease;
  }
`;

const PolicyCardWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background-color: var(--mainSky);
  padding: 2rem 0;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

const categories = ['전체', '일자리', '주거', '교육', '복지문화', '참여권리'];

const PolicyListPage = () => {
  const [policyList, setPolicyList] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleCategory = async (cat) => {
    if (cat === '전체') {
      const data = await recommendAll(cat);
      setPolicyList(data);
    } else {
      try {
        const data = await recommend(cat);
        setPolicyList(data);
      } catch (e) {
        console.error(e);
      }
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const data = await recommendAll();
        setPolicyList(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Title>AI 맞춤 정책 목록</Title>
        <CategoryBox>
          {categories.map((cat, idx) => {
            return (
              <CategoryBtn
                key={idx}
                $active={idx === activeIdx}
                onClick={() => {
                  setActiveIdx(idx);
                  handleCategory(cat);
                }}>
                {cat}
              </CategoryBtn>
            );
          })}
        </CategoryBox>
      </TitleWrapper>

      <PolicyCardWrapper>
        {policyList?.map((policyInfo, idx) => {
          return <PolicyCard key={idx} policyInfo={policyInfo} />;
        })}
      </PolicyCardWrapper>
    </Container>
  );
};

export default PolicyListPage;
