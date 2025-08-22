import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useInfoStore } from '../../store/useInfoStore';

// 컨테이너
const SocioContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--white);
  padding: 0 20px;
`;

// 진행률 표시줄
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f0f0f0;
  margin-top: 20px;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--mainBlue);
  border-radius: 2px;
  transition: width 0.3s ease;
`;

// 메인 콘텐츠
const SocioContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  justify-content: center;
`;

// 제목
const SocioTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 48px;
  line-height: 1.4;
  text-align: center;
`;

// 섹션 컨테이너
const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

// 섹션 제목
const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--mainBlue);
  margin-bottom: 16px;
`;

// 연소득 입력 컨테이너
const IncomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const IncomeInput = styled.input`
  flex: 1;
  height: 56px;
  padding: 0 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background-color: var(--white);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--mainBlue);
  }

  &::placeholder {
    color: #999;
  }
`;

const IncomeText = styled.span`
  font-size: 16px;
  color: var(--black);
  white-space: nowrap;
`;

// 학력 버튼 그리드
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
`;

const EducationButton = styled.button`
  height: 48px;
  border: 2px solid ${(props) => (props.selected ? 'var(--mainBlue)' : '#e0e0e0')};
  border-radius: 12px;
  background-color: ${(props) => (props.selected ? 'var(--mainBlue)' : 'var(--white)')};
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--black)')};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 12px;

  &:hover {
    border-color: var(--mainBlue);
    background-color: ${(props) => (props.selected ? 'var(--mainBlue)' : '#f8f9ff')};
  }

  /* 마지막 두 버튼은 한 줄에 하나씩 */
  &:nth-last-child(-n + 2) {
    grid-column: span 1;
  }
`;

// 하단 네비게이션
const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.2s ease;

  &:hover {
    color: var(--mainBlue);
  }
`;

// 다음 버튼
const NextButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${(props) => (props.disabled ? '#e0e0e0' : 'var(--mainBlue)')};
  color: var(--white);
  border: none;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#e0e0e0' : '#1478e0')};
    transform: ${(props) => (props.disabled ? 'none' : 'translateY(-2px)')};
  }

  @media (max-width: 375px) {
    height: 52px;
    font-size: 17px;
  }
`;

const SocioEconomicInfo = () => {
  const navigate = useNavigate();

  const { setInfo, info } = useInfoStore();

  const handlePrevious = () => {
    navigate('/onboarding/profile-info');
  };

  const handleSkip = () => {
    navigate('/onboarding/occupation-info');
  };

  const handleNext = () => {
    navigate('/onboarding/occupation-info');
  };
  // 내 정보 저장
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(name, value);
  };

  const educationOptions = [
    '제한없음',
    '고졸 미만',
    '고교 재학',
    '고졸 예정',
    '고교 졸업',
    '대학 재학',
    '대졸 예정',
    '대학 졸업',
    '석. 박사',
    '기타',
  ];

  return (
    <SocioContainer>
      {/* 진행률 표시줄 */}
      <ProgressBar>
        <ProgressFill />
      </ProgressBar>

      {/* 메인 콘텐츠 */}
      <SocioContent>
        {/* 제목 */}
        <SocioTitle>김자립님께 맞춤 추천을 드리기 위해 몇 가지 정보가 더 필요해요!</SocioTitle>

        {/* 연소득 섹션 */}
        <SectionContainer>
          <SectionTitle>연소득</SectionTitle>
          <IncomeContainer>
            <IncomeText>연</IncomeText>
            <IncomeInput type="number" name="min_income" placeholder="최소 금액" onChange={handleChange} min="0" />
            <IncomeText>만원 이상~</IncomeText>
          </IncomeContainer>
          <IncomeContainer>
            <IncomeText>연</IncomeText>
            <IncomeInput type="number" name="max_income" placeholder="최대 금액" onChange={handleChange} min="0" />
            <IncomeText>만원 이하</IncomeText>
          </IncomeContainer>
        </SectionContainer>

        {/* 학력 섹션 */}
        <SectionContainer>
          <SectionTitle>학력</SectionTitle>
          <EducationGrid>
            {educationOptions.map((option, index) => (
              <EducationButton
                key={index}
                selected={info.graduate === option}
                onClick={() => setInfo('graduate', option)}>
                {option}
              </EducationButton>
            ))}
          </EducationGrid>
        </SectionContainer>
      </SocioContent>

      {/* 하단 네비게이션 */}
      <NavigationContainer>
        <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
        <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
      </NavigationContainer>

      {/* 다음 버튼 */}
      <NextButton onClick={handleNext}>다음</NextButton>
    </SocioContainer>
  );
};

export default SocioEconomicInfo;
