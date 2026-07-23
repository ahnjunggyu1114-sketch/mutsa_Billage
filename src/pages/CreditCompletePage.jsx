import { useNavigate, useLocation } from "react-router-dom";
import completeIcon from "../assets/충전크레딧완료.png";

function CreditCompletePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 이전 충전 페이지(CreditChargePage)에서 전달받은 금액 (기본값: 10,000)
  const amount = location.state?.amount || 10000;

  // ✨ 확인 버튼 및 헤더 뒤로가기 클릭 시 마이페이지로 이동 (히스토리 덮어쓰기)
  const handleGoToMyPage = () => {
    navigate("/mypage", { replace: true });
  };

  return (
    <div className="relative w-full min-h-screen bg-white max-w-[402px] mx-auto overflow-y-auto pb-[90px]">
      
      {/* 1. 상단 헤더 */}
      <div className="w-full h-[60px] px-[24px] flex items-center border-b border-[#F4F4F4] relative">
        <button 
          onClick={handleGoToMyPage} 
          className="text-[18px] font-[600] text-black absolute left-[24px]"
        >
          &lt;
        </button>
        <h1 
          className="w-full text-center text-[18px] font-[700] text-black" 
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          크레딧 충전
        </h1>
      </div>

      {/* 2. 메인 컨텐츠 영역 */}
      <div className="px-[24px] pt-[32px] flex flex-col items-center">
        
        {/* 충전 완료 아이콘 및 타이틀 */}
        <div className="flex flex-col items-center gap-[16px] mb-[32px]">
          <img 
            src={completeIcon} 
            alt="충전 완료" 
            className="w-[60px] h-[60px] object-contain" 
          />
          <h2 
            className="text-[20px] font-[700] text-[#171617]" 
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            충전 완료
          </h2>
        </div>

        {/* 상세 정보 컨테이너 */}
        <div className="w-full flex flex-col gap-[24px]">
          
          {/* 충전 정보 섹션 */}
          <div className="flex flex-col gap-[12px] pb-[20px] border-b border-[#F4F4F4]">
            <h3 
              className="text-[16px] font-[600] text-[#171617]" 
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              충전 정보
            </h3>
            <div className="flex justify-between items-center text-[16px]">
              <span className="text-[#464545] font-[400]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                충전 금액
              </span>
              <span className="text-[#171617] font-[600]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {amount.toLocaleString()} 크레딧
              </span>
            </div>
          </div>

          {/* 결제 정보 섹션 */}
          <div className="flex flex-col gap-[12px]">
            <h3 
              className="text-[16px] font-[600] text-[#171617]" 
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              결제 정보
            </h3>
            
            <div className="flex justify-between items-center text-[16px]">
              <span className="text-[#464545] font-[400]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                결제 요금
              </span>
              <span className="text-[#171617] font-[600]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {amount.toLocaleString()} 크레딧
              </span>
            </div>

            <div className="flex justify-between items-center text-[16px]">
              <span className="text-[#464545] font-[400]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                1 크레딧 가격
              </span>
              <span className="text-[#171617] font-[600]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                1원
              </span>
            </div>

            <div className="flex justify-between items-center text-[18px] pt-[8px]">
              <span className="text-[#171617] font-[600]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                총 결제 금액
              </span>
              <span className="text-[#62B5F5] font-[600]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {amount.toLocaleString()} 원
              </span>
            </div>
          </div>

          {/* ✨ 하단 확인 버튼 (클릭 시 /mypage로 이동) */}
          <button
            onClick={handleGoToMyPage}
            className="w-full h-[49px] bg-[#62B5F5] text-white rounded-[12px] text-[14px] font-[600] mt-[24px] cursor-pointer"
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            확인
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreditCompletePage;