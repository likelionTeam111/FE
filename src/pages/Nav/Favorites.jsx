import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PixelLogo from '../../assets/img/pixelLogoBlue.png';
import PolicyCard from '../../features/policyListDetail/components/PolicyCard';

//api
import {favoritePolicyList} from '../../apis/api/policy'

const Page = styled.main`
    height: calc(100vh - 12rem);
    background: var(--mainSky);
    display: flex;
    flex-direction: column;
`;
const TitleWrapper = styled.div`
  display: flex;
    height: 4rem;
    padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-bottom: solid var(--grey);
`;
const Title = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 2rem;
    flex: 1;
    box-sizing: border-box;
    overflow-y: auto ;
`;


const Empty = styled.div`
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.35);
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
    max-width: 44rem;
`;

const LogoImage = styled.img`
    position: fixed;
    bottom: 10rem;
    right: 2rem;
    width: 300px;
    height: 300px;
    opacity: 0.6;
    pointer-events: none;
    z-index: 1;
    object-fit: contain;

    @media (min-width: 768px) {
        width: 400px;
        height: 400px;
        right: 3rem;
    }

    @media (min-width: 1024px) {
        width: 500px;
        height: 500px;
        right: 4rem;
    }

    @media (min-width: 1440px) {
        width: 600px;
        height: 600px;
        right: 5rem;
    }
`;

const Favorites = () => {
    const [favoritePolicies, setFavoritePolicies] = useState([]);

    useEffect(() => {
    (async ()=>{
        const data = await favoritePolicyList();
        setFavoritePolicies(data)
    })()
       
    }, []);


    return (
        <Page>
            <TitleWrapper>
                <Title>관심 정책 목록</Title>
            </TitleWrapper>
            <MainContent>
                {favoritePolicies?.length === 0 ? (
                    <Empty>
                        관심 정책이 아직 없어요
                        <br />
                        정책을 찾아보고 관심등록해보세요!
                    </Empty>
                ) : (
                    favoritePolicies.map((policyInfo, idx) => (
                        <PolicyCard  key={idx} policyInfo={policyInfo}/>
                    ))
                )}
                  <LogoImage src={PixelLogo} alt="픽셀 로고" />

            </MainContent>
        </Page>
    );
};

export default Favorites;
