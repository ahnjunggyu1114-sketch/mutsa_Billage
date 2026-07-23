import { useNavigate } from 'react-router-dom';

function Login() {
  // 1. 페이지 이동을 위한 리모컨(navigate) 가져오기
  const navigate = useNavigate();

  // 2. 임시 로그인 버튼 클릭 시 실행될 함수
  const handleTempLogin = () => {
    // 나중에는 여기에 진짜 카카오 로그인 로직이 들어가지만,
    // 지금은 테스트를 위해 누르면 바로 홈 화면으로 이동시킵니다!
    navigate('/home');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9'
    }}>
      {/* 타이틀 구역 */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          대학생을 위한 렌탈 마켓
        </h1>
        <p style={{ color: '#666', marginTop: '10px' }}>
          빌리지(Billage)에 오신 것을 환영합니다!
        </p>
      </div>

      {/* 카카오 로그인 UI 버튼 */}
      <button 
        onClick={handleTempLogin}
        style={{
          width: '300px',
          padding: '15px',
          backgroundColor: '#FEE500', // 카카오 공식 노란색
          color: '#000000',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        카카오계정으로 로그인
      </button>

      {/* 디자인 나오기 전 개발용 안내 문구 */}
      <p style={{ fontSize: '12px', color: '#999', marginTop: '20px' }}>
        *현재 버튼 클릭 시 홈 화면으로 바로 이동합니다. (프론트엔드 테스트용)
      </p>
    </div>
  );
}

export default Login;