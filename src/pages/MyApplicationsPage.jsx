import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyApplicationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("전체");

  // 나중에 .env에서 가져온 API 주소를 쓸 때의 예시:
  // const API_URL = import.meta.env.VITE_API_BASE_URL;

  // 피그마 디자인 기반 목데이터
  const items = [
    { 
      id: 1, 
      type: "rental", 
      title: "전동 드드릴", 
      subtitle: "홍익대학교 정문", 
      price: "1일 1000원", 
      image: "https://via.placeholder.com/120" 
    },
    { 
      id: 2, 
      type: "group", 
      title: "코디 화장지 30롤", 
      subtitle: "3명 참여중", 
      price: "6,900원", 
      image: "https://via.placeholder.com/120" 
    },
  ];

  const filteredItems = items.filter(item => {
    if (activeTab === "전체") return true;
    if (activeTab === "공동구매" && item.type === "group") return true;
    if (activeTab === "대여" && item.type === "rental") return true;
    return false;
  });

  return (
    <div className="relative w-full min-h-screen bg-white max-w-[402px] mx-auto overflow-y-auto pb-[90px]">
      
      {/* 1. 상단 헤더 (높이 60px, 하단 테두리 1px #F4F4F4) */}
      <div className="w-full h-[60px] px-[24px] flex items-center border-b border-[#F4F4F4] relative">
        <button onClick={() => navigate(-1)} className="text-[18px] font-[600] text-black absolute left-[24px]">
          &lt;
        </button>
        <h1 className="w-full text-center text-[18px] font-[700] text-black" style={{ fontFamily: 'Pretendard, sans-serif' }}>
          신청 목록
        </h1>
      </div>

      {/* 2. 탭 메뉴 (전체 / 공동구매 / 대여) */}
      <div className="flex w-full border-b border-[#EEEEEE]">
        {["전체", "공동구매", "대여"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-[41px] flex items-center justify-center text-[14px] font-[600] transition relative ${
              activeTab === tab ? "text-[#62B5F5]" : "text-[#747374]"
            }`}
            style={{ fontFamily: 'Pretendard, sans-serif' }}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#62B5F5]"></div>
            )}
          </button>
        ))}
      </div>

      {/* 3. 신청 목록 아이템 카드 리스트 (패딩 상하 16 좌우 16, 간격 20px) */}
      <div className="px-[24px] pt-[20px] flex flex-col gap-[20px]">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="w-full bg-[#FCFCFC] border border-[#F4F4F4] rounded-[16px] p-[16px] flex gap-[16px] items-center"
          >
            {/* 상품 썸네일 이미지 (120 x 120, 모서리 8px) */}
            <div className="w-[120px] h-[120px] bg-[#A2A2A2] rounded-[8px] flex-shrink-0 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>

            {/* 상품 정보 텍스트 영역 */}
            <div className="flex flex-col gap-[4px] flex-1">
              {/* 대여 / 공동구매 뱃지 */}
              <span 
                className="inline-flex items-center justify-center w-fit px-[8px] py-[2px] border border-[#62B5F5] rounded-[4px] text-[11px] font-[600] text-[#62B5F5] bg-[#EAF5FE]"
                style={{ fontFamily: 'Pretendard, sans-serif' }}
              >
                {item.type === 'rental' ? '대여' : '공동구매'}
              </span>

              {/* 타이틀 (14px SemiBold, #171617) */}
              <h3 className="text-[14px] font-[600] text-[#171617] leading-[150%]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {item.title}
              </h3>

              {/* 부가 설명 (14px Regular, #464545) */}
              <p className="text-[14px] font-[400] text-[#464545] leading-[150%]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {item.subtitle}
              </p>

              {/* 가격 (14px SemiBold, #171617) */}
              <span className="text-[14px] font-[600] text-[#171617] mt-[4px] leading-[150%]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplicationsPage;