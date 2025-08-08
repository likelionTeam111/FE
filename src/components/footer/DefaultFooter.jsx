import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
  background-color: var(--white);
  border-top: solid 0.2rem var(--grey);

  /* 하단 고정 */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavText = styled.span`
  font-size: 2.5rem;
`;

const Footer = () => {
  const location = useLocation();
  const isChatbot = location.pathname === '/chatbot';
  return (
    <>
      {isChatbot ? (
        <></>
      ) : (
        <Container>
          <Link to="/">
            <NavText>홈</NavText>
          </Link>
          <Link to="/search">
            <NavText>탐색</NavText>
          </Link>
          <Link to="/chatbot">
            <NavText>AI챗봇</NavText>
          </Link>
          <Link to="/my">
            <NavText>마이페이지</NavText>
          </Link>
        </Container>
      )}
    </>
  );
};

export default Footer;
