import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.main`
    background-color: var(--mainSky);
    min-height: 100vh;
    padding: 2rem 1.5rem 6rem;
`;

const Section = styled.section`
    max-width: 40rem;
    margin: 0 auto;
`;

const ServiceLabel = styled.h1`
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--mainBlue);
`;

const Greeting = styled.p`
    font-size: 1.4rem;
    color: var(--black);
    margin-top: 1rem;
    line-height: 1.6;
`;

const Card = styled.div`
    margin-top: 1.6rem;
    background: var(--white);
    border-radius: 1.2rem;
    padding: 1.4rem;
    box-shadow: 0 0.6rem 1.6rem rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h3`
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
`;

const CardDesc = styled.p`
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0.6rem;
    line-height: 1.5;
`;

const ProfilePanel = styled.div`
    margin-top: 1.2rem;
    background: var(--mainBlue);
    color: var(--white);
    border-radius: 1rem;
    padding: 1.2rem;
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem 1rem;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoLabel = styled.span`
    font-size: 1rem;
    opacity: 0.9;
`;

const InfoValue = styled.span`
    font-size: 1.1rem;
    font-weight: 700;
`;

const SubSectionTitle = styled.h4`
    margin-top: 1.6rem;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
`;

const LinkText = styled.p`
    margin-top: 0.6rem;
    font-size: 1.1rem;
    color: var(--black);
`;

const LogoutButton = styled.button`
    width: 100%;
    margin-top: 1.6rem;
    height: 3rem;
    border-radius: 1rem;
    background: var(--white);
    color: #ff4d4f;
    border: 2px solid #ffb3b3;
    font-size: 1.2rem;
    font-weight: 700;
`;

/* 큰 화면에서는 살짝 키워주기 */
const LargeUp = styled.div`
    @media (min-width: 480px) {
<<<<<<< Updated upstream
        ${PageContainer} {
            padding: 3rem 2rem 6rem;
        }
        ${Greeting} {
            font-size: 1.6rem;
        }
        ${Card} {
            padding: 1.8rem;
        }
        ${CardTitle} {
            font-size: 1.2rem;
        }
        ${CardDesc} {
            font-size: 1.2rem;
        }
        ${InfoLabel} {
            font-size: 1.1rem;
        }
        ${InfoValue} {
            font-size: 1.2rem;
        }
        ${SubSectionTitle} {
            font-size: 1.2rem;
        }
        ${LinkText} {
            font-size: 1.2rem;
        }
        ${LogoutButton} {
            height: 3.5rem;
            font-size: 1.3rem;
        }
=======
        ${PageContainer} { padding: 3rem 2rem 6rem; }
        ${Greeting} { font-size: 1.6rem; }
        ${Card} { padding: 1.8rem; }
        ${CardTitle} { font-size: 1.2rem; }
        ${CardDesc} { font-size: 1.2rem; }
        ${InfoLabel} { font-size: 1.1rem; }
        ${InfoValue} { font-size: 1.2rem; }
        ${SubSectionTitle} { font-size: 1.2rem; }
        ${LinkText} { font-size: 1.2rem; }
        ${LogoutButton} { height: 3.5rem; font-size: 1.3rem; }
>>>>>>> Stashed changes
    }
`;

const MyPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <PageContainer>
            <Section>
                <Greeting>
                    김자립님,
                    <br />
                    오늘도 힘찬 하루 보내세요! 💪
                </Greeting>

                <Card>
                    <CardTitle>내 맞춤 프로필</CardTitle>
                    <CardDesc>
                        아래 정보를 기준으로 정책을 추천해 드렸어요.
                        <br />
                        AI맞춤 정책 다시 탐색하기로 업데이트 할 수 있어요!
                    </CardDesc>

                    <ProfilePanel>
                        <InfoGrid>
                            <InfoItem>
                                <InfoLabel>관심 지역</InfoLabel>
                                <InfoValue>서울특별시</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>연령</InfoLabel>
                                <InfoValue>만 24세</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>혼인여부</InfoLabel>
                                <InfoValue>미혼</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>연소득</InfoLabel>
                                <InfoValue>연 100만원 이상 ~ 300만원 이하</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>학력</InfoLabel>
                                <InfoValue>대학 재학</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>취업 상태</InfoLabel>
                                <InfoValue>제한 없음</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>전공 분야</InfoLabel>
                                <InfoValue>인문, 상경 계열</InfoValue>
                            </InfoItem>
                            <InfoItem>
                                <InfoLabel>특화 분야</InfoLabel>
                                <InfoValue>제한 없음</InfoValue>
                            </InfoItem>
                        </InfoGrid>
                    </ProfilePanel>

                    <SubSectionTitle>나의 정책 관리</SubSectionTitle>
                    <LinkText>관심 정책 목록</LinkText>
                </Card>

                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                <LargeUp />
            </Section>
        </PageContainer>
    );
};

export default MyPage;
