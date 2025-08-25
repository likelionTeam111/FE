const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>404 - 페이지를 찾을 수 없습니다</h1>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>
            <button
                onClick={() => window.history.back()}
                style={{
                    padding: '12px 24px',
                    fontSize: '1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                }}
            >
                이전 페이지로 돌아가기
            </button>
        </div>
    );
};

export default NotFound;
