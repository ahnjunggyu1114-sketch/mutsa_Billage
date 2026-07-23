import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. 새로 만든 공통 Header 컴포넌트 불러오기
import Header from '../components/Header';

// 2. assets 폴더 내 아이콘 불러오기 (현재 사용 중인 4개 파일)
import rentalDefaultIcon from '../assets/대여기본.png';
import rentalSelectedIcon from '../assets/대여선택o.png';
import groupDefaultIcon from '../assets/공동구매기본.png';
import groupUnselectedIcon from '../assets/공동구매선택x.png';

function CreatePostPage() {
  const navigate = useNavigate();
  
  // 선택 상태: null (기본) | 'rental' (대여) | 'group' (공동구매)
  const [selectedType, setSelectedType] = useState(null);

  const handleNext = () => {
    if (selectedType === 'rental') {
      navigate('/create/rental');
    } else if (selectedType === 'group') {
      navigate('/create/group-buy');
    }
  };

  // 1. 대여 카드 아이콘 분기
  const getRentalIcon = () => {
    if (selectedType === 'rental') return rentalSelectedIcon;
    return rentalDefaultIcon;
  };

  // 2. 공동구매 카드 아이콘 분기
  const getGroupIcon = () => {
    if (selectedType === 'rental') return groupUnselectedIcon;
    return groupDefaultIcon;
  };

  return (
    <div 
      className="relative w-full min-h-screen bg-white max-w-[400px] mx-auto flex flex-col justify-between px-[20px] pt-[20px] pb-[40px]"
      style={{ fontFamily: 'Pretendard, sans-serif' }}
    >
      {/* 상단 영역 (헤더 + 타이틀 + 선택 카드 목록) */}
      <div>
        {/* ✨ 공통 Header 컴포넌트 적용 */}
        <Header title="글 등록" />

        {/* 타이틀 */}
        <h2 className="text-[20px] font-[700] text-[#171617] mb-[24px] leading-[140%]">
          어떤 물건을 등록하시나요?
        </h2>

        {/* 카드 목록 영역 */}
        <div className="flex flex-col gap-[16px]">
          
          {/* 1. 대여 카드 */}
          <div
            onClick={() => setSelectedType('rental')}
            className={`w-full p-[16px] rounded-[16px] border transition-all cursor-pointer flex items-center justify-between ${
              selectedType === 'rental'
                ? 'border-[#62B5F5] bg-white'
                : 'border-[#E5E5E5] bg-white'
            }`}
          >
            <div className="flex flex-col justify-center">
              <span
                className={`text-[18px] font-[600] mb-[4px] leading-[140%] ${
                  selectedType === 'rental'
                    ? 'text-[#62B5F5]'
                    : selectedType === 'group'
                    ? 'text-[#464545] opacity-50'
                    : 'text-[#171617]'
                }`}
              >
                대여
              </span>
              <span
                className={`text-[12px] font-[400] leading-[160%] tracking-[-0.015em] whitespace-pre-line ${
                  selectedType === 'rental'
                    ? 'text-[#62B5F5]'
                    : selectedType === 'group'
                    ? 'text-[#464545] opacity-50'
                    : 'text-[#464545]'
                }`}
              >
                공구나 생활용품을{'\n'}빌려주거나 빌릴 수 있어요.
              </span>
            </div>
            
            <img
              src={getRentalIcon()}
              alt="대여 아이콘"
              className="w-[48px] h-[48px] object-contain"
            />
          </div>

          {/* 2. 공동구매 카드 */}
          <div
            onClick={() => setSelectedType('group')}
            className={`w-full p-[16px] rounded-[16px] border transition-all cursor-pointer flex items-center justify-between ${
              selectedType === 'group'
                ? 'border-[#62B5F5] bg-white'
                : 'border-[#E5E5E5] bg-white'
            }`}
          >
            <div className="flex flex-col justify-center">
              <span
                className={`text-[18px] font-[600] mb-[4px] leading-[140%] ${
                  selectedType === 'group'
                    ? 'text-[#62B5F5]'
                    : selectedType === 'rental'
                    ? 'text-[#464545] opacity-50'
                    : 'text-[#171617]'
                }`}
              >
                공동구매
              </span>
              <span
                className={`text-[12px] font-[400] leading-[160%] tracking-[-0.015em] whitespace-pre-line ${
                  selectedType === 'group'
                    ? 'text-[#62B5F5]'
                    : selectedType === 'rental'
                    ? 'text-[#464545] opacity-50'
                    : 'text-[#464545]'
                }`}
              >
                생필품을 함께 구매할{'\n'}멤버를 모집할 수 있어요.
              </span>
            </div>

            <img
              src={getGroupIcon()}
              alt="공동구매 아이콘"
              className="w-[48px] h-[48px] object-contain"
            />
          </div>

        </div>
      </div>

      {/* 하단 다음 버튼 */}
      <button
        onClick={handleNext}
        disabled={!selectedType}
        className={`w-full h-[49px] rounded-[12px] font-[600] text-[16px] text-white transition-colors flex items-center justify-center mt-[40px] ${
          selectedType
            ? 'bg-[#62B5F5] cursor-pointer'
            : 'bg-[#D9D9D9] cursor-not-allowed'
        }`}
      >
        다음
      </button>
    </div>
  );
}

export default CreatePostPage;