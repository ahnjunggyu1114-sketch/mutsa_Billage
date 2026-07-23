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

function App() {
  // 임시 토큰 값 (true로 바꾸면 로그인된 상태, false로 바꾸면 로그인 안 된 상태를 테스트할 수 있습니다)
  const accessToken = true; // 로그인된 상태

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={accessToken ? <MainPage /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={accessToken ? <Navigate to="/" replace /> : <LoginPage />} />
        
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;