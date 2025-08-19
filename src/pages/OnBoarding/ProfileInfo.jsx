import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
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
    width: 33.33%;
    height: 100%;
    background-color: var(--mainBlue);
    border-radius: 2px;
    transition: width 0.3s ease;
`;

const ProfileContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    justify-content: center;
`;

const ProfileTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 48px;
    line-height: 1.4;
    text-align: center;
`;

const InputContainer = styled.div`
    margin-bottom: 40px;
`;

const InputLabel = styled.label`
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 16px;
`;

const Dropdown = styled.select`
    width: 100%;
    height: 56px;
    padding: 0 16px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    font-size: 16px;
    background-color: var(--white);
    cursor: pointer;
    transition: border-color 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 16px;

    &:focus {
        outline: none;
        border-color: var(--mainBlue);
    }
`;

const AgeInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 56px;
    padding: 0 16px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    background-color: var(--white);
    transition: border-color 0.2s ease;

    &:focus-within {
        border-color: var(--mainBlue);
    }
`;

const AgeInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    background: transparent;

    &::placeholder {
        color: #999;
    }
`;

const AgeText = styled.span`
    font-size: 16px;
    color: var(--black);
    white-space: nowrap;
`;

const MaritalButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 20px;
`;

const MaritalButton = styled.button`
    flex: 1;
    height: 48px;
    border: 2px solid ${(props) => (props.selected ? 'var(--mainBlue)' : '#e0e0e0')};
    border-radius: 12px;
    background-color: ${(props) => (props.selected ? 'var(--mainBlue)' : 'var(--white)')};
    color: ${(props) => (props.selected ? 'var(--white)' : 'var(--black)')};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

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

const ProfileInfo = () => {
    const navigate = useNavigate();
    const [area, setArea] = useState('');
    const [age, setAge] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    const handlePrevious = () => {
        navigate('/');
    };

    const handleSkip = () => {
        navigate('/onboarding/socio-economic-info');
    };

    const handleNext = () => {
        navigate('/onboarding/socio-economic-info');
    };

    const isFormValid = area && age && maritalStatus;

    return (
        <ProfileContainer>
            <ProgressBar>
                <ProgressFill />
            </ProgressBar>

            <ProfileContent>
                <ProfileTitle>김자립님을 위한 ai 맞춤 정책을 추천해드릴게요</ProfileTitle>

                <InputContainer>
                    <InputLabel>관심지역</InputLabel>
                    <Dropdown value={area} onChange={(e) => setArea(e.target.value)}>
                        <option value="">지역을 선택하세요</option>
                        <option value="seoul">서울특별시</option>
                        <option value="gyeonggi">경기도</option>
                        <option value="busan">부산광역시</option>
                        <option value="daegu">대구광역시</option>
                        <option value="incheon">인천광역시</option>
                        <option value="gwangju">광주광역시</option>
                        <option value="daejeon">대전광역시</option>
                        <option value="ulsan">울산광역시</option>
                        <option value="sejong">세종특별자치도</option>
                        <option value="chungbuk">충청북도</option>
                        <option value="chungnam">충청남도</option>
                        <option value="jeonnam">전라남도</option>
                        <option value="gyeongbuk">경상북도</option>
                        <option value="gyeongnam">경상남도</option>
                        <option value="gangwon">강원특별자치도</option>
                        <option value="jeonbuk">전북특별자치도</option>
                        <option value="jeju">제주특별자치도</option>
                    </Dropdown>
                </InputContainer>

                <InputContainer>
                    <InputLabel>연령</InputLabel>
                    <AgeInputContainer>
                        <AgeText>만</AgeText>
                        <AgeInput
                            type="number"
                            placeholder="나이를 입력하세요"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            min="1"
                            max="120"
                        />
                        <AgeText>세</AgeText>
                    </AgeInputContainer>
                </InputContainer>

                <InputContainer>
                    <InputLabel>혼인여부</InputLabel>
                    <MaritalButtonContainer>
                        <MaritalButton selected={maritalStatus === 'single'} onClick={() => setMaritalStatus('single')}>
                            미혼
                        </MaritalButton>
                        <MaritalButton
                            selected={maritalStatus === 'married'}
                            onClick={() => setMaritalStatus('married')}
                        >
                            기혼
                        </MaritalButton>
                        <MaritalButton selected={maritalStatus === 'other'} onClick={() => setMaritalStatus('other')}>
                            기타
                        </MaritalButton>
                    </MaritalButtonContainer>
                </InputContainer>
            </ProfileContent>

            <NavigationContainer>
                <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
                <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
            </NavigationContainer>

            <NextButton onClick={handleNext} disabled={!isFormValid}>
                다음
            </NextButton>
        </ProfileContainer>
    );
};

export default ProfileInfo;
