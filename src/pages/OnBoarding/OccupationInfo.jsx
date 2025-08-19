import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OccupationContainer = styled.div`
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
    width: 66.67%;
    height: 100%;
    background-color: var(--mainBlue);
    border-radius: 2px;
    transition: width 0.3s ease;
`;

const OccupationContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    overflow-y: auto;
    justify-content: flex-start;
`;

const OccupationTitle = styled.h1`
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

const SectionTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: var(--mainBlue);
`;

const MultiSelectText = styled.span`
    font-size: 12px;
    color: #666;
`;

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

const OccupationInfo = () => {
    const navigate = useNavigate();
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [majorFields, setMajorFields] = useState([]);
    const [specializedFields, setSpecializedFields] = useState([]);

    const handlePrevious = () => {
        navigate('/onboarding/socio-economic-info');
    };

    const handleSkip = () => {
        navigate('/onboarding/extra-info');
    };

    const handleNext = () => {
        navigate('/onboarding/extra-info');
    };

    const handleEmploymentStatus = (status) => {
        setEmploymentStatus(status);
    };

    const handleMajorField = (field) => {
        if (field === '제한 없음') {
            setMajorFields(['제한 없음']);
        } else {
            setMajorFields((prev) => {
                if (prev.includes('제한 없음')) {
                    return [field];
                }
                if (prev.includes(field)) {
                    return prev.filter((f) => f !== field);
                }
                return [...prev, field];
            });
        }
    };

    const handleSpecializedField = (field) => {
        if (field === '제한 없음') {
            setSpecializedFields(['제한 없음']);
        } else {
            setSpecializedFields((prev) => {
                if (prev.includes('제한 없음')) {
                    return [field];
                }
                if (prev.includes(field)) {
                    return prev.filter((f) => f !== field);
                }
                return [...prev, field];
            });
        }
    };

    const isFormValid = employmentStatus && majorFields.length > 0 && specializedFields.length > 0;

    const employmentOptions = [
        '제한 없음',
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
        '제한 없음',
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
        '제한 없음',
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

            <ProgressBar>
                <ProgressFill />
            </ProgressBar>


            <OccupationContent>

                <OccupationTitle>AI가 숨겨진 지원금까지 찾아낼 수 있도록, 검색 범위를 좁혀주세요.</OccupationTitle>

                <SectionContainer>
                    <SectionTitle>취업상태</SectionTitle>
                    <ButtonGrid>
                        {employmentOptions.map((option, index) => (
                            <OptionButton
                                key={index}
                                selected={employmentStatus === option}
                                onClick={() => handleEmploymentStatus(option)}
                            >
                                {option}
                            </OptionButton>
                        ))}
                    </ButtonGrid>
                </SectionContainer>


                <SectionContainer>
                    <SectionTitleContainer>
                        <SectionTitle>전공 분야</SectionTitle>
                        <MultiSelectText>* 중복선택 가능</MultiSelectText>
                    </SectionTitleContainer>
                    <ButtonGrid>
                        {majorOptions.map((option, index) => (
                            <OptionButton
                                key={index}
                                selected={majorFields.includes(option)}
                                onClick={() => handleMajorField(option)}
                            >
                                {option}
                            </OptionButton>
                        ))}
                    </ButtonGrid>
                </SectionContainer>

                <SectionContainer>
                    <SectionTitleContainer>
                        <SectionTitle>특화 분야</SectionTitle>
                        <MultiSelectText>* 중복선택 가능</MultiSelectText>
                    </SectionTitleContainer>
                    <ButtonGrid>
                        {specializedOptions.map((option, index) => (
                            <OptionButton
                                key={index}
                                selected={specializedFields.includes(option)}
                                onClick={() => handleSpecializedField(option)}
                            >
                                {option}
                            </OptionButton>
                        ))}
                    </ButtonGrid>
                </SectionContainer>
            </OccupationContent>


            <NavigationContainer>
                <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
                <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
            </NavigationContainer>

            <NextButton onClick={handleNext} disabled={!isFormValid}>
                다음
            </NextButton>
        </OccupationContainer>
    );
};

export default OccupationInfo;
