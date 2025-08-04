import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Mainpage from './pages/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
