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

import MyApplicationsPage from "./pages/MyApplicationsPage";
import CreditChargePage from "./pages/CreditChargePage";
// ✨ 크레딧 충전 완료 페이지 임포트
import CreditCompletePage from "./pages/CreditCompletePage";

import useAuthStore from "./store/useAuthstore";

function App() {
  const { isLoggedIn } = useAuthStore(); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
        
        {/* 카카오 로그인 콜백 주소 */}
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
        
        {/* 학교 선택 페이지 */}
        <Route path="/school" element={<SchoolSelectPage />} />

        {/* 기존 페이지 및 마이페이지 하위 라우트들 */}
        <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage/applications" element={isLoggedIn ? <MyApplicationsPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage/charge" element={isLoggedIn ? <CreditChargePage /> : <Navigate to="/login" replace />} />
        
        {/* ✨ 크레딧 충전 완료 페이지 라우트 추가 */}
        <Route path="/mypage/complete" element={isLoggedIn ? <CreditCompletePage /> : <Navigate to="/login" replace />} />

        <Route path="/group-buy" element={isLoggedIn ? <GroupBuyPage /> : <Navigate to="/login" replace />} />
        <Route path="/category" element={isLoggedIn ? <CategoryPage /> : <Navigate to="/login" replace />} />

        {/* 아이템 상세 및 대여 관련 */}
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