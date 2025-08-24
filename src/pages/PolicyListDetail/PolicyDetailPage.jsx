import styled from 'styled-components';
import likeImg from '../../assets/img/like.png';
import ai from '../../assets/img/ai.png';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// api
import { detailPolicy, addFavoritePolicy, deleteFavoritePolicy } from '../../apis/api/policy';

//스토어
import { useChatStore } from '../../store/useChatStore';

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
  display: inline-block;
  white-space: pre-wrap; /* \n 유지 + 자동 줄바꿈 */
  word-break: break-word; /* 긴 단어/URL도 줄바꿈 */
  width: 80%;
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
  white-space: pre-wrap; /* \n 유지 + 자동 줄바꿈 */
  word-break: break-word; /* 긴 단어/URL도 줄바꿈 */
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
  const [plcyInfo, setplcyInfo] = useState({});
  const { plcyNo } = useParams(); // string
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const { settingPolicy } = useChatStore();

  //좋아요
  const handleLike = async () => {
    if (isPending) return; // 연타 차단
    setIsPending(true);
    try {
      if (like) {
        const status = await deleteFavoritePolicy(plcyInfo.id);
        if (status === 204) setLike(false);
      } else {
        const status = await addFavoritePolicy(plcyInfo.id);
        if (status === 201) setLike(true);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false); // 응답 오면 다시 활성화
    }
  };

  // AI한테 물어보기
  const askAssistant = () => {
    settingPolicy(plcyInfo);
    navigate('/chatbot');
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await detailPolicy(Number(plcyNo));
        setplcyInfo(data);
        setLike(data.is_favorited);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [plcyNo]);

  return (
    <Container>
      <TitleWrapper>
        <TitleBox>
          <Title>{plcyInfo.plcyNm}</Title>
          <Description>{plcyInfo.plcyExplnCn}</Description>
        </TitleBox>
        <ButtonBox>
          <LikeButton $like={like} onClick={handleLike}>
            <LikeImg src={likeImg} />
            {like && '담긴'} 관심정책 {!like && '담기'}
          </LikeButton>
          <GoButton onClick={() => window.open(`${plcyInfo.addr}`, '_blank')}>📝신청하러 가기</GoButton>
        </ButtonBox>
      </TitleWrapper>
      <MainWrapper>
        <Section>
          <Text>AI 3줄 요약 💡 </Text>
          <Content>{plcyInfo.aiSummary}</Content>
        </Section>
        <Section>
          <BlueText>정책 상세 📝</BlueText>
          <Content>
            사업 기간 : {plcyInfo.bizPrd}
            <br />
            <br /> 💰 지원 내용
            <br /> {plcyInfo.about_benefit}
            <br />
            <br />
            🗓️ 신청 방법 및 기간
            <br /> 신청 기간: {plcyInfo.aplyYmd}
            <br /> 제출 서류: {plcyInfo.sbsnDmtnCn}
            <br /> 신청 방법: {plcyInfo.plcyAplyMthdCn}
            <br /> 심사 방법: {plcyInfo.srngMthdCn}
          </Content>
          <AiBox>
            <AiImg src={ai} />
            <AiButton onClick={askAssistant}>궁금한 점이 있으시면 저 AI 챗봇에게 편하게 물어보세요.</AiButton>
          </AiBox>
        </Section>
        <Section>
          <BlueText>신청 요건 ✅</BlueText>
          <Content>
            나이: {plcyInfo.ageLmt} <br />
            소득: {plcyInfo.earnLmt}
            <br />
            결혼 여부: {plcyInfo.mrgSttsCd_display}
            <br />
            전공분야: {plcyInfo.plcyMajorCd_display} <br />
            취업상태: {plcyInfo.jobCd_display}
            <br />
            학력: {plcyInfo.schoolCd_display} <br />
            특화분야: {plcyInfo.sbizCd_display} <br />
            기타: {plcyInfo.etc}
          </Content>
        </Section>
      </MainWrapper>
    </Container>
  );
};

export default PolicyDetailPage;
