import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--mainSky);
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 60%;
  padding: 5rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-color: var(--grey);
`;

const Input = styled.input`
  height: 5rem;
  padding-left: 2rem;
  border-radius: 15px;
`;
const LoginBtn = styled.button`
  background-color: var(--grey);
  color: var(--white);
  font-size: 2rem;
  height: 5rem;
  border-radius: 15px;
`;
const SignUpLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: underline;
  color: var(--grey);
`;
const Footer = styled.span`
  font-size: 2.3rem;
  color: var(--mainBlue);
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const SignUpPage = () => {
  const handleSignUp = () => {};
  return (
    <Container>
      <Wrapper>
        <Title id="signup-title">회원가입</Title>
        <Form aria-labelledby="signup-title" onSubmit={handleSignUp}>
          <InputBox>
            <Input type="text" name="username" placeholder="닉네임" />
            <Input type="text" name="username" placeholder="아이디" />
            <Input type="email" name="username" placeholder="이메일" />
            <Input type="password" name="password" placeholder="비밀번호" />
            <Input type="password" name="password" placeholder="비밀번호 확인" />
          </InputBox>
          <LoginBtn type="submit">회원가입</LoginBtn>
        </Form>
        <SignUpLink to={'/login'}>계정이 있으신가요?</SignUpLink>
      </Wrapper>
      <Footer>청년 자립 지원 서비스</Footer>
    </Container>
  );
};

export default SignUpPage;
