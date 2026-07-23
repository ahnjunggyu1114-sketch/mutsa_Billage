import { useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center py-[14px] mb-[24px] w-full">
      <button 
        onClick={() => navigate(-1)} 
        className="absolute left-0 text-[18px] text-[#171617]"
      >
        ⟨
      </button>
      <h1 className="text-[16px] font-[600] text-[#171617]">{title}</h1>
    </div>
  );
}

export default Header;