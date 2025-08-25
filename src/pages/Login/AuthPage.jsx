import styled from 'styled-components';
import logo from '../../assets/img/login.png';
import { Link } from 'react-router-dom';
import { removeCookie } from '../../apis/utils/cookie';
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  //로고
  background: var(--mainBlue) url(${logo}) no-repeat;
  background-position: right -6rem bottom 2rem;
  background-size: 35rem;
`;
const Wrapper = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const Title = styled.span`
  color: var(--white);
  font-size: 4rem;
  font-weight: bold;
  flex: 1;
`;
const BoxBox = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Text = styled.span`
  color: var(--white);
  font-size: 1.5rem;
`;
const Button = styled(Link)`
  width: 17rem;
  height: 5rem;
  border-radius: 15px;
  background-color: var(--white);
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ResetBtn = styled.button`
  width: 100%;
  height: 10rem;
  position: absolute;
  top: 10px;
  background-color: var(--mainBlue);
  color: var(--mainBlue);
`;

const LoginPage = () => {
  const handleReset = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    sessionStorage.clear();
  };
  return (
    <Container>
      <Wrapper>
        <ResetBtn onClick={handleReset}>리셋</ResetBtn>
        <Title>
          청년 자립 <br />
          지원 서비스
        </Title>
        <BoxBox>
          <Box>
            <Text>계정이 있으신가요?</Text>
            <Button to="/login">로그인</Button>
          </Box>
          <Box>
            <Text>계정이 없으신가요?</Text>
            <Button to={'/signup'}>회원가입</Button>
          </Box>
        </BoxBox>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
