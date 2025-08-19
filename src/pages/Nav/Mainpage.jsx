import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AiIcon from '../../assets/img/ai.png';
import PixelLogo from '../../assets/img/pixel-logo.png';

const PageContainer = styled.main`
    background-color: var(--mainSky);
    min-height: 100vh;
    padding: 3rem 2rem 12rem;
`;

const Section = styled.section`
    max-width: 48rem;
    margin: 0 auto;
`;

const ServiceTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--black);
    line-height: 1.5;
    margin-top: 1.5rem;
`;

const Greeting = styled.p`
    font-size: 1.4rem;
    color: rgba(85, 99, 118, 0.7);
    margin-top: 1.5rem;
`;

const RecommendWrap = styled.div`
    position: relative;
    background-color: var(--mainBlue);
    border-radius: 1.6rem;
    padding: 2.2rem;
    margin-top: 3rem;
    color: var(--white);
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        right: 1rem;
        bottom: 0.5rem;
        width: 220px;
        height: 220px;
        background: url(${PixelLogo}) no-repeat center/contain;
        opacity: 0.25;
        pointer-events: none;
    }
`;

const RecommendHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RecommendTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 800;
`;

const RecommendDesc = styled.p`
    font-size: 1.2rem;
    opacity: 0.9;
    margin-top: 1rem;
`;

const ViewAll = styled.button`
    font-size: 1.2rem;
    color: var(--white);
    background: transparent;
`;

const CardsRow = styled.div`
    display: flex;
    gap: 1.2rem;
    overflow-x: auto;
    padding: 2rem 0 1.8rem;
`;

const PolicyCard = styled.div`
    background: var(--white);
    color: var(--black);
    border-radius: 1.2rem;
    padding: 1.8rem;
    min-width: 16rem;
    box-shadow: 0 0.6rem 1.4rem rgba(0, 0, 0, 0.08);
`;

const PolicyTitle = styled.p`
    font-size: 1.4rem;
    font-weight: 700;
`;

const Tag = styled.span`
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
`;

const ReSearchButton = styled.button`
    width: 100%;
    margin-top: 1.2rem;
    background: var(--white);
    color: var(--black);
    border-radius: 1.2rem;
    padding: 1.6rem 1.6rem;
    font-size: 1.4rem;
    font-weight: 700;
`;

const HelperBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--white);
    border-radius: 1.2rem;
    padding: 1.6rem 1.8rem;
    margin-top: 2.5rem;
    box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.06);
`;

const HelperText = styled.p`
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.7);
`;

const HelperIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;

const CtaButton = styled.button`
    width: 100%;
    background: var(--buttonGrey);
    color: var(--white);
    border-radius: 1.6rem;
    padding: 2rem 1.6rem;
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: 800;
    box-shadow: 0 0.8rem 2rem rgba(85, 99, 118, 0.25);
`;

const Mainpage = () => {
    const navigate = useNavigate();

    const recommendedPolicies = [
        {
            title: '청년 자격증 지원 사업',
            tag1: '자격증 취득 실습·학습 지원',
            tag2: '18-39세 대상',
        },
        {
            title: '청년 월세 지원 사업',
            tag1: '월세 최대 20만원 지원',
            tag2: '18-39세 대상',
        },
        {
            title: '청년 자산형성 지원',
            tag1: '자산형성 저축 장려',
            tag2: '18-39세 대상',
        },
    ];

    return (
        <PageContainer>
            <Section>
                <Greeting>김자립님, 새로운 시작을 응원해요.</Greeting>
                <ServiceTitle>필요한 모든 정책, AI가 챙겨드릴게요.</ServiceTitle>

                <RecommendWrap>
                    <RecommendHead>
                        <div>
                            <RecommendTitle>AI 맞춤 정책 탐색 결과</RecommendTitle>
                            <RecommendDesc>김자립님을 위해 준비한 핵심 정책이에요.</RecommendDesc>
                        </div>
                        <ViewAll onClick={() => navigate('/policyList')}>전체보기 &gt;</ViewAll>
                    </RecommendHead>

                    <CardsRow>
                        {recommendedPolicies.map((p) => (
                            <PolicyCard key={p.title}>
                                <PolicyTitle>{p.title}</PolicyTitle>
                                <Tag>{p.tag1}</Tag>
                                <br />
                                <Tag>{p.tag2}</Tag>
                            </PolicyCard>
                        ))}
                    </CardsRow>

                    <ReSearchButton onClick={() => navigate('/onboarding/profile-info')}>
                        AI 맞춤 정책 다시 탐색하기
                    </ReSearchButton>
                </RecommendWrap>

                <HelperBanner>
                    <HelperIcon src={AiIcon} alt="AI 도우미" />
                    <HelperText>정책이 너무 복잡하고 어렵나요? 저 AI 챗봇에게 편하게 물어보세요.</HelperText>
                </HelperBanner>

                <CtaButton onClick={() => navigate('/chatbot')}>AI 챗봇 바로가기 &gt;</CtaButton>
            </Section>
        </PageContainer>
    );
};

export default Mainpage;
