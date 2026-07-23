function LoginPage() {
  
  // ✨ 백엔드 요청에 맞게 수정한 카카오 로그인 함수
  const handleKakaoLogin = () => {
    const API = "https://api.billage.site";
    const callback = `${window.location.origin}/oauth/callback`;

    window.location.href =
      `${API}/oauth2/authorization/kakao` +
      `?redirect_uri=${encodeURIComponent(callback)}`;
  };

  return (
    // 모바일 화면 비율(아이폰)에 맞춘 전체 컨테이너
    <div className="relative w-full h-screen bg-white max-w-[400px] mx-auto overflow-hidden">
      
      {/* 1. Billage 메인 로고 */}
      <h1 
        className="absolute top-[272px] left-[12px] text-[#62B5F5] text-[100px] font-[800] leading-none"
        style={{ fontFamily: 'Gilroy, sans-serif' }}
      >
        Billage
      </h1>

      {/* 2. 서브 텍스트 */}
      <p 
        className="absolute top-[413px] left-[18px] text-[#747374] text-[16px] font-[400] leading-[150%]"
        style={{ fontFamily: 'Pretendard, sans-serif' }}
      >
        빌려쓰고, 함께 아끼는<br />
        우리 학교 생활
      </p>

      {/* 3. 카카오 로그인 버튼 */}
      <button 
        onClick={handleKakaoLogin}
        className="absolute top-[742px] left-[20px] w-[362px] h-[56px] bg-[#FEE500] rounded-[16px] flex items-center justify-center gap-[10px]"
      >
        {/* 카카오 말풍선 아이콘 임시 대체 */}
        <div className="w-[18px] h-[18px] bg-[#000000] rounded-full opacity-85"></div>
        
        {/* 카카오 로그인 글씨 */}
        <span 
          className="text-black/85 text-[14px] font-[600] leading-[150%]"
          style={{ fontFamily: 'Pretendard, sans-serif' }}
        >
          카카오 로그인
        </span>
      </button>

    </div>
  );
}

export default LoginPage;