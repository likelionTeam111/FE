// axios 대신 fetch로 간단 래퍼 구현 (webpack5 polyfill 이슈 회피)

const BASE_URL = 'https://api.openai.com/v1';

export const instance = {
    post: async (path, body) => {
        const res = await fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
        }

        return { data: await res.json() };
    },
};
