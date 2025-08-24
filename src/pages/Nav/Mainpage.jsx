import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useInfoStore } from '../../store/useInfoStore';
import AiIcon from '../../assets/img/ai.png';
import PixelLogo from '../../assets/img/pixel-logo.png';
import AiUI from '../../assets/img/Ai UI.png';

const PageContainer = styled.main`
    background-color: var(--white);
    min-height: 100vh;
    padding: 0;
    padding-top: 6rem;
    padding-bottom: 8rem;
`;

const HeaderSection = styled.div`
    background-color: var(--white);
    padding: 2rem 2rem 1.5rem;
    text-align: left;
    margin-bottom: 3rem;
`;

const Greeting = styled.p`
    font-size: 2rem;
    color: var(--black);
    margin: 0 0 1rem 0;
    line-height: 1.4;
    max-width: 75%;
    margin-left: 10%;
`;

const ServiceDesc = styled.p`
    font-size: 2.3rem;
    font-weight: 700;
    color: var(--black);
    margin: 0;
    line-height: 1.4;
    max-width: 75%;
    margin-left: 10%;
`;

const MainContent = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`;

const RecommendWrap = styled.div`
    position: relative;
    background-color: var(--mainBlue);
    border-radius: 1.6rem;
    padding: 1.5rem;
    color: var(--white);
    overflow: hidden;
    min-height: 350px;
    margin-bottom: 0;
    width: 100%;
    max-width: 75%;
`;

const LogoImage = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 150px;
    height: 150px;
    z-index: 1;
    pointer-events: none;
`;

const RecommendHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
`;

const RecommendTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
`;

const RecommendDesc = styled.p`
    font-size: 1.6rem;
    opacity: 0.9;
    margin: 0;
`;

const ViewAll = styled.button`
    font-size: 1.6rem;
    color: var(--white);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    white-space: nowrap;
    font-weight: 600;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

const CardsRow = styled.div`
    display: flex;
    gap: 1rem;
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
    border-radius: 1.2rem;
    padding: 1.2rem;
    min-width: 16rem;
    min-height: 160px;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0.6rem 1.8rem rgba(0, 0, 0, 0.15);
    }
`;

const PolicyTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0 0 0.8rem 0;
    line-height: 1.3;
`;

const Tag = styled.span`
    display: block;
    font-size: 1.4rem;
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
    border: 1px solid #e8f4fd;
    border-radius: 1.2rem;
    background: var(--white);
    color: var(--black);
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    flex: 1;

    &:hover {
        background: #f8f9fa;
        border-color: var(--mainBlue);
        color: var(--mainBlue);
    }

    &.primary {
        background: var(--mainBlue);
        color: var(--white);
        border-color: var(--mainBlue);

        &:hover {
            background: #0056b3;
            border-color: #0056b3;
            color: var(--white);
        }
    }
`;

const ReSearchButton = styled.button`
    width: auto;
    background: var(--white);
    color: var(--mainBlue);
    border: 2px solid var(--white);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    font-size: 1.7rem;
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
    margin-top: 4rem;

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
    font-size: 1.6rem;
    color: var(--black);
    margin: 0 0 1.5rem 0;
    font-weight: 600;
`;

const SearchInput = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchField = styled.input`
    width: 100%;
    padding: 1.5rem 3.5rem 1.5rem 1.8rem;
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    font-size: 1.4rem;
    background: var(--white);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
        color: #999;
    }

    &:focus {
        border-color: var(--mainBlue);
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
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

    const recommendedPolicies = [
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
        {
            title: '청년 자격증 지원 사업',
            tag1: '#청년 일자리사업',
            tag2: '참여청년 모집',
        },
    ];

    return (
        <PageContainer>
            <HeaderSection>
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
                                    <PolicyButton className="primary">일자리</PolicyButton>
                                    <PolicyButton>취업 지원</PolicyButton>
                                </ButtonContainer>
                            </PolicyCard>
                        ))}
                    </CardsRow>

                    <ReSearchButton onClick={() => navigate('/onboarding/profile-info')}>
                        <ReSearchIcon src={AiUI} alt="AI 아이콘" />
                        AI 맞춤 정책 다시 탐색하기
                    </ReSearchButton>

                    <LogoImage src={PixelLogo} alt="픽셀 로고" />
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
                    <SearchInput>
                        <SearchField type="text" placeholder="궁금한 정책을 검색해보세요!" />
                        <SearchIcon />
                    </SearchInput>
                </SearchSection>
            </MainContent>
        </PageContainer>
    );
};

export default Mainpage;
