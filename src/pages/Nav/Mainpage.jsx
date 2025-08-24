import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AiIcon from '../../assets/img/ai.png';
import PixelLogo from '../../assets/img/pixel-logo.png';
import AiUI from '../../assets/img/Ai UI.png';

const PageContainer = styled.main`
    background-color: var(--white);
    min-height: 100vh;
    padding: 0;
`;

const HeaderSection = styled.div`
    background-color: var(--white);
    padding: 1.5rem 2rem 1rem;
    text-align: center;
`;

const ServiceTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--mainBlue);
    margin: 0 0 1rem 0;
`;

const Greeting = styled.p`
    font-size: 1.4rem;
    color: var(--black);
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
`;

const ServiceDesc = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--black);
    margin: 0;
    line-height: 1.4;
`;

const MainContent = styled.div`
    padding: 0 2rem;
`;

const RecommendWrap = styled.div`
    position: relative;
    background-color: var(--mainBlue);
    border-radius: 1.6rem;
    padding: 1.5rem;
    color: var(--white);
    overflow: hidden;
    min-height: 380px;
    margin-bottom: 1.5rem;
    max-width: 80%;

    &::after {
        content: '';
        position: absolute;
        right: 1.2rem;
        bottom: 1.2rem;
        width: 100px;
        height: 100px;
        background: url(${PixelLogo}) no-repeat center/contain;
        opacity: 0.2;
        pointer-events: none;
        z-index: 1;
    }
`;

const RecommendHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.2rem;
    position: relative;
    z-index: 2;
`;

const RecommendTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
`;

const RecommendDesc = styled.p`
    font-size: 1.3rem;
    opacity: 0.9;
    margin: 0;
`;

const ViewAll = styled.button`
    font-size: 1.3rem;
    color: var(--white);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    white-space: nowrap;
`;

const CardsRow = styled.div`
    display: flex;
    gap: 0.8rem;
    overflow-x: auto;
    padding: 1rem 0 1.5rem;
    position: relative;
    z-index: 2;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const PolicyCard = styled.div`
    background: var(--white);
    color: var(--black);
    border-radius: 1rem;
    padding: 1.2rem;
    min-width: 13rem;
    min-height: 150px;
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
`;

const PolicyTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 0 0.8rem 0;
    line-height: 1.3;
`;

const Tag = styled.span`
    display: block;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 0.3rem;
    line-height: 1.3;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.6rem;
    margin-top: auto;
`;

const PolicyButton = styled.button`
    padding: 0.6rem 1rem;
    border: 1px solid var(--black);
    border-radius: 1.5rem;
    background: var(--white);
    color: var(--black);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    flex: 1;

    &:first-child {
        background: var(--mainBlue);
        color: var(--white);
        border-color: var(--mainBlue);
    }

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
`;

const ReSearchButton = styled.button`
    width: auto;
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    align-self: flex-start;
    position: relative;
    z-index: 2;

    &:hover {
        background: var(--white);
        color: var(--mainBlue);
    }
`;

const ReSearchIcon = styled.img`
    width: 1.8rem;
    height: 1.8rem;
`;

const HelperBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #f5f5f5;
    border-radius: 1rem;
    padding: 1.2rem 1.5rem;
    margin-bottom: 2rem;
    max-width: 80%;
`;

const HelperText = styled.p`
    font-size: 1.2rem;
    color: var(--black);
    margin: 0;
    line-height: 1.4;
`;

const HelperIcon = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    flex-shrink: 0;
`;

const Mainpage = () => {
    const navigate = useNavigate();

    const recommendedPolicies = [
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년일자리사업',
            tag2: '참여청년 모집',
        },
    ];

    return (
        <PageContainer>
            <HeaderSection>
                <ServiceTitle>청년자립 비서</ServiceTitle>
                <Greeting>김자립님, 새로운 시작을 응원해요.</Greeting>
                <ServiceDesc>필요한 모든 정책, AI가 챙겨드릴게요.</ServiceDesc>
            </HeaderSection>

            <MainContent>
                <RecommendWrap>
                    <RecommendHeader>
                        <div>
                            <RecommendTitle>AI 맞춤 정책 탐색 결과</RecommendTitle>
                            <RecommendDesc>김자립님을 위해 준비한 핵심 정책이에요.</RecommendDesc>
                        </div>
                        <ViewAll onClick={() => navigate('/policyList')}>전체보기 &gt;</ViewAll>
                    </RecommendHeader>

                    <CardsRow>
                        {recommendedPolicies.map((p, index) => (
                            <PolicyCard key={index}>
                                <PolicyTitle>{p.title}</PolicyTitle>
                                <Tag>{p.tag1}</Tag>
                                <Tag>{p.tag2}</Tag>
                                <ButtonContainer>
                                    <PolicyButton>일자리</PolicyButton>
                                    <PolicyButton>취업 지원</PolicyButton>
                                </ButtonContainer>
                            </PolicyCard>
                        ))}
                    </CardsRow>

                    <ReSearchButton onClick={() => navigate('/onboarding/profile-info')}>
                        <ReSearchIcon src={AiUI} alt="AI 아이콘" />
                        AI 맞춤 정책 다시 탐색하기
                    </ReSearchButton>
                </RecommendWrap>

                <HelperBanner>
                    <HelperIcon src={AiIcon} alt="AI 도우미" />
                    <HelperText>
                        정책이 너무 복잡하고 어렵나요?
                        <br />저 AI 챗봇에게 편하게 물어보세요.
                    </HelperText>
                </HelperBanner>
            </MainContent>
        </PageContainer>
    );
};

export default Mainpage;
