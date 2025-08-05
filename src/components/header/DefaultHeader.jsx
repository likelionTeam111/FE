import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
`;
const BackSpaceBox = styled.div``;
const BackSpace = styled.button`
  font-size: 3.5rem;
  font-weight: bold;
  margin-left: 5rem;
  background-color: var(--white);
`;

const Logo = styled.span`
  color: var(--mainBg1);
  font-weight: bold;
  font-size: 3rem;
  margin-left: 5rem;
`;

//TODO: 나중에 상속으로 페이지마다 헤더 색상 다르게 하겠습니다.
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  return (
    <Container>
      {isHome ? (
        <Logo>청년자립지원서비스</Logo>
      ) : (
        <>
          <BackSpaceBox>
            <BackSpace onClick={() => navigate(-1)}>&lt;</BackSpace>
          </BackSpaceBox>
        </>
      )}
    </Container>
  );
};

export default Header;
