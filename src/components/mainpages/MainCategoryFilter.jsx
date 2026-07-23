import allActiveIcon from "../../assets/fillter/filterall_blue.svg";
import allInactiveIcon from "../../assets/fillter/fillterall.svg";

import groupBuyActiveIcon from "../../assets/fillter/fillter1_blue.svg";
import groupBuyInactiveIcon from "../../assets/fillter/fillter1.svg";

import rentalActiveIcon from "../../assets/fillter/fillter2_blue.svg";
import rentalInactiveIcon from "../../assets/fillter/fillter2.svg";


const categories = [
    {
        id: "all",
        label: "전체",
        activeIcon: allActiveIcon,
        inactiveIcon: allInactiveIcon,
    },
    {
        id: "groupBuy",
        label: "공동구매",
        activeIcon: groupBuyActiveIcon,
        inactiveIcon: groupBuyInactiveIcon,
    },
    {
        id: "rental",
        label: "대여",
        activeIcon: rentalActiveIcon,
        inactiveIcon: rentalInactiveIcon,
    },
];

const MainCategoryFilter = ({
    selectedCategory,
    onSelectCategory,
}) => {
    return (
        <section className="mt-8 px-5">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#171717]">
                    카테고리
                </h2>

                <button
                    type="button"
                    onClick={() => onSelectCategory("all")}
                    className="text-base text-[#A2A2A2]"
                >
                    전체보기
                </button>
            </div>

            <div className="mt-8 flex gap-8">
                {categories.map((category) => {
                    const isActive =
                        selectedCategory === category.id;

                    const iconSrc = isActive
                        ? category.activeIcon
                        : category.inactiveIcon;

                    return (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() =>
                                onSelectCategory(category.id)
                            }
                            className="flex flex-col items-center gap-4"
                        >
                            <div
                                className="
                                    flex h-[72px] w-[72px]
                                    items-center justify-center
                                    rounded-[100px]
                                    border border-[#D1D0D1]
                                    bg-[#F4F4F4]
                                "
                            >
                                {iconSrc ? (
                                    <img
                                        src={iconSrc}
                                        alt={`${category.label} 아이콘`}
                                        className="h-9 w-9 object-contain"
                                    />
                                ) : (
                                    <div className="h-9 w-9" />
                                )}
                            </div>

                            <span
                                className={`text-lg font-semibold ${
                                    isActive
                                        ? "text-[#62B5F5]"
                                        : "text-[#464545]"
                                }`}
                            >
                                {category.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default MainCategoryFilter;