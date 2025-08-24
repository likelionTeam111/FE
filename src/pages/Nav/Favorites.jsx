import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page = styled.main`
    min-height: 100vh;
    background: var(--white);
    padding: 0;
    padding-top: 6rem;
    padding-bottom: 8rem;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--white);
`;

const Back = styled.button`
    background: transparent;
    border: none;
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
    padding: 0.5rem;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.7;
    }
`;

const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--black);
    margin: 0;
`;

const MainContent = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const PolicyCard = styled.div`
    width: 100%;
    max-width: 44rem;
    background: #f8f9fa;
    border-radius: 1.2rem;
    padding: 1.5rem;
    box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.06);
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0.6rem 1.6rem rgba(0, 0, 0, 0.1);
    }
`;

const PolicyTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--black);
    margin: 0 0 0.8rem 0;
    line-height: 1.3;
`;

const PolicyDesc = styled.p`
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 1rem 0;
    line-height: 1.4;
`;

const TagContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1rem;
`;

const Tag = styled.span`
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &.primary {
        background: var(--mainBlue);
        color: var(--white);
    }

    &.secondary {
        background: var(--white);
        color: var(--black);
        border: 1px solid #e0e0e0;
    }
`;

const ArrowIcon = styled.div`
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.4);
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

    &::after {
        content: '';
        position: absolute;
        bottom: -2rem;
        right: 1rem;
        width: 220px;
        height: 220px;
        background: var(--mainSky);
        opacity: 0.2;
        pointer-events: none;
        border-radius: 50%;
    }
`;

const Favorites = () => {
    const navigate = useNavigate();
    const [favoritePolicies, setFavoritePolicies] = useState([]);

    useEffect(() => {
        // localStorage에서 관심등록한 정책들을 가져옴
        const saved = localStorage.getItem('favorite_policies');
        if (saved) {
            try {
                setFavoritePolicies(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse favorite policies:', e);
                setFavoritePolicies([]);
            }
        }
    }, []);

    const handlePolicyClick = (policy) => {
        // 정책 상세 페이지로 이동 (필요시 구현)
        console.log('Policy clicked:', policy);
    };

    return (
        <Page>
            <Header>
                <Back onClick={() => navigate(-1)}>{'<'}</Back>
                <Title>관심 정책 목록</Title>
            </Header>

            <MainContent>
                {favoritePolicies.length === 0 ? (
                    <Empty>
                        관심 정책이 아직 없어요
                        <br />
                        정책을 찾아보고 관심등록해보세요!
                    </Empty>
                ) : (
                    favoritePolicies.map((policy, idx) => (
                        <PolicyCard key={idx} onClick={() => handlePolicyClick(policy)}>
                            <PolicyTitle>{policy.title || '정책 제목'}</PolicyTitle>
                            <PolicyDesc>{policy.desc || '#청년일자리사업 참여청년 모집'}</PolicyDesc>
                            <TagContainer>
                                <Tag className="primary">일자리</Tag>
                                <Tag className="secondary">취업 지원</Tag>
                            </TagContainer>
                            <ArrowIcon>{'>'}</ArrowIcon>
                        </PolicyCard>
                    ))
                )}
            </MainContent>
        </Page>
    );
};

export default Favorites;
