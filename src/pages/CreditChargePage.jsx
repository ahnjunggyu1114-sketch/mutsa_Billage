import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreditChargePage() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(null);

  // ✨ 백엔드 API 연결 시 사용할 환경 변수
  // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const amounts = [1000, 2000, 3000, 5000, 7000, 10000];

  const handleCharge = () => {
    if (!selectedAmount) return;
    // 선택된 충전 금액을 가지고 완료 페이지로 이동
    navigate("/mypage/complete", { state: { amount: selectedAmount } });
  };

  return (
    <div className="relative w-full min-h-screen bg-white max-w-[402px] mx-auto overflow-y-auto pb-[90px]">
      
      {/* 1. 상단 헤더 (높이 60px, 하단 테두리 1px #F4F4F4) */}
      <div className="w-full h-[60px] px-[24px] flex items-center border-b border-[#F4F4F4] relative">
        <button 
          onClick={() => navigate(-1)} 
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
      <div className="px-[24px] pt-[20px] flex flex-col gap-[24px]">
        
        {/* 1크레딧 / 1원 안내 */}
        <div className="flex items-center justify-between">
          <span 
            className="text-[18px] font-[600] text-[#171617]" 
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            1크레딧
          </span>
          <span 
            className="text-[18px] font-[600] text-[#62B5F5]" 
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            1원
          </span>
        </div>

        {/* 충전 금액 선택 섹션 */}
        <div className="flex flex-col gap-[8px]">
          <h2 
            className="text-[18px] font-[600] text-[#171617]" 
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            충전 금액
          </h2>

          {/* 2열 그리드 버튼 (높이 47px, 둥글기 8px) */}
          <div className="grid grid-cols-2 gap-[8px]">
            {amounts.map((amount) => {
              const isSelected = selectedAmount === amount;
              return (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`h-[47px] rounded-[8px] text-[16px] font-[600] transition flex items-center justify-center border ${
                    isSelected
                      ? "bg-[#D8E8F5] border-[#BADCF5] text-[#62B5F5]"
                      : "bg-[#FCFCFC] border-[#F4F4F4] text-[#62B5F5]"
                  }`}
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {amount.toLocaleString()} 크레딧
                </button>
              );
            })}
          </div>
        </div>

        {/* 하단 충전하기 버튼 (높이 49px, 둥글기 12px, 비활성화/활성화) */}
        <button
          onClick={handleCharge}
          disabled={!selectedAmount}
          className={`w-full h-[49px] rounded-[12px] text-[14px] font-[600] text-white transition mt-[20px] ${
            selectedAmount
              ? "bg-[#62B5F5] cursor-pointer"
              : "bg-[#D1D0D1] cursor-not-allowed"
          }`}
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          충전하기
        </button>

      </div>
    </div>
  );
}

export default CreditChargePage;