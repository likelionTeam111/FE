import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--white);
  padding: 0 20px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f0f0f0;
  margin-top: 20px;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--mainBlue);
  border-radius: 2px;
  transition: width 0.3s ease;
`;

const FinalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 0;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 40px;
  line-height: 1.4;
  animation: ${fadeIn} 0.8s ease-out;
  animation-delay: 0s;
`;

const LoadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const LoadingText = styled.p`
  font-size: 16px;
  color: ${(props) => (props.$isActive ? '#333' : '#999')};
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  line-height: 1.5;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  animation: ${(props) => (props.$isVisible ? fadeIn : 'none')} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.$delay}s;
  transition: color 0.3s ease, font-weight 0.3s ease;
`;

const CompletionMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--mainBlue);
  margin-top: 20px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 9s;
`;

const Final = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

<<<<<<< Updated upstream
  useEffect(() => {
    // 메인 제목이 먼저 나타나고, 그 다음에 로딩 텍스트들이 순차적으로 나타남
    const mainTitleTimer = setTimeout(() => {
      // 1초 후에 첫 번째 로딩 텍스트 시작
      const stepTimers = [];

      for (let i = 0; i < 4; i++) {
        const timer = setTimeout(() => {
          setCurrentStep(i);
        }, (i + 1) * 2000); // 2초, 4초, 6초, 8초 후에 각각 나타남
        stepTimers.push(timer);
      }

      // 10초 후에 로딩 완료 및 메인 페이지로 이동
      const completionTimer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          navigate('/main');
        }, 1500); // 완료 메시지 표시 후 1.5초 뒤 이동
      }, 10000);

      return () => {
        stepTimers.forEach((timer) => clearTimeout(timer));
        clearTimeout(completionTimer);
      };
    }, 2000); // 메인 제목이 2초 동안 먼저 표시됨
=======
    useEffect(() => {
        const mainTitleTimer = setTimeout(() => {
            const stepTimers = [];

            for (let i = 0; i < 4; i++) {
                const timer = setTimeout(() => {
                    setCurrentStep(i);
                }, (i + 1) * 2000); 
                stepTimers.push(timer);
            }

            const completionTimer = setTimeout(() => {
                setIsLoading(false);
                setTimeout(() => {
                    navigate('/main');
                }, 1500); 
            }, 10000);

            return () => {
                stepTimers.forEach((timer) => clearTimeout(timer));
                clearTimeout(completionTimer);
            };
        }, 2000); 
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

    return () => clearTimeout(mainTitleTimer);
  }, [navigate]);

  const loadingSteps = [
    '김자립님의 정보를 확인하고 있어요.',
    '서울시에서 지원하는 청년 정책을 찾고 있어요.',
    '학생 신분으로 신청할 수 있는 혜택을 모으는 중..',
    '가장 좋은 정책들을 선별하고 있어요.. 잠시만요!',
  ];

<<<<<<< Updated upstream
  return (
    <FinalContainer>
      {/* 진행률 표시줄 */}
      <ProgressBar>
        <ProgressFill />
      </ProgressBar>

      {/* 메인 콘텐츠 */}
      <FinalContent>
        {/* 메인 제목 */}
        <MainTitle>김자립님을 위한 정책 탐색 중!</MainTitle>

        {/* 로딩 텍스트들 */}
        <LoadingTextContainer>
          {loadingSteps.map((text, index) => (
            <LoadingText key={index} $delay={0} $isVisible={index <= currentStep} $isActive={index === currentStep}>
              {text}
            </LoadingText>
          ))}
        </LoadingTextContainer>

        {/* 로딩 완료 메시지 */}
        {!isLoading && <CompletionMessage>정책 탐색 완료! 🎉</CompletionMessage>}
      </FinalContent>
    </FinalContainer>
  );
=======
    return (
        <FinalContainer>

            <ProgressBar>
                <ProgressFill />
            </ProgressBar>

            <FinalContent>
                <MainTitle>김자립님을 위한 정책 탐색 중!</MainTitle>

                <LoadingTextContainer>
                    {loadingSteps.map((text, index) => (
                        <LoadingText
                            key={index}
                            delay={0}
                            isVisible={index <= currentStep}
                            isActive={index === currentStep}
                        >
                            {text}
                        </LoadingText>
                    ))}
                </LoadingTextContainer>


                {!isLoading && <CompletionMessage>정책 탐색 완료! 🎉</CompletionMessage>}
            </FinalContent>
        </FinalContainer>
    );
>>>>>>> Stashed changes
};

export default Final;
