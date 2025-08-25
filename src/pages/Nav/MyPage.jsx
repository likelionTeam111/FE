import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useInfoStore } from '../../store/useInfoStore';
import { useAuthStore } from '../../store/useAuthStore';

const PageContainer = styled.main`
  height: calc(100vh - 12rem);
  box-sizing: border-box;
    display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Logo = styled.span`
  color: var(--mainBlue);
  font-weight: bold;
  font-size: 2.5rem;
  margin-left: 3rem;
  padding-top: 1rem;
`;

const Greeting = styled.p`
  font-size: 2rem;
  color: var(--black);
  margin: 0;
  line-height: 1.4;
  max-width: 75%;
margin-left:3rem;
  font-weight: 400;
`;



const Card = styled.div`
  background-color: var(--mainSky);
  flex:1;
  box-sizing: border-box;
  margin-top: 2rem;
  border-radius: 15px 15px 0 0;
  padding: 2rem;
  box-shadow: 0 0.6rem 1.6rem rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--grey);
  font-weight: 600;
  margin-bottom: 1rem;
    margin: 0 1rem;
`;

const CardDesc = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.75);
  margin-top: 0.8rem;
  line-height: 1.6;
    margin: 1rem;
  
  
`;

const ProfilePanel = styled.div`
  margin-top: 1.4rem;
  background: var(--mainBlue);
  color: var(--white);
  border-radius: 1.2rem;
  margin: 0 1rem;
  padding: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.8rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  font-size: 1.4rem;
  opacity: 0.95;
  color: var(--grey);
`;

const InfoValue = styled.span`
  font-size: 1.6rem;
`;

const SubSectionTitle = styled.h4`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
`;

const LinkText = styled.button`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: var(--white);
  background: var(--mainBlue);
  text-align: center;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  font-weight: 400;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LogoutButton = styled.button`
  width: 100%;
  margin-top: 3rem;
  height: 4rem;
  border-radius: 1.2rem;
  background: var(--white);
  color: #ff4d4f;
  border: 2px solid #ffb3b3;
  font-size: 1.6rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fff5f5;
    border-color: #ff8080;
  }
`;

/* 큰 화면에서는 조금 더 키움 */
const LargeUp = styled.div`
  @media (min-width: 480px) {
    ${PageContainer} {
      padding: 3rem 2.4rem 7rem;
    }
    ${Greeting} {
      font-size: 2.2rem;
    }
    ${Card} {
      padding: 2.5rem;
    }
    ${CardTitle} {
      font-size: 2rem;
    }
    ${CardDesc} {
      font-size: 1.8rem;
    }
    ${InfoLabel} {
      font-size: 1.6rem;
    }
    ${InfoValue} {
      font-size: 1.8rem;
    }
    ${SubSectionTitle} {
      font-size: 1.8rem;
    }
    ${LinkText} {
      font-size: 1.6rem;
    }
    ${LogoutButton} {
      height: 4.5rem;
      font-size: 1.8rem;
    }
  }
`;

const MyPage = () => {
  const navigate = useNavigate();
  const { info, resetInfo } = useInfoStore();
  const { nickname, clearLogout } = useAuthStore();

  const handleLogout = () => {
    clearLogout();
    resetInfo();
    navigate('/auth');
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
        <Logo>청년자립비서</Logo>
        <Greeting>
          {nickname}님,
          <br />
          오늘도 힘찬 하루 보내세요! 💪
        </Greeting>
      </HeaderSection>

      
        <Card>
          <CardTitle>내 맞춤 프로필</CardTitle>
          <CardDesc>
            아래 정보를 기준으로 정책을 추천해 드렸어요.
            <br />
            <strong> AI맞춤 정책 다시 탐색하기</strong>로 업데이트 할 수 있어요!
          </CardDesc>

          <ProfilePanel>
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
          </ProfilePanel>

          <SubSectionTitle>나의 정책 관리</SubSectionTitle>
          <LinkText onClick={() => navigate('/favorites')}>관심 정책 목록</LinkText>
                  <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>

        </Card>

        <LargeUp />
      
    </PageContainer>
  );
};

export default MyPage;
