import { NavLink } from "react-router-dom";

import homeInactiveIcon from "../assets/icons/home.png";
import homeActiveIcon from "../assets/icons/home_blue.png";

import categoryInactiveIcon from "../assets/icons/category.png";
import categoryActiveIcon from "../assets/icons/category_blue.png";

import createInactiveIcon from "../assets/icons/plus.png";
import createActiveIcon from "../assets/icons/plus_blue.png";

import myPageInactiveIcon from "../assets/icons/my.png";
import myPageActiveIcon from "../assets/icons/my_blue.png";

const navItems = [
  {
    label: "홈",
    path: "/",
    activeIcon: homeActiveIcon,
    inactiveIcon: homeInactiveIcon,
  },
  {
    label: "카테고리",
    path: "/rental",
    activeIcon: categoryActiveIcon,
    inactiveIcon: categoryInactiveIcon,
  },
  {
    label: "등록",
    path: "/create",
    activeIcon: createActiveIcon,
    inactiveIcon: createInactiveIcon,
  },
  {
    label: "마이페이지",
    path: "/mypage",
    activeIcon: myPageActiveIcon,
    inactiveIcon: myPageInactiveIcon,
  },
];

function Navbar() {
  return (
    <nav className="fixed bottom-0 z-50 left-1/2 flex h-24 w-full justify-center -translate-x-1/2 items-center gap-20 rounded-t-[28px] bg-white px-5 py-4">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className="flex w-12 flex-col items-center gap-2 no-underline"
        >
          {({ isActive }) => {
            const iconSrc = isActive
              ? item.activeIcon
              : item.inactiveIcon;

            return (
              <>
                <div className="flex h-8 w-8 items-center justify-center">
                  {iconSrc && (
                    <img
                      src={iconSrc}
                      alt={`${item.label} 아이콘`}
                      className="h-full w-full object-contain"
                    />
                  )}
                </div>

                <span
                  className={`whitespace-nowrap text-sm font-semibold leading-5 ${
                    isActive
                      ? "text-[#62B5F5]"
                      : "text-[#A2A2A2]"
                  }`}
                >
                  {item.label}
                </span>
              </>
            );
          }}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;