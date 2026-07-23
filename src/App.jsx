import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
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

// 새로 만든 콜백 페이지 import
import OAuthCallbackPage from "./pages/OAuthCallbackPage";


function App() {
  // 임시 토큰 값 (추후 로컬 스토리지에서 가져오는 로직으로 변경 필요)
  const accessToken = true; // 로그인된 상태

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <LoginPage />} />
        
        {/* 백엔드에서 돌아오는 카카오 로그인 콜백 주소 연결 */}
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />
        
        {/* 학교 선택 페이지 */}
        <Route path="/school" element={<SchoolSelectPage />} />

        {/* 기존 페이지들 */}
        <Route path="/main" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/mypage" element={accessToken ? <MyPage /> : <Navigate to="/login" replace />} />
        <Route path="/group-buy" element={accessToken ? <GroupBuyPage /> : <Navigate to="/login" replace />} />

        <Route path="/category" element={accessToken ? <CategoryPage /> : <Navigate to="/login" replace />} />
        <Route path="/create" element={accessToken ? <CreatePostPage /> : <Navigate to="/login" replace />} />


        <Route path="/item/:type/:id" element={<ItemPage />} />
        <Route path="/item/:type/:id/apply" element={<RentalApplyPage />}/>
        <Route path="/item/:type/:id/confirm" element={<RentalConfirmPage />}/>
        <Route path="/item/rental/:id/complete" element={<RentalCompletePage />}/>

        <Route path="/rental" element={accessToken ? <RentalPage /> : <Navigate to="/login" replace />} />
        
        {/* 글 등록 관련 페이지 */}
        <Route path="/create" element={accessToken ? <CreatePostPage /> : <Navigate to="/login" replace />} />
        <Route path="/create/rental" element={accessToken ? <RentalPage /> : <Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;