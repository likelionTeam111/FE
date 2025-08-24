import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';
import { useState } from 'react';

// api
import { recommend } from '../../apis/api/recommend';

const Container = styled.div`
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
`;

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--black);
`;

const Description = styled.span`
    font-size: 1.5rem;
    color: var(--black);
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
