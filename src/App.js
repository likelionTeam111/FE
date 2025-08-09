import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Nav 페이지
import Mainpage from './pages/Nav/Mainpage';
import ChatbotPage from './pages/Nav/ChatbotPage';
import MyPage from './pages/Nav/MyPage';
import SearchPage from './pages/Nav/SearchPage';

//PolicyListDetail 페이지
import PolicyListPage from './pages/PolicyListDetail/PolicyListPage';
import PolicyDetailPage from './pages/PolicyListDetail/PolicyDetailPage';

//레이아웃
import DefaultLayout from './layouts/DefaultLayout';
import OnboardingLayout from './layouts/OnboardingLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/policyList" element={<PolicyListPage />} />
          <Route path="/policyDetail/:plcyNo" element={<PolicyDetailPage />} />
        </Route>
        <Route element={<OnboardingLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
