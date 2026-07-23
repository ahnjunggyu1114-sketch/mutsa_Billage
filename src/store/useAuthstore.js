// src/store/useAuthStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // 1. 처음 앱을 켤 때 로컬 스토리지에 토큰이 있는지 확인
  isLoggedIn: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken') || null,

  // 2. 로그인 성공 시 실행할 함수 (토큰 저장 & 상태 변경)
  login: (token) => {
    localStorage.setItem('accessToken', token);
    set({ isLoggedIn: true, accessToken: token });
  },

  // 3. 로그아웃 시 실행할 함수 (토큰 삭제 & 상태 변경)
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ isLoggedIn: false, accessToken: null });
  },
}));

export default useAuthStore;