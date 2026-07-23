import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 1. URL에서 백엔드가 보내준 파라미터 값들 뽑아내기
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const isNewUser = searchParams.get('isNewUser');
    const error = searchParams.get('error');

    // 2. 에러가 발생한 경우 (로그인 실패)
    if (error) {
      alert('소셜 로그인에 실패했습니다. 다시 시도해주세요.');
      navigate('/login', { replace: true });
      return;
    }

    // 3. 로그인이 성공하여 토큰이 들어온 경우
    if (accessToken) {
      // 브라우저 저장소(로컬 스토리지)에 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }

      // 신규 유저인지 기존 유저인지에 따라 이동할 페이지 결정
      if (isNewUser === 'true') {
        // 신규 유저는 학교 선택 페이지로
        navigate('/school', { replace: true });
      } else {
        // 기존 유저는 메인 홈으로
        navigate('/', { replace: true });
      }
    }
  }, [navigate, searchParams]);

  return (
    // 찰나의 순간 동안 보여질 로딩 화면
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-[16px] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        로그인 처리 중입니다...
      </p>
    </div>
  );
}

export default OAuthCallbackPage;