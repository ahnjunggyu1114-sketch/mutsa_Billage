import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import useAuthStore from "./store/useAuthStore"; // 팀 프로젝트의 스토어 경로를 확인해주세요!

import Navbar from "./components/Navbar";
import CreatePostPage from "./pages/CreatePostPage";
import GroupBuyPage from "./pages/GroupBuyPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import RentalPage from "./pages/RentalPage";
import SchoolSelectPage from "./pages/SchoolSelectPage";

function App() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* 로그인 여부에 따른 메인 및 로그인 페이지 분기 */}
        <Route path="/" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <LoginPage />} />
        
        {/* 새로 만든 학교 선택 페이지 */}
        <Route path="/school" element={<SchoolSelectPage />} />

        {/* 기존 페이지들 (로그인 상태일 때만 접근 가능) */}
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