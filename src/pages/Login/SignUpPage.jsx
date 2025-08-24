import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// api
import { registration } from '../../apis/api/auth';

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
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPassword, setCheckedPassword] = useState('');

  const HAS_SPECIAL = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])$/;
  const hasSpecialChar = (s) => HAS_SPECIAL.test(s);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nickName') setNickName(value);
    else if (name === 'username') setUsername(value);
    else if (name === 'password') setPassword(value);
    else if (name === 'checkedPassword') setCheckedPassword(value);
  };

  // TODO회원가입 요청
  const handleSignUp = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!hasSpecialChar(password)) {
      alert('대문자, 소문자, 숫자, 특수문자가 각각 1개 이상 들어가야 합니다.');
      return;
    }

    if (password !== checkedPassword) return alert('비밀번호와 비밀번호 확인이 같아야 합니다.');

    const body = {
      username: username,
      password1: password,
      password2: checkedPassword,
      nickname: nickName,
    };
    try {
      await registration(body);
      // 회원가입 성공 시 로그인 페이지로 이동
      alert('회원가입 성공');
      navigate('/login');
    } catch (e) {
      console.error(e);
      alert('회원가입 실패');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Form onSubmit={handleSignUp}>
          <InputBox>
            <Input
              type="text"
              name="nickName"
              placeholder="닉네임"
              autoComplete="nickName"
              value={nickName}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="아이디"
              value={username}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              required
            />
            <Input
              name="checkedPassword"
              type="password"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
              value={checkedPassword}
              onChange={handleChange}
              required
            />
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
