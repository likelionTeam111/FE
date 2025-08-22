import styled from 'styled-components';
import likeImg from '../../assets/img/like.png';
import ai from '../../assets/img/ai.png';
import { useState } from 'react';

const Container = styled.div`
  height: calc(100vh - 14vh);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const TitleWrapper = styled.div`
  flex: 2;
  background-color: var(--mainBlue);
  border-radius: 0 0 30px 30px;

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
  padding-left: 3rem;
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
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 3rem;
`;

const LikeButton = styled.button`
  color: ${({ $like }) => ($like ? 'var(--white)' : ' var(--black)')};
  background-color: ${({ $like }) => ($like ? 'var(--grey)' : 'var(--mainSky)')};
  width: 12rem;
  height: 3rem;
  border-radius: 20px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const LikeImg = styled.img`
  width: 2rem;
`;

const GoButton = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 20px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  flex: 3;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  gap: 2rem;
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const BlueText = styled.div`
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: var(--white);
  background-color: var(--mainBlue);
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
  color: var(--buttonGrey);
`;

const Content = styled.div`
  font-size: 1.5rem;
  border: 1px solid var(--grey);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  gap: 8rem;
  align-items: center;
`;
const AiBox = styled.div`
  display: flex;
  gap: 1rem;
`;
const AiImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const AiButton = styled.button`
  height: 5rem;
  border-radius: 15px;
  font-size: 1.4rem;
  background-color: var(--mainSky);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.08), 0 5px 5px rgba(0, 0, 0, 0.1);
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;

const PolicyDetailPage = () => {
  const [like, setLike] = useState(false);
  return (
    <Container>
      <TitleWrapper>
        <TitleBox>
          <Title>청년자격증지원사업</Title>
          <Description>
            청년의 취업 역량 개발에 필요한 자격증 취득 비용 부담을 완화하기 위해, 연간 일정 한도 내에서 응시료를
            지원하는 정책입니다.
          </Description>
        </TitleBox>
        <ButtonBox>
          <LikeButton $like={like} onClick={() => setLike(!like)}>
            <LikeImg src={likeImg} />
            {like && '담긴'} 관심정책 {!like && '담기'}
          </LikeButton>
          <GoButton>📝신청하러 가기</GoButton>
        </ButtonBox>
      </TitleWrapper>
      <MainWrapper>
        <Section>
          <Text>AI 3줄 요약 💡 </Text>
          <Content>
            누가? 시험 준비하는 19-34세 미취업 청년 <br />
            무엇을? 자격증 응시료 최대 30만원 지원 <br />
            어떻게? 시험 접수 후 신청서/증빙 제출
          </Content>
        </Section>
        <Section>
          <BlueText>정책 상세 📝</BlueText>
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
          <AiBox>
            <AiImg src={ai} />
            <AiButton>궁금한 점이 있으시면 저 AI 챗봇에게 편하게 물어보세요.</AiButton>
          </AiBox>
        </Section>
        <Section>
          <BlueText>신청 요건 ✅</BlueText>
          <Content>
            나이: 제한 없음 소득: ? 결혼 여부: ? 전공분야: 제한 없음 취업상태: 미취업자 학력: 제한없음 특화분야:
            제한없음 기타: 본 연수과정 중 재직자 ..~
          </Content>
        </Section>
      </MainWrapper>
    </Container>
  );
};

export default PolicyDetailPage;
