import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const Container = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: ${({ $headerBg }) => $headerBg};
`;

const BackSpace = styled.button`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 5vw;
  background-color: ${({ $headerBg }) => $headerBg};
  color: ${({ $buttonBg }) => $buttonBg};
`;

const Logo = styled.span`
  color: var(--mainBlue);
  font-weight: bold;
  font-size: 3rem;
  margin-left: 5rem;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  let headerBg = 'var(--white)';
  let buttonBg = 'var(--black)';

  //페이지마다 헤더 변경
  if (location.pathname === '/policyList') {
    headerBg = `var(--mainSky)`;
  } else if (location.pathname.startsWith('/policyDetail')) {
    headerBg = `var(--mainBlue)`;
    buttonBg = 'var(--white)';
  } else if (location.pathname === '/chatbot') {
    headerBg = 'transparent'; // 그라데이션이 보이게
    buttonBg = 'var(--white)'; // 상단이 파란 톤이므로 흰색 아이콘 권장
  }

  return (
    <Container $headerBg={headerBg}>
      {isHome ? (
        <Logo>청년자립지원서비스</Logo>
      ) : (
        <BackSpace $headerBg={headerBg} $buttonBg={buttonBg} onClick={() => navigate(-1)}>
          {'<'}
        </BackSpace>
      )}
    </Container>
  );
};

export default Header;
