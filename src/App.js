import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Nav 페이지
import Mainpage from './pages/Nav/Mainpage';
import ChatbotPage from './pages/Nav/ChatbotPage';
import MyPage from './pages/Nav/MyPage';
import Favorites from './pages/Nav/Favorites';

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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />

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
                        <Route path="/policyList" element={<PolicyListPage />} />
                        <Route path="/policyDetail/:plcyNo" element={<PolicyDetailPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
