import { BrowserRouter, Routes, Route } from 'react-router-dom';

//페이지
import Mainpage from './pages/Mainpage';
import ChatbotPage from './pages/ChatbotPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';

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

          <Route element={<OnboardingLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
