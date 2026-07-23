// src/App.jsx
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/NavBar";
import CreatePostPage from "./pages/CreatePostPage";
import GroupBuyPage from "./pages/GroupBuyPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import RentalPage from "./pages/RentalPage";
import SchoolSelectPage from "./pages/SchoolSelectPage";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import RentalApplyPage from "./pages/RentalApplyPage";
import RentalConfirmPage from "./pages/RentalConfirmPage";
import RentalCompletePage from "./pages/RentalCompletePage";
import OAuthCallbackPage from "./pages/OAuthCallbackPage";

// ✨ 방금 만든 store 가져오기
import useAuthStore from "./store/useAuthstore";

function App() {
  // ✨ 무조건 false가 아니라, 실제 로그인 상태를 store에서 가져옵니다!
  const { isLoggedIn } = useAuthStore(); 

  return (
    <BrowserRouter>
      <Routes>
        {/* accessToken 대신 isLoggedIn으로 조건 변경 */}
        <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
        
        {/* 백엔드에서 돌아오는 카카오 로그인 콜백 주소 연결 */}
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
        
        {/* 학교 선택 페이지 */}
        <Route path="/school" element={<SchoolSelectPage />} />

        {/* 기존 페이지들 */}
        <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" replace />} />
        <Route path="/group-buy" element={isLoggedIn ? <GroupBuyPage /> : <Navigate to="/login" replace />} />
        <Route path="/category" element={isLoggedIn ? <CategoryPage /> : <Navigate to="/login" replace />} />

        {/* 아이템 상세 및 대여 관련 (여기는 조건이 없네요!) */}
        <Route path="/item/:type/:id" element={<ItemPage />} />
        <Route path="/item/:type/:id/apply" element={<RentalApplyPage />}/>
        <Route path="/item/:type/:id/confirm" element={<RentalConfirmPage />}/>
        <Route path="/item/rental/:id/complete" element={<RentalCompletePage />}/>

        <Route path="/rental" element={isLoggedIn ? <RentalPage /> : <Navigate to="/login" replace />} />
        
        {/* 글 등록 관련 페이지 */}
        <Route path="/create" element={isLoggedIn ? <CreatePostPage /> : <Navigate to="/login" replace />} />
        <Route path="/create/rental" element={isLoggedIn ? <RentalPage /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;