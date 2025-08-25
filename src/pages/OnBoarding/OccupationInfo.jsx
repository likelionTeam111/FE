import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useInfoStore } from '../../store/useInfoStore';

// 컨테이너
const OccupationContainer = styled.div`
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
  width: 66.67%;
  height: 100%;
  background-color: var(--mainBlue);
  border-radius: 2px;
  transition: width 0.3s ease;
`;

// 메인 콘텐츠
const OccupationContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  overflow-y: auto;
  justify-content: flex-start;
`;

// 제목
const OccupationTitle = styled.h1`
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

// 섹션 제목 컨테이너
const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

// 섹션 제목
const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: var(--mainBlue);
`;

// 중복선택 안내 텍스트
const MultiSelectText = styled.span`
  font-size: 12px;
  color: #666;
`;

// 버튼 그리드
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const OptionButton = styled.button`
  height: 48px;
  border: 2px solid ${(props) => (props.selected ? 'var(--mainBlue)' : '#e0e0e0')};
  border-radius: 12px;
  background-color: ${(props) => (props.selected ? 'var(--mainBlue)' : 'var(--white)')};
  color: ${(props) => (props.selected ? 'var(--white)' : 'var(--black)')};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 8px;

  &:hover {
    border-color: var(--mainBlue);
    background-color: ${(props) => (props.selected ? 'var(--mainBlue)' : '#f8f9ff')};
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

const OccupationInfo = () => {
  const navigate = useNavigate();

  const { setInfo, info } = useInfoStore();

  const handlePrevious = () => {
    navigate('/onboarding/socio-economic-info');
  };

  const handleSkip = () => {
    navigate('/onboarding/extra-info');
  };

  const handleNext = () => {
    navigate('/onboarding/extra-info');
  };

  // 전공 분야 선택 (다중 선택)
  const handleMajorField = (field) => {
    if (field === '제한없음') {
      setInfo('major', ['제한없음']);
      return;
    }
    if (info.major.includes('제한없음')) {
      setInfo('major', [field]);
      return;
    }
    if (info.major.includes(field)) {
      const deleteInfo = info.major.filter((f) => f !== field);
      setInfo('major', deleteInfo);
      return;
    }
    setInfo('major', [...info.major, field]);
    return;
  };

  // 특화 분야 선택 (다중 선택)
  const handleSpecializedField = (field) => {
    if (field === '제한없음') {
      setInfo('special', ['제한없음']);
      return;
    }
    if (info.special.includes('제한없음')) {
      setInfo('special', [field]);
      return;
    }
    if (info.special.includes(field)) {
      const deleteInfo = info.special.filter((f) => f !== field);
      setInfo('special', deleteInfo);
      return;
    }
    setInfo('special', [...info.special, field]);
    return;
  };

  const employmentOptions = [
    '제한없음',
    '재직자',
    '자영업자',
    '미취업자',
    '프리랜서',
    '일용근로자',
    '(예비)창업자',
    '단기근로자',
    '영농종사자',
    '기타',
  ];

  const majorOptions = [
    '제한없음',
    '인문계열',
    '사회계열',
    '상경계열',
    '이학계열',
    '공학계열',
    '예체능계열',
    '농산업계열',
    '기타',
  ];

  const specializedOptions = [
    '제한없음',
    '중소기업',
    '여성',
    '기초생활수급자',
    '한부모가정',
    '장애인',
    '농업인',
    '군인',
    '지역인재',
    '기타',
  ];

  return (
    <OccupationContainer>
      {/* 진행률 표시줄 */}
      <ProgressBar>
        <ProgressFill />
      </ProgressBar>

      {/* 메인 콘텐츠 */}
      <OccupationContent>
        {/* 제목 */}
        <OccupationTitle>AI가 숨겨진 지원금까지 찾아낼 수 있도록, 검색 범위를 좁혀주세요.</OccupationTitle>

        {/* 취업상태 섹션 */}
        <SectionContainer>
          <SectionTitle>취업상태</SectionTitle>
          <ButtonGrid>
            {employmentOptions.map((option, index) => (
              <OptionButton
                key={index}
                selected={info.employment === option}
                onClick={() => setInfo('employment', option)}>
                {option}
              </OptionButton>
            ))}
          </ButtonGrid>
        </SectionContainer>

        {/* 전공 분야 섹션 */}
        <SectionContainer>
          <SectionTitleContainer>
            <SectionTitle>전공 분야</SectionTitle>
            <MultiSelectText>* 중복선택 가능</MultiSelectText>
          </SectionTitleContainer>
          <ButtonGrid>
            {majorOptions.map((option, index) => (
              <OptionButton key={index} selected={info.major.includes(option)} onClick={() => handleMajorField(option)}>
                {option}
              </OptionButton>
            ))}
          </ButtonGrid>
        </SectionContainer>

        {/* 특화 분야 섹션 */}
        <SectionContainer>
          <SectionTitleContainer>
            <SectionTitle>특화 분야</SectionTitle>
            <MultiSelectText>* 중복선택 가능</MultiSelectText>
          </SectionTitleContainer>
          <ButtonGrid>
            {specializedOptions.map((option, index) => (
              <OptionButton
                key={index}
                selected={info.special.includes(option)}
                onClick={() => handleSpecializedField(option)}>
                {option}
              </OptionButton>
            ))}
          </ButtonGrid>
        </SectionContainer>
      </OccupationContent>

      {/* 하단 네비게이션 */}
      <NavigationContainer>
        <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
        <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
      </NavigationContainer>

      {/* 다음 버튼 */}
      <NextButton onClick={handleNext}>다음</NextButton>
    </OccupationContainer>
  );
};

export default OccupationInfo;
