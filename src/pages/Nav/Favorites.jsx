import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Page = styled.main`
    min-height: 100vh;
    background: #eef5ff;
    padding: 1.2rem 1rem 6rem;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 0.4rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Back = styled.button`
    background: transparent;
    font-size: 1.6rem;
`;

const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 800;
`;

const List = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const Item = styled.button`
    width: 100%;
    text-align: left;
    background: #fff;
    border-radius: 1rem;
    padding: 1rem 1.2rem;
    box-shadow: 0 0.3rem 0.8rem rgba(0, 0, 0, 0.06);
`;

const ItemTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
`;

const ItemDesc = styled.p`
    margin-top: 0.4rem;
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.6);
`;

const Empty = styled.div`
    position: relative;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.35);
    font-weight: 700;

    &::after {
        content: '';
        position: absolute;
        bottom: -2rem;
        right: 1rem;
        width: 220px;
        height: 220px;
        opacity: 0.2;
        pointer-events: none;
    }
`;

const Favorites = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('favorite_policies');
        if (saved) setItems(JSON.parse(saved));
    }, []);

    return (
        <Page>
            <Header>
                <Back onClick={() => window.history.back()}>{'<'}</Back>
                <Title>관심 정책 목록</Title>
            </Header>

            {items.length === 0 ? (
                <Empty>관심 정책이 아직 없어요</Empty>
            ) : (
                <List>
                    {items.map((p, idx) => (
                        <Item key={idx}>
                            <ItemTitle>{p.title}</ItemTitle>
                            {p.desc && <ItemDesc>{p.desc}</ItemDesc>}
                        </Item>
                    ))}
                </List>
            )}
        </Page>
    );
};

export default Favorites;
