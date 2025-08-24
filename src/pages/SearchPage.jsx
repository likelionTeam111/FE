import styled from 'styled-components';
import PolicyCard from '../features/policyListDetail/components/PolicyCard';
import { useState } from 'react';
import search from '../assets/img/search.png';

// api
import { searchPolicy } from '../apis/api/policy';

const Container = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  background-color: var(--mainSky);
  box-sizing: border-box;
`;
const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
`;
const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;
const Form = styled.form`
  width: 80%;
  border: 2px solid var(--grey);
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 1.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  align-items: center;
`;
const Input = styled.input`
  font-size: 1.3rem;

  //포커스 지우기
  outline: none;
  box-shadow: none;
`;
const SendBtn = styled.button`
  background-color: transparent;
  img {
    width: 2rem;
    display: block;
  }
`;

const PolicyCardWrapper = styled.div`
  flex: 9;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  box-sizing: border-box;
  padding: 2rem 0;
`;

const PaginationBox = styled.div`
  flex: 1.5;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const MoveBtn = styled.button`
  font-size: 2rem;
`;
const Page = styled.span`
  font-size: 2rem;
`;

const SearchPage = () => {
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState(''); // 마지막으로 검색한 값(페이징용 고정)
  const [data, setData] = useState({
    results: [],
    next: null,
    previous: null,
    count: null,
  }); // 페이지네이션 서버 응답

  // 제출 핸들러
  const onSearch = async (e) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return; // 빈 문자열 방지
    setKeyword(q);
    setPage(1);
    try {
      const res = await searchPolicy(q, 1);
      setData(res); // 첫 번째 페이지
    } catch (e) {
      console.error(e);
    }
  };

  // 뒤로 가기
  const goPrev = async () => {
    const p = page - 1;
    if (p < 1) return; // 첫 번째 페이지 뒤로가기 방지
    setPage(p);
    try {
      const res = await searchPolicy(keyword, p);
      setData(res);
    } catch (e) {
      console.error(e);
    }
  };

  // 앞으로 가기
  const goNext = async () => {
    const p = page + 1;
    setPage(p);
    try {
      const res = await searchPolicy(keyword, p);
      setData(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>정책 검색 결과</Title>
        <Form onSubmit={onSearch}>
          <Input value={text} placeholder="궁금한 정책을 검색해보세요!" onChange={(e) => setText(e.target.value)} />
          <SendBtn type="submit">
            <img src={search} alt="search" />
          </SendBtn>
        </Form>
      </TitleWrapper>
      <PolicyCardWrapper>
        {data.results?.map((policyInfo) => {
          return <PolicyCard key={policyInfo.id} policyInfo={policyInfo} />;
        })}
      </PolicyCardWrapper>
      {keyword.length !== 0 && (
        <PaginationBox>
          <MoveBtn onClick={goPrev}>{'<'}</MoveBtn>
          <Page>{page}</Page>
          <MoveBtn onClick={goNext}>{'>'}</MoveBtn>
        </PaginationBox>
      )}
    </Container>
  );
};

export default SearchPage;
