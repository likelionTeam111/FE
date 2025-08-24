import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';
import { useState } from 'react';

// api
import { recommend } from '../../apis/api/recommend';

const Container = styled.div`
<<<<<<< HEAD
  height: calc(100vh - 10vh);
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
  gap: 2rem;
  background-color: var(--white);
=======
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--mainSky);
    gap: 5vh;
    padding-top: 6rem;
    padding-bottom: 8rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    padding: 2rem 0;
>>>>>>> 3d19f6a6846eca2bed5a76db229d9a5a87740ae7
`;

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--black);
`;

<<<<<<< HEAD
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
=======
const Description = styled.span`
    font-size: 1.5rem;
    color: var(--black);
>>>>>>> 3d19f6a6846eca2bed5a76db229d9a5a87740ae7
`;

const PolicyCardWrapper = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem 2rem;
    background-color: var(--mainSky);
`;

<<<<<<< HEAD
const categories = ['전체', '일자리', '주거', '교육', '복지문화', '참여권리'];

const PolicyListPage = () => {
  const [policyList, setPolicyList] = useState([]);
  const [activeIdx, setActiveIdx] = useState(0);
=======
const CategoryBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

const CategoryBtn = styled.button`
    width: 6rem;
    height: 3rem;
    background-color: var(--mainBlue);
    color: var(--white);
    border: none;
    border-radius: 0.8rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
    }
`;

const categories = ['일자리', '주거', '교육', '복지문화', '참여권리'];

const PolicyListPage = () => {
    const [policyList, setPolicyList] = useState([]);
>>>>>>> 3d19f6a6846eca2bed5a76db229d9a5a87740ae7

    const handleCategory = async (cat) => {
        try {
            const data = await recommend(cat);
            setPolicyList(data);
        } catch (e) {
            console.error(e);
        }
    };

<<<<<<< HEAD
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
=======
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
>>>>>>> 3d19f6a6846eca2bed5a76db229d9a5a87740ae7

            <PolicyCardWrapper>
                {policyList?.map((policyInfo) => {
                    return <PolicyCard key={policyInfo.id} policyInfo={policyInfo} />;
                })}
            </PolicyCardWrapper>
        </Container>
    );
};

export default PolicyListPage;
