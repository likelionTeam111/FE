import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Nav 페이지
import Mainpage from './pages/Nav/Mainpage';
import ChatbotPage from './pages/Nav/ChatbotPage';
import MyPage from './pages/Nav/MyPage';
import Favorites from './pages/Nav/Favorites';

// Search 페이지
import SearchPage from './pages/SearchPage';

//PolicyListDetail 페이지
import PolicyListPage from './pages/PolicyListDetail/PolicyListPage';
import PolicyDetailPage from './pages/PolicyListDetail/PolicyDetailPage';

//로그인 페이지
import AuthPage from './pages/Login/AuthPage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/Login/SignUpPage';

//온보딩 페이지
import ProfileInfo from './pages/OnBoarding/ProfileInfo';
import SocioEconomicInfo from './pages/OnBoarding/SocioEconomicInfo';
import OccupationInfo from './pages/OnBoarding/OccupationInfo';
import ExtraInfo from './pages/OnBoarding/ExtraInfo';
import Final from './pages/OnBoarding/Final';
import Welcome from './pages/OnBoarding/Welcome';

//레이아웃
import DefaultLayout from './layouts/DefaultLayout';
import OnboardingLayout from './layouts/OnboardingLayout';

// 라우터
import ProtectedRoute from './routes/ProtectedRoute';

// NotFound 컴포넌트
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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />

<<<<<<< HEAD
        <Route element={<OnboardingLayout />}>
          <Route path="/onboarding" element={<Welcome />} />
          <Route path="/onboarding/profile-info" element={<ProfileInfo />} />
          <Route path="/onboarding/occupation-info" element={<OccupationInfo />} />
          <Route path="/onboarding/socio-economic-info" element={<SocioEconomicInfo />} />
          <Route path="/onboarding/extra-info" element={<ExtraInfo />} />
          <Route path="/onboarding/final" element={<Final />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Mainpage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/my" element={<MyPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/policyList" element={<PolicyListPage />} />
            <Route path="/policyDetail/:plcyNo" element={<PolicyDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
=======
                <Route element={<OnboardingLayout />}>
                    <Route path="/onboarding" element={<Welcome />} />
                    <Route path="/onboarding/profile-info" element={<ProfileInfo />} />
                    <Route path="/onboarding/occupation-info" element={<OccupationInfo />} />
                    <Route path="/onboarding/socio-economic-info" element={<SocioEconomicInfo />} />
                    <Route path="/onboarding/extra-info" element={<ExtraInfo />} />
                    <Route path="/onboarding/final" element={<Final />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route element={<DefaultLayout />}>
                        <Route path="/" element={<Mainpage />} />
                        <Route path="/my" element={<MyPage />} />
                        <Route path="/chatbot" element={<ChatbotPage />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/policyList" element={<PolicyListPage />} />
                        <Route path="/policyDetail/:plcyNo" element={<PolicyDetailPage />} />
                    </Route>
                </Route>

                {/* Catch-all route for undefined paths */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
>>>>>>> 3d19f6a6846eca2bed5a76db229d9a5a87740ae7
}

export default App;
