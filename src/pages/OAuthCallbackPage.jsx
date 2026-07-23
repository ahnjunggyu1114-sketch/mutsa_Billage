// src/pages/OAuthCallbackPage.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// ✨ store 가져오기
import useAuthStore from '../store/useAuthstore'; 

function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // ✨ 로그인 함수 꺼내오기
  const { login } = useAuthStore(); 

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const isNewUser = searchParams.get('isNewUser');
    const error = searchParams.get('error');

    if (error) {
      alert('소셜 로그인에 실패했습니다. 다시 시도해주세요.');
      navigate('/login', { replace: true });
      return;
    }

    if (!accessToken) {
      alert('로그인 토큰을 전달받지 못했습니다.');

      navigate('/login', { replace: true });

      return;

    }
    login(accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }

      if (isNewUser === 'true') {
        navigate('/school', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    
  }, [navigate, searchParams, login]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-[16px] text-[#747374]" style={{ fontFamily: 'Pretendard, sans-serif' }}>
        로그인 처리 중입니다...
      </p>
    </div>
  );
}

export default OAuthCallbackPage;