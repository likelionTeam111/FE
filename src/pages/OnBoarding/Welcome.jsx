import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// 애니메이션 정의
const wave = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
`;

// 컨테이너
const WelcomeContainer = styled.div`
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
    width: 20%;
    height: 100%;
    background-color: var(--mainBlue);
    border-radius: 2px;
    transition: width 0.3s ease;
`;

// 메인 콘텐츠
const WelcomeContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 0;
`;

// 이모지
const WelcomeEmoji = styled.div`
    font-size: 64px;
    margin-bottom: 24px;
    animation: ${wave} 2s ease-in-out infinite;
`;

// 환영 제목
const WelcomeTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 16px;
    line-height: 1.4;
`;

// 설명 텍스트
const WelcomeDescription = styled.p`
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    max-width: 280px;
    margin: 0 auto;
`;

// 버튼 컨테이너
const WelcomeButtonContainer = styled.div`
    padding: 20px 0 40px 0;
`;

// 시작 버튼
const WelcomeButton = styled.button`
    width: 100%;
    height: 56px;
    background-color: var(--mainBlue);
    color: var(--white);
    border: none;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 20px;

    &:hover {
        background-color: #1478e0;
        transform: translateY(-2px);
    }

    @media (max-width: 375px) {
        height: 52px;
        font-size: 17px;
    }
`;

const Welcome = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        // 다음 온보딩 페이지로 이동
        navigate('/onboarding/profile-info');
    };

    return (
        <WelcomeContainer>
            {/* 진행률 표시줄 */}
            <ProgressBar>
                <ProgressFill />
            </ProgressBar>

            {/* 메인 콘텐츠 */}
            <WelcomeContent>
                {/* 이모지 */}
                <WelcomeEmoji>👋</WelcomeEmoji>

                {/* 환영 메시지 */}
                <WelcomeTitle>안녕하세요, 만나서 반가워요!</WelcomeTitle>

                {/* 설명 텍스트 */}
                <WelcomeDescription>간단한 정보 입력으로 나에게 딱 맞는 서비스를 추천해 드릴게요.</WelcomeDescription>
            </WelcomeContent>

            {/* 시작 버튼 */}
            <WelcomeButtonContainer>
                <WelcomeButton onClick={handleStart}>네, 시작할게요!</WelcomeButton>
            </WelcomeButtonContainer>
        </WelcomeContainer>
    );
};

export default Welcome;
