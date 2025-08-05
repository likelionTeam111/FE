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
  height: 5rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
const NavBox = styled.div``;
const Nav = styled.span`
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
          <Wrapper>
            <Link to="/">
              <NavBox>
                <Nav>홈</Nav>
              </NavBox>
            </Link>
            <Link to="/search">
              <NavBox>
                <Nav>탐색</Nav>
              </NavBox>
            </Link>
            <Link to="/chatbot">
              <NavBox>
                <Nav>AI챗봇</Nav>
              </NavBox>
            </Link>
            <Link to="/my">
              <NavBox>
                <Nav>마이페이지</Nav>
              </NavBox>
            </Link>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Footer;
