import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useInfoStore } from '../../store/useInfoStore';

// api
import { enroll, enrollPatch, myPage } from '../../apis/api/profile';

const ExtraContainer = styled.div`
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
    width: 83.33%;
    height: 100%;
    background-color: var(--mainBlue);
    border-radius: 2px;
    transition: width 0.3s ease;
`;

// 메인 콘텐츠
const ExtraContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    justify-content: center;
`;

// 제목
const ExtraTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 32px;
    line-height: 1.4;
    text-align: center;
`;

// 예시 텍스트 컨테이너
const ExampleContainer = styled.div`
    margin-bottom: 40px;
`;

const ExampleText = styled.p`
    font-size: 14px;
    color: #666;
    line-height: 1;
    text-align: center;
    margin-bottom: 8px;
`;

// 입력 필드
const InputField = styled.textarea`
    width: 100%;
    min-height: 10px;
    padding: 2px;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    font-size: 16px;
    font-family: inherit;
    text-align: center;
    background-color: var(--white);
    resize: none;
    transition: border-color 0.2s ease;
    margin-bottom: 40px;

    &:focus {
        outline: none;
        border-color: var(--mainBlue);
    }

    &::placeholder {
        color: #999;
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

const ExtraInfo = () => {
    const navigate = useNavigate();
    const { setInfo, info } = useInfoStore();

    const handlePrevious = () => {
        navigate('/onboarding/occupation-info');
    };

    const handleSkip = () => {
        navigate('/onboarding/final');
    };

    const handleNext = async () => {
        navigate('/onboarding/final');
        const data = await myPage();
        if (data.id === undefined) {
            await enroll(info);
        } else {
            await enrollPatch(info);
        }
    };

    return (
        <ExtraContainer>
            {/* 진행률 표시줄 */}
            <ProgressBar>
                <ProgressFill />
            </ProgressBar>

            {/* 메인 콘텐츠 */}
            <ExtraContent>
                {/* 제목 */}
                <ExtraTitle>
                    마지막으로,
                    <br />
                    정책 매칭 시 반영되었으면 하는
                    <br />
                    나의 관심사를 적어주세요.
                </ExtraTitle>

                {/* 예시 텍스트 */}
                <ExampleContainer>
                    <ExampleText>AI가 정책 추천 시</ExampleText>
                    <ExampleText>꼭 반영할 수 있도록 해드릴게요.</ExampleText>
                    <ExampleText>ex. 곧 이사/독립할 예정이에요</ExampleText>
                    <ExampleText>프리랜서라 소득이 불규칙해요</ExampleText>
                </ExampleContainer>

                {/* 입력 필드 */}
                <InputField
                    placeholder="직접 입력해주세요."
                    value={info.goal || ''}
                    onChange={(e) => setInfo('goal', e.target.value)}
                />
            </ExtraContent>

            {/* 하단 네비게이션 */}
            <NavigationContainer>
                <NavigationButton onClick={handlePrevious}>&lt; 이전단계</NavigationButton>
                <NavigationButton onClick={handleSkip}>건너뛰기 &gt;</NavigationButton>
            </NavigationContainer>

            {/* 다음 버튼 */}
            <NextButton onClick={handleNext}>다음</NextButton>
        </ExtraContainer>
    );
};

export default ExtraInfo;
