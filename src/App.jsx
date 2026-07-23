import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreatePostPage from "./pages/CreatePostPage";
import GroupBuyPage from "./pages/GroupBuyPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import RentalPage from "./pages/RentalPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/group-buy" element={<GroupBuyPage />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;