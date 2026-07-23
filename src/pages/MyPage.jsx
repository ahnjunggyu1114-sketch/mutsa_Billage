import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthstore";
import Navbar from "../components/NavBar";

function MyPage() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    alert("로그아웃 되었습니다.");
    navigate("/login", { replace: true });
  };

  return (
    <div className="relative w-full min-h-screen bg-white max-w-[402px] mx-auto overflow-y-auto pb-[90px]">
      
      {/* 상단 헤더 */}
      <div className="w-full h-[60px] px-[24px] flex items-center justify-center border-b border-[#F4F4F4]">
        <h1 className="text-[18px] font-[700] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          마이페이지
        </h1>
      </div>

      {/* 메인 컨텐츠 영역 */}
      <div className="px-[24px] pt-[20px] flex flex-col gap-[24px]">
        
        {/* 1. 내 정보 섹션 */}
        <div className="w-full bg-[#FCFCFC] border border-[#F4F4F4] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
          <span className="text-[12px] font-[600] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            내정보
          </span>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[16px] font-[700] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              김홍대
            </span>
            <span className="text-[12px] text-[#747374] flex items-center gap-[4px]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[#62B5F5]"></span>
              홍익대학교
            </span>
          </div>
        </div>

        {/* 2. 크레딧 섹션 */}
        <div className="w-full bg-[#FCFCFC] border border-[#F4F4F4] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
          <span className="text-[12px] font-[600] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            크레딧
          </span>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[12px] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                총 크레딧
              </span>
              <span className="text-[14px] font-[400] text-[#62B5F5] leading-[150%]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                5,000
              </span>
            </div>
            <button 
              onClick={() => navigate('/mypage/charge')}
              className="px-[16px] py-[8px] bg-[#62B5F5] text-[#FCFCFC] text-[11px] font-[600] rounded-[8px] tracking-[-0.2px]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              크레딧 충전하기
            </button>
          </div>
        </div>

        {/* 3. 신청 목록 섹션 */}
        <div className="w-full bg-[#FCFCFC] border border-[#F4F4F4] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
          <span className="text-[12px] font-[600] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            신청 목록
          </span>
          <div 
            onClick={() => navigate('/mypage/applications')}
            className="flex items-center justify-between cursor-pointer py-[4px]"
          >
            <span className="text-[16px] font-[600] text-[#62B5F5] tracking-[-0.5%]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              신청 목록 전체 보기
            </span>
            <span className="text-[#747374]">&gt;</span>
          </div>
        </div>

        {/* 4. 로그아웃 버튼 */}
        <button 
          onClick={handleLogout}
          className="w-full h-[49px] bg-[#D1D0D1] text-white text-[14px] font-[600] rounded-[8px] mt-[10px]"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          로그아웃
        </button>

      </div>
    </div>
  );
}

export default MyPage;