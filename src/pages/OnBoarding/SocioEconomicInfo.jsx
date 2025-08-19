import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const SocioContainer = styled.div`
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
    width: 50%;
    height: 100%;
    background-color: var(--mainBlue);
    border-radius: 2px;
    transition: width 0.3s ease;
`;


const SocioContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    justify-content: center;
`;


const SocioTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 48px;
    line-height: 1.4;
    text-align: center;
`;


const SectionContainer = styled.div`
    margin-bottom: 40px;
`;


const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: var(--mainBlue);
    margin-bottom: 16px;
`;


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

    &:nth-last-child(-n + 2) {
        grid-column: span 1;
    }
`;


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
    const [minIncome, setMinIncome] = useState('');
    const [maxIncome, setMaxIncome] = useState('');
    const [education, setEducation] = useState('');

    const handlePrevious = () => {
        navigate('/onboarding/profile-info');
    };

    const handleSkip = () => {
        navigate('/onboarding/occupation-info');
    };

    const handleNext = () => {
        navigate('/onboarding/occupation-info');
    };

    const isFormValid = minIncome && maxIncome && education;

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
  
            <ProgressBar>
                <ProgressFill />
            </ProgressBar>

 
            <SocioContent>

                <SocioTitle>김자립님께 맞춤 추천을 드리기 위해 몇 가지 정보가 더 필요해요!</SocioTitle>


                <SectionContainer>
                    <SectionTitle>연소득</SectionTitle>
                    <IncomeContainer>
                        <IncomeText>연</IncomeText>
                        <IncomeInput
                            type="number"
                            placeholder="최소 금액"
                            value={minIncome}
                            onChange={(e) => setMinIncome(e.target.value)}
                            min="0"
                        />
                        <IncomeText>만원 이상~</IncomeText>
                    </IncomeContainer>
                    <IncomeContainer>
                        <IncomeText>연</IncomeText>
                        <IncomeInput
                            type="number"
                            placeholder="최대 금액"
                            value={maxIncome}
                            onChange={(e) => setMaxIncome(e.target.value)}
                            min="0"
                        />
                        <IncomeText>만원 이하</IncomeText>
                    </IncomeContainer>
                </SectionContainer>

                <SectionContainer>
                    <SectionTitle>학력</SectionTitle>
                    <EducationGrid>
                        {educationOptions.map((option, index) => (
                            <EducationButton
                                key={index}
                                selected={education === option}
                                onClick={() => setEducation(option)}
                            >
                                {option}
                            </EducationButton>
                        ))}
                    </EducationGrid>
                </SectionContainer>
            </SocioContent>


            <NavigationContainer>
                <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
                <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
            </NavigationContainer>


            <NextButton onClick={handleNext} disabled={!isFormValid}>
                다음
            </NextButton>
        </SocioContainer>
    );
};

export default SocioEconomicInfo;
