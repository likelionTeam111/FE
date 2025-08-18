import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Nav 페이지
import Mainpage from './pages/Nav/Mainpage';
import ChatbotPage from './pages/Nav/ChatbotPage';
import MyPage from './pages/Nav/MyPage';
import SearchPage from './pages/Nav/SearchPage';

//PolicyListDetail 페이지
import PolicyListPage from './pages/PolicyListDetail/PolicyListPage';
import PolicyDetailPage from './pages/PolicyListDetail/PolicyDetailPage';

//로그인 페이지
import AuthPage from './pages/Login/AuthPage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/Login/SignUpPage';

//온보딩 페이지
import ProfileInfo from './pages/Onboarding/ProfileInfo';
import SocioEconomicInfo from './pages/Onboarding/SocioEconomicInfo';
import OccupationInfo from './pages/Onboarding/OccupationInfo';
import ExtraInfo from './pages/Onboarding/ExtraInfo';
import Final from './pages/Onboarding/Final';
import Welcome from './pages/Onboarding/Welcome';

//레이아웃
import DefaultLayout from './layouts/DefaultLayout';
import OnboardingLayout from './layouts/OnboardingLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
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

        <Route element={<DefaultLayout />}>
          <Route path="/main" element={<Mainpage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/policyList" element={<PolicyListPage />} />
          <Route path="/policyDetail/:plcyNo" element={<PolicyDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
