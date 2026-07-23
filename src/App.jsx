import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreatePostPage from "./pages/CreatePostPage";
import GroupBuyPage from "./pages/GroupBuyPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import RentalPage from "./pages/RentalPage";
import SchoolSelectPage from "./pages/SchoolSelectPage";

function App() {
  // 임시 토큰 값 (true로 바꾸면 로그인된 상태, false로 바꾸면 로그인 안 된 상태를 테스트할 수 있습니다)

  const accessToken = true; // 로그인된 상태


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <LoginPage />} />
        
        {/* 학교 선택 페이지 */}
        <Route path="/school" element={<SchoolSelectPage />} />

        {/* 기존 페이지들 */}
        <Route path="/main" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage" element={accessToken ? <MyPage /> : <Navigate to="/login" replace />} />
        <Route path="/group-buy" element={accessToken ? <GroupBuyPage /> : <Navigate to="/login" replace />} />
        <Route path="/rental" element={accessToken ? <RentalPage /> : <Navigate to="/login" replace />} />
        <Route path="/create" element={accessToken ? <CreatePostPage /> : <Navigate to="/login" replace />} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;