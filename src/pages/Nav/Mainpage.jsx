import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//스토어
import { useAuthStore } from '../../store/useAuthStore';
import AiIcon from '../../assets/img/ai.png';
import PixelLogo from '../../assets/img/pixel-logo.png';
import AiUI from '../../assets/img/Ai UI.png';

//api
import { recommendAll } from '../../apis/api/recommend';

const PageContainer = styled.main`
    height: calc(100vh - 12rem);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const HeaderSection = styled.div`
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
`;

const Greeting = styled.span`
    font-size: 2rem;
    color: var(--grey);
    font-weight: bold;
`;

const ServiceDesc = styled.span`
    font-size: 2.3rem;
    font-weight: 700;
    color: var(--black);
`;

const MainContent = styled.div`
    padding-top: 2rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    gap: 3rem;
`;

const RecommendWrap = styled.div`
    background-color: var(--mainBlue);
    border-radius: 20px;
    padding: 1.5rem;
    color: var(--white);
    overflow: hidden;
    width: 80%;
    height: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const RecommendHeader = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardText = styled.div`
    font-size: ${({ $size }) => $size};
    font-weight: ${({ $bold }) => $bold};
`;

const CardsRow = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    height: 15rem;
`;

const PolicyCard = styled.div`
    background: var(--white);
    color: var(--black);
    border-radius: 15px;
    padding: 1.2rem;
    width: 11rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    box-sizing: border-box;
`;

const PolicyTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
`;

const Tag = styled.span`
    font-size: 1rem;
`;
const CategoryWrapper = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start; // 글자많아지면 알약 형태 커짐
`;
const Category = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    border-radius: 8px;
    background-color: var(--mainBlue);
    color: var(--white);
    width: auto;
    padding: 0 0.7rem;
`;

const ReSearchButton = styled.button`
    background: var(--white);
    border-radius: 15px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 70%;
    height: 4rem;

    &:hover {
        background: var(--mainBlue);
        color: var(--white);
        border-color: var(--mainBlue);
        transform: translateY(-1px);
    }
`;

const ReSearchIcon = styled.img`
    width: 1.6rem;
    height: 1.6rem;
`;

const HelperBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: #f8f9fa;
    border-radius: 1rem;
    padding: 2rem 2.2rem;
    margin-bottom: 0;
    width: 100%;
    max-width: 75%;
    transition: background-color 0.2s ease;

    &:hover {
        background: #f0f2f5;
    }
`;

const HelperText = styled.p`
    font-size: 1.6rem;
    color: var(--black);
    margin: 0;
    line-height: 1.5;
`;

const HelperIcon = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.95);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const SearchSection = styled.div`
    margin-bottom: 0;
    width: 100%;
    max-width: 75%;
    padding-bottom: 2rem;
`;

const SearchPrompt = styled.p`
    font-size: 1.7rem;
    color: var(--black);
    margin: 0 0 1.5rem 0;
    font-weight: 600;
`;

const SearchInput = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchField = styled.div`
    width: 100%;
    padding: 1.5rem 3.5rem 1.5rem 1.8rem;
    border: 1px solid var(--buttonGrey);
    border-radius: 1rem;
    font-size: 1.4rem;
    background: var(--white);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    color: var(--grey);
`;

const SearchIcon = styled.div`
    position: absolute;
    right: 1.5rem;
    width: 1.4rem;
    height: 1.4rem;
    background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3ccircle cx='11' cy='11' r='8'%3e%3c/circle%3e%3cpath d='m21 21-4.35-4.35'%3e%3c/path%3e%3c/svg%3e")
        no-repeat center/contain;
    pointer-events: none;
`;

const Mainpage = () => {
    const navigate = useNavigate();
    const { nickname } = useAuthStore();
    const [policyList, setPolicyList] = useState([]);

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
        <PageContainer>
            <HeaderSection>
                <Greeting>{nickname}님, 새로운 시작을 응원해요.</Greeting>
                <ServiceDesc>필요한 모든 정책, AI가 챙겨드릴게요.</ServiceDesc>
            </HeaderSection>

            <MainContent>
                <RecommendWrap>
                    <RecommendHeader>
                        <CardText $bold={'bold'} $size={'2rem'}>
                            AI 맞춤 정책 탐색 결과
                        </CardText>
                        <CardText $size={'1.5rem'}>{nickname}님을 위해 준비한 핵심 정책이에요.</CardText>
                        <Link to="/policyList" style={{ margin: '0 0 0 auto' }}>
                            <CardText $size={'1.5rem'}>전체보기 {'>'}</CardText>
                        </Link>
                    </RecommendHeader>

                    <CardsRow>
                        {policyList?.map((p, idx) => (
                            <PolicyCard key={idx}>
                                <PolicyTitle>{p.plcyNm}</PolicyTitle>
                                <Tag>{p.plcyKywdNm}</Tag>
                                <CategoryWrapper>
                                    <Category>{p.lclsfNm}</Category>
                                    <Category>{p.mclsfNm}</Category>
                                </CategoryWrapper>
                            </PolicyCard>
                        ))}
                    </CardsRow>

                    <ReSearchButton onClick={() => navigate('/onboarding/profile-info')}>
                        <ReSearchIcon src={AiUI} alt="AI 아이콘" />
                        AI 맞춤 정책 다시 탐색하기
                    </ReSearchButton>
                </RecommendWrap>

                <HelperBanner>
                    <HelperIcon onClick={() => navigate('/chatbot')}>
                        <img src={AiIcon} alt="AI 도우미" />
                    </HelperIcon>
                    <HelperText>
                        정책이 너무 복잡하고 어렵나요?
                        <br />저 AI 챗봇에게 편하게 물어보세요.
                    </HelperText>
                </HelperBanner>

                <SearchSection>
                    <SearchPrompt>다른 정책을 직접 찾아보고 싶나요?</SearchPrompt>
                    <Link to={'/search'}>
                        <SearchInput>
                            <SearchField>궁금한 정책을 검색해보세요!</SearchField>
                            <SearchIcon />
                        </SearchInput>
                    </Link>
                </SearchSection>
            </MainContent>
        </PageContainer>
    );
};

export default Mainpage;
