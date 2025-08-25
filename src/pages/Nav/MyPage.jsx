import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useInfoStore } from '../../store/useInfoStore';

const PageContainer = styled.main`
    background-color: var(--mainSky);
    height: 100vh;
    overflow: hidden;
    padding: 0;
    padding-top: 6rem;
    padding-bottom: 2rem;
`;

const HeaderSection = styled.div`
    background-color: var(--mainSky);
    padding: 1.5rem 2rem 1rem;
    text-align: left;
    margin-bottom: 2rem;
`;

const ContentSection = styled.div`
    background-color: var(--white);
    padding: 2rem 0;
    border-radius: 2rem 2rem 0 0;
    margin-top: 0;
`;

const Greeting = styled.p`
    font-size: 1.8rem;
    color: var(--black);
    margin: 0;
    line-height: 1.4;
    max-width: 75%;
    margin-left: 10%;
    font-weight: 700;
`;

const Section = styled.section`
    max-width: 75%;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 12rem);
    overflow-y: auto;
`;

const ProfileCard = styled.div`
    margin-top: 1.5rem;
    background: var(--mainBlue);
    color: var(--white);
    border-radius: 1.4rem;
    padding: 2rem;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1);
`;

const ProfileTitle = styled.h3`
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 800;
    margin-bottom: 1.2rem;
`;

const ProfileDesc = styled.p`
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 0 0 2rem 0;
    line-height: 1.4;
    font-weight: 600;
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 2rem;
    margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const InfoLabel = styled.span`
    font-size: 1.3rem;
    opacity: 0.95;
    font-weight: 600;
`;

const InfoValue = styled.span`
    font-size: 1.4rem;
    font-weight: 800;
`;

const UpdateText = styled.p`
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 1.5rem 0 0 0;
    line-height: 1.4;
    font-weight: 600;
`;

const BoldText = styled.span`
    font-weight: 800;
`;

const SubSectionTitle = styled.h4`
    margin-top: 2rem;
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 1rem;
`;

const PolicyButton = styled.button`
    margin-top: 1rem;
    font-size: 1.4rem;
    color: var(--white);
    background: var(--mainBlue);
    text-align: center;
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 1.1rem;
    font-weight: 700;
    transition: all 0.2s ease;
    width: 100%;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1);

    &:hover {
        background: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 5px 14px rgba(0, 0, 0, 0.18);
    }
`;

const LogoutButton = styled.button`
    width: 100%;
    margin-top: 2rem;
    height: 4.5rem;
    border-radius: 1.4rem;
    background: var(--white);
    color: #ff4d4f;
    border: 2px solid #ffb3b3;
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.1);

    &:hover {
        background: #fff5f5;
        border-color: #ff8080;
    }
`;

/* 큰 화면에서는 조금 더 키움 */
const LargeUp = styled.div`
    @media (min-width: 480px) {
        ${PageContainer} {
            padding: 3rem 2.4rem 3rem;
        }
        ${Greeting} {
            font-size: 2rem;
        }
        ${ProfileCard} {
            padding: 2.5rem;
        }
        ${ProfileTitle} {
            font-size: 1.8rem;
        }
        ${InfoLabel} {
            font-size: 1.5rem;
        }
        ${InfoValue} {
            font-size: 1.6rem;
        }
        ${SubSectionTitle} {
            font-size: 1.8rem;
        }
        ${PolicyButton} {
            font-size: 1.6rem;
        }
        ${LogoutButton} {
            height: 5rem;
            font-size: 1.7rem;
        }
    }
`;

const MyPage = () => {
    const navigate = useNavigate();
    const { info } = useInfoStore();

    const handleLogout = () => {
        navigate('/');
    };

    // 연소득 범위 표시 함수
    const getIncomeRange = () => {
        if (info.min_income && info.max_income) {
            return `연 ${info.min_income}만원 이상 ~ ${info.max_income}만원 이하`;
        } else if (info.min_income) {
            return `연 ${info.min_income}만원 이상`;
        } else if (info.max_income) {
            return `연 ${info.max_income}만원 이하`;
        }
        return '입력되지 않음';
    };

    // 전공 분야 표시 함수
    const getMajorDisplay = () => {
        if (info.major && info.major.length > 0) {
            if (info.major.includes('제한 없음')) {
                return '제한 없음';
            }
            return info.major.join(', ');
        }
        return '입력되지 않음';
    };

    // 특화 분야 표시 함수
    const getSpecialDisplay = () => {
        if (info.special && info.special.length > 0) {
            if (info.special.includes('제한 없음')) {
                return '제한 없음';
            }
            return info.special.join(', ');
        }
        return '입력되지 않음';
    };

    return (
        <PageContainer>
            <HeaderSection>
                <Greeting>
                    김자립님,
                    <br />
                    오늘도 힘찬 하루 보내세요! 💪
                </Greeting>
            </HeaderSection>

            <Section>
                <ProfileTitle>내 맞춤 프로필</ProfileTitle>
                <ProfileDesc>
                    아래 정보를 기준으로 정책을 추천해 드렸어요.
                    <br />
                    <BoldText>"AI맞춤 정책 다시 탐색하기"</BoldText>로 업데이트 할 수 있어요!
                </ProfileDesc>

                <ProfileCard>
                    <InfoGrid>
                        <InfoItem>
                            <InfoLabel>관심 지역</InfoLabel>
                            <InfoValue>{info.region || '입력되지 않음'}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>연령</InfoLabel>
                            <InfoValue>{info.age ? `만 ${info.age}세` : '입력되지 않음'}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>혼인여부</InfoLabel>
                            <InfoValue>{info.marry || '입력되지 않음'}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>연소득</InfoLabel>
                            <InfoValue>{getIncomeRange()}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>학력</InfoLabel>
                            <InfoValue>{info.graduate || '입력되지 않음'}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>취업 상태</InfoLabel>
                            <InfoValue>{info.employment || '입력되지 않음'}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>전공 분야</InfoLabel>
                            <InfoValue>{getMajorDisplay()}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>특화 분야</InfoLabel>
                            <InfoValue>{getSpecialDisplay()}</InfoValue>
                        </InfoItem>
                    </InfoGrid>
                </ProfileCard>

                <SubSectionTitle>나의 정책 관리</SubSectionTitle>
                <PolicyButton onClick={() => navigate('/favorites')}>관심 정책 목록</PolicyButton>

                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                <LargeUp />
            </Section>
        </PageContainer>
    );
};

export default MyPage;
