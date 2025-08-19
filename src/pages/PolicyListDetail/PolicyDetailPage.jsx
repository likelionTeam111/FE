import styled from 'styled-components';
import likeImg from '../../assets/img/like.png';
import { useState } from 'react';

const Container = styled.div`
    height: calc(100vh - 14vh);
    display: flex;
    flex-direction: column;
`;
const TitleWrapper = styled.div`
    flex: 2;
    background-color: var(--mainBlue);
    border-radius: 0 0 20px 20px;

    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
`;
const TitleBox = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 5vw;
`;
const Title = styled.span`
    color: var(--white);
    font-size: 3rem;
    font-weight: bold;
    max-width: 15rem; // 줄바꿈되도록 최대 길이 설정
`;
const Description = styled.span`
    color: var(--white);
    font-size: 1.5rem;
    max-width: 40rem; // 줄바꿈되도록 최대 길이 설정
`;
const ButtonBox = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const LikeButton = styled.button`
    color: ${({ $like }) => ($like ? 'var(--white)' : ' var(--mainBlue)')};
    background-color: ${({ $like }) => ($like ? 'var(--mainBlue)' : 'var(--mainSky)')};
    width: 13rem;
    height: 3rem;
    border-radius: 20px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;
const LikeImg = styled.img`
    width: 2rem;
`;

const GoButton = styled.button`
    width: 13rem;
    height: 3rem;
    border-radius: 20px;
`;

const MainWrapper = styled.div`
    flex: 3;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
`;

const Box = styled.div`
    width: 70%;
    height: 12rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
const ToggleBox = styled.div`
    width: 70%;
    margin-bottom: 3rem;
`;

const DetailToggle = styled.button`
    height: 3rem;
    width: 100%;
    font-size: 1.5rem;
    color: var(--white);
    background-color: ${({ $isOpen }) => ($isOpen ? 'var(--grey)' : 'var(--mainBlue)')};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
`;
const Text = styled.span`
    padding-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--grey);
`;

const Tog = styled.span`
    font-size: 1rem;
`;
const Content = styled.div`
    font-size: 1.5rem;
    border: solid var(--grey);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    gap: 8rem;
    align-items: center;
`;

const PolicyDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [like, setLike] = useState(false);

    const handleToggleLike = () => {
        const next = !like;
        setLike(next);

        // 로컬스토리지에 관심정책 저장/삭제
        const saved = localStorage.getItem('favorite_policies');
        const list = saved ? JSON.parse(saved) : [];

        const current = { title: '청년 자격증 지원 사업', desc: '청년 일자리사업 참여청년 모집' };

        if (next) {
            // 담기: 중복 방지
            const exists = list.some((p) => p.title === current.title);
            const updated = exists ? list : [...list, current];
            localStorage.setItem('favorite_policies', JSON.stringify(updated));
        } else {
            // 해제
            const updated = list.filter((p) => p.title !== current.title);
            localStorage.setItem('favorite_policies', JSON.stringify(updated));
        }
    };

    return (
        <Container>
            <TitleWrapper>
                <TitleBox>
                    <Title>청년자격증지원사업</Title>
                    <Description>
                        청년의 취업 역량 개발에 필요한 자격증 취득 비용 부담을 완화하기 위해, 연간 일정 한도 내에서
                        응시료를 지원하는 정책입니다.
                    </Description>
                </TitleBox>
                <ButtonBox>
                    <LikeButton $like={like} onClick={handleToggleLike}>
                        <LikeImg src={likeImg} />
                        관심정책 {like ? '해제' : '담기'}
                    </LikeButton>
                    <GoButton>신청하러 가기</GoButton>
                </ButtonBox>
            </TitleWrapper>
            <MainWrapper>
                <Box>
                    <Text>AI 3줄 요약 💡 </Text>
                    <Content>
                        누가? 시험 준비하는 19-34세 미취업 청년 <br />
                        무엇을? 자격증 응시료 최대 30만원 지원 <br />
                        어떻게? 시험 접수 후 신청서/증빙 제출
                    </Content>
                </Box>
                <ToggleBox>
                    <DetailToggle onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
                        정책 상세 보기<Tog> {isOpen ? '∧' : '∨'}</Tog>
                    </DetailToggle>
                    {isOpen && (
                        <Content>
                            ✅ 신청 자격 <br />
                            소득: 기준 없음
                            <br /> 기타: 미취업 청년 (고용보험 미가입자)
                            <br />
                            <br /> 💰 지원 내용
                            <br /> 한도: 1인 연간 최대 30만원
                            <br /> 대상: 국가기술자격법상 544개 자격증 <br />
                            🗓️ 신청 방법 및 기간
                            <br />
                            <br /> 기간: 2025.01.01 ~ 2025.12.10
                            <br /> 방법: 온라인 신청 (일자리지원사업 통합접수)
                            <br /> 문의: ☎️ 031-120-5948
                            <br />
                            <br /> 필요 서류
                            <br /> 자격증시험 응시 확인서, 결제 확인증
                        </Content>
                    )}
                </ToggleBox>
                <Box>
                    <Text>생생한 정책 후기</Text>
                    <Content>
                        👍 BEST <br />
                        "이것만은 꼭 알고 신청하세요!" "서류 준비할 때..."
                        <Text>[ 후기 전체보기 및 작성하기 →</Text>
                    </Content>
                </Box>
            </MainWrapper>
        </Container>
    );
};

export default PolicyDetailPage;
