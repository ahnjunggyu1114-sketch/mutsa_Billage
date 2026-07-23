import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import cameraIcon from '../assets/카메라.png';

// 1️⃣ 함수 이름을 RentalPage로 변경
function RentalPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // 폼 상태 관리
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [tradeType, setTradeType] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const isFormValid = 
    imagePreview !== null &&
    title.trim() !== '' &&
    description.trim() !== '' &&
    location.trim() !== '' &&
    price.trim() !== '' &&
    tradeType !== null;

  const handleSubmit = () => {
    if (!isFormValid) return;
    alert('글 등록이 완료되었습니다!');
    navigate('/');
  };

  return (
    <div 
      className="relative w-full min-h-screen bg-white max-w-[400px] mx-auto flex flex-col justify-between px-[20px] pt-[20px] pb-[40px]"
      style={{ fontFamily: 'Pretendard, sans-serif' }}
    >
      <div>
        <Header title="글 등록" />

        <div className="flex flex-col gap-[24px] mt-[10px]">
          
          {/* 1. 사진 추가 영역 */}
          <div>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-[160px] rounded-[8px] bg-[#FFFFFF] border border-[#F4F4F4] flex flex-col items-center justify-center cursor-pointer overflow-hidden relative shadow-[0px_15px_40px_rgba(206,206,206,0.08)]"
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="업로드된 사진" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-[8px]">
                  <img src={cameraIcon} alt="카메라" className="w-[48px] h-[48px] object-contain" />
                  <span className="text-[14px] text-[#A3A3A3] font-[400]">사진을 추가해주세요.</span>
                </div>
              )}
            </div>
          </div>

          {/* 2. 제목 입력 */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[18px] font-[600] text-[#171617] leading-[100%]">제목</label>
            <input 
              type="text"
              placeholder="제품명을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-[48px] px-[20px] py-[12px] rounded-[8px] border border-[#F4F4F4] bg-white text-[16px] text-[#171617] placeholder-[#CECECE] focus:outline-none"
            />
          </div>

          {/* 3. 상세 설명 입력 */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[18px] font-[600] text-[#171617] leading-[100%]">상세 설명</label>
            <textarea 
              placeholder="한줄 소개를 입력해주세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[160px] px-[20px] py-[12px] rounded-[8px] border border-[#F4F4F4] bg-white text-[16px] text-[#171617] placeholder-[#CECECE] resize-none focus:outline-none leading-[150%]"
            />
          </div>

          {/* 4. 거래 지역 입력 */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[18px] font-[600] text-[#171617] leading-[100%]">거래 지역</label>
            <input 
              type="text"
              placeholder="거래지역을 입력해주세요."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full h-[48px] px-[20px] py-[12px] rounded-[8px] border border-[#F4F4F4] bg-white text-[16px] text-[#171617] placeholder-[#CECECE] focus:outline-none"
            />
          </div>

          {/* 5. 대여비 입력 */}
          <div className="flex flex-col gap-[10px]">
            <label className="text-[18px] font-[600] text-[#171617] leading-[100%]">대여비 (1일 기준)</label>
            <div className="relative w-full flex items-center">
              <input 
                type="number"
                placeholder="대여비를 입력해주세요."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-[48px] pl-[20px] pr-[45px] py-[12px] rounded-[8px] border border-[#F4F4F4] bg-white text-[16px] text-[#171617] placeholder-[#CECECE] focus:outline-none"
              />
              <span className="absolute right-[20px] text-[16px] font-[400] text-[#464545]">원</span>
            </div>
          </div>

          {/* 6. 빌리기 / 빌려주기 토글 */}
          <div className="flex gap-[10px] w-full mt-[6px]">
            <button
              type="button"
              onClick={() => setTradeType('borrow')}
              className={`flex-1 h-[40px] rounded-[8px] text-[14px] font-[400] transition-colors ${
                tradeType === 'borrow'
                  ? 'bg-[#464545] text-white border border-[#464545] font-[600]'
                  : 'bg-[#FCFCFC] text-[#747374] border border-[#D1D0D1]'
              }`}
            >
              빌리기
            </button>
            <button
              type="button"
              onClick={() => setTradeType('lend')}
              className={`flex-1 h-[40px] rounded-[8px] text-[14px] font-[400] transition-colors ${
                tradeType === 'lend'
                  ? 'bg-[#464545] text-white border border-[#464545] font-[600]'
                  : 'bg-[#FCFCFC] text-[#747374] border border-[#D1D0D1]'
              }`}
            >
              빌려주기
            </button>
          </div>

        </div>
      </div>

      {/* 완료 버튼 */}
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`w-full h-[49px] rounded-[12px] font-[600] text-[16px] text-white transition-colors flex items-center justify-center mt-[40px] ${
          isFormValid
            ? 'bg-[#62B5F5] cursor-pointer'
            : 'bg-[#D1D0D1] cursor-not-allowed'
        }`}
      >
        완료
      </button>
    </div>
  );
}

// 2️⃣ export default 이름도 RentalPage로 변경
export default RentalPage;