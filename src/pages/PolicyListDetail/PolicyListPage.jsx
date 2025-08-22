import styled from 'styled-components';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';

const Container = styled.div`
  height: calc(100vh - 14vh);
  display: flex;
  flex-direction: column;
  background-color: var(--mainSky);
  gap: 5vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`;
const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;
const Description = styled.span`
  font-size: 1.5rem;
`;

const PolicyCardWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding-bottom: 7vh; // 푸터만큼 빼주기
`;

const dummpy = [
  {
    'plcyNo': '20250806005400211515',
    'plcyNm': '청년 일자리사업 참여청년 모집',
    'plcyKywdNm': '인턴,장기미취업청년',
    'lclsfNm': '일자리',
    'mclsfNm': '취업',
  },
  {
    'plcyNo': '202508060054002115',
    'plcyNm': '서울 자취 월세 지원',
    'plcyKywdNm': '인턴,장기미취업청년',
    'lclsfNm': '복지',
    'mclsfNm': '지원',
  },
  {
    'plcyNo': '202508065400211515',
    'plcyNm': '도서관 근로 봉사',
    'plcyKywdNm': '인턴,장기미취업청년',
    'lclsfNm': '일자리',
    'mclsfNm': '취업',
  },
  {
    'plcyNo': '20250805400211515',
    'plcyKywdNm': '인턴,장기미취업청년',
    'plcyNm': '재난지원금 신청',
    'lclsfNm': '복지',
    'mclsfNm': '지원',
  },
];

const PolicyListPage = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>AI 맞춤 정책 목록</Title>
        <Description>자립에게 도움이 될 만한 정책들을 모아봤어요.</Description>
      </TitleWrapper>
      <PolicyCardWrapper>
        {dummpy.map((policy) => {
          return <PolicyCard key={policy.plcyNo} policy={policy} />;
        })}
      </PolicyCardWrapper>
    </Container>
  );
};

export default PolicyListPage;
