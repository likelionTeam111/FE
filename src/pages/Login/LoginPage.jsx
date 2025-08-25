import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

// api
import { login } from '../../apis/api/auth';
import { myPage } from '../../apis/api/profile';
// 스토어
import { useAuthStore } from '../../store/useAuthStore';
import { useInfoStore } from '../../store/useInfoStore';

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
    margin-left: 0.8rem;
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
    font-size: 1.4rem;
    text-decoration: underline;
    color: var(--grey);
    margin-top: 1rem;
`;
const Footer = styled.span`
    font-size: 2.3rem;
    color: var(--mainBlue);
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin: auto;
    font-family: 'Paperlogy', sans-serif;
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { applyLogin } = useAuthStore();
    const { myInfo } = useInfoStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        else if (name === 'password') setPassword(value);
    };

    //로그인 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            username: username,
            password: password,
        };

        try {
            const { access, refresh, nickname } = await login(body);

            //로그인 세팅
            applyLogin(access, refresh, nickname);


            const data = await myPage();

            if (data.id === undefined) navigate('/onboarding');
            else {
                myInfo(data);
                navigate('/');
            }
        } catch (e) {
            console.error(e);
            alert('로그인 실패');
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title id="login-title">로그인</Title>
                <Form aria-labelledby="login-title" onSubmit={handleSubmit}>
                    <InputBox>
                        <Input
                            type="text"
                            name="username"
                            autoComplete="username"
                            placeholder="아이디"
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            placeholder="비밀번호"
                            onChange={handleChange}
                            required
                        />
                    </InputBox>
                    <LoginBtn type="submit">로그인</LoginBtn>
                </Form>
                <SignUpLink to={'/signup'}>계정이 없으신가요?</SignUpLink>
            </Wrapper>
            <Footer>청년 자립 비서</Footer>
        </Container>
    );
};

export default LoginPage;
