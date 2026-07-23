import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import schoolLogo from '../assets/홍익로고.svg';

function SchoolSelectPage() {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState('');

  return (
    <div className="relative w-full h-screen bg-white max-w-[400px] mx-auto overflow-hidden flex flex-col justify-between px-[20px] pt-[80px] pb-[40px]">
      
      {/* 위쪽 영역 (로고 및 검색 폼) */}
      <div className="flex flex-col">
        
        {/* 학교 로고 영역: 자리는 항상 차지하고 있으되, 텍스트가 없으면 투명하게 숨김 (레이아웃 밀림 방지!) */}
        <div className="flex justify-center mb-[40px] h-[153px] items-center">
          <img 
            src={schoolLogo} 
            alt="학교 로고" 
            className={`w-[153px] h-[153px] object-contain transition-opacity duration-200 ${
              schoolName.trim() ? 'opacity-100' : 'opacity-0'
            }`} 
          />
        </div>

        {/* 타이틀: 학교 이름 검색 */}
        <h2 
          className="text-[18px] font-[400] text-[#171617] mb-[12px] leading-[140%]"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          학교 이름 검색
        </h2>
        
        {/* 검색 입력창 (이제 글자를 쳐도 위치가 절대 움직이지 않습니다!) */}
        <input
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          placeholder="학교 이름을 입력해주세요."
          className="w-full h-[48px] px-[16px] bg-[#FAFAFA] border border-[#E5E5E5] rounded-[12px] text-[16px] text-[#171617] placeholder-[#464545] outline-none focus:border-[#62B5F5]"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        />
      </div>

      {/* 하단 '다음' 버튼 */}
      <button
        onClick={() => navigate('/')}
        disabled={!schoolName.trim()}
        className={`w-full h-[49px] rounded-[12px] font-[600] text-[16px] text-white transition-colors flex items-center justify-center ${
          schoolName.trim() 
            ? 'bg-[#62B5F5]' 
            : 'bg-[#D9D9D9] cursor-not-allowed'
        }`}
        style={{ fontFamily: 'Pretendard, sans-serif' }}
      >
        다음
      </button>

    </div>
  );
}

export default SchoolSelectPage;