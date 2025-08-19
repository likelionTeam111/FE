import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.main`
    background-color: var(--mainSky);
    min-height: 100vh;
    padding: 2.4rem 2rem 7rem;
`;

const Section = styled.section`
    max-width: 44rem;
    margin: 0 auto;
`;

const Greeting = styled.p`
    font-size: 1.6rem;
    color: var(--black);
    margin-top: 1.2rem;
    line-height: 1.7;
`;

const Card = styled.div`
    margin-top: 2rem;
    background: var(--white);
    border-radius: 1.4rem;
    padding: 1.8rem;
    box-shadow: 0 0.6rem 1.6rem rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h3`
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 800;
`;

const CardDesc = styled.p`
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.75);
    margin-top: 0.8rem;
    line-height: 1.6;
`;

const ProfilePanel = styled.div`
    margin-top: 1.4rem;
    background: var(--mainBlue);
    color: var(--white);
    border-radius: 1.2rem;
    padding: 1.6rem;
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem 1.4rem;
`;

const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoLabel = styled.span`
    font-size: 1.15rem;
    opacity: 0.95;
`;

const InfoValue = styled.span`
    font-size: 1.25rem;
    font-weight: 800;
`;

const SubSectionTitle = styled.h4`
    margin-top: 2rem;
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.6);
`;

const LinkText = styled.button`
    margin-top: 0.8rem;
    font-size: 1.2rem;
    color: var(--black);
    background: transparent;
    text-align: left;
    cursor: pointer;
`;

const LogoutButton = styled.button`
    width: 100%;
    margin-top: 2rem;
    height: 3.6rem;
    border-radius: 1.2rem;
    background: var(--white);
    color: #ff4d4f;
    border: 2px solid #ffb3b3;
    font-size: 1.35rem;
    font-weight: 800;
`;

/* 큰 화면에서는 조금 더 키움 */
const LargeUp = styled.div`
    @media (min-width: 480px) {
        ${PageContainer} {
            padding: 3rem 2.4rem 7rem;
        }
        ${Greeting} {
            font-size: 1.8rem;
        }
        ${Card} {
            padding: 2rem;
        }
        ${CardTitle} {
            font-size: 1.4rem;
        }
        ${CardDesc} {
            font-size: 1.35rem;
        }
        ${InfoLabel} {
            font-size: 1.2rem;
        }
        ${InfoValue} {
            font-size: 1.35rem;
        }
        ${SubSectionTitle} {
            font-size: 1.3rem;
        }
        ${LinkText} {
            font-size: 1.25rem;
        }
        ${LogoutButton} {
            height: 4rem;
            font-size: 1.4rem;
        }
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
                    <LinkText onClick={() => navigate('/favorites')}>관심 정책 목록</LinkText>
                </Card>

                <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                <LargeUp />
            </Section>
        </PageContainer>
    );
};

export default MyPage;
