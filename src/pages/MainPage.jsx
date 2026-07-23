import { useState } from "react";

import GroupBuySection from "../components/mainpages/GroupBuySection";
import MainCategoryFilter from "../components/mainpages/MainCategoryFilter";
import RentalSection from "../components/mainpages/RentalSection";

import searchIcon from "../assets/search.svg";

const MainPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <main className="pb-24">
            <section className="px-5 pt-6">
                <h1 className="text-2xl font-bold pb-5 ">
                    안녕하세요! 안정규님
                </h1>
            </section>

            <section className="mt-6 px-5">
                <div
                    className="
                        flex h-[56px] w-full items-center
                        gap-[10px]
                        rounded-xl
                        border border-[rgba(238,238,238,0.60)]
                        bg-[rgba(252,252,252,0.75)]
                        px-4
                    "
                >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                        <img
                            src={searchIcon}
                            alt="검색"
                            className="h-7 w-7 object-contain"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="(기능 구현 X) 필요한 물건을 검색해보세요"
                        className="
                            min-w-0 flex-1
                            bg-transparent
                            text-base text-[#464545]
                            outline-none
                            placeholder:text-[#A2A2A2]
                        "
                    />
                </div>
            </section>

            <MainCategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {(selectedCategory === "all" ||
                selectedCategory === "groupBuy") && (
                <GroupBuySection />
            )}

            {(selectedCategory === "all" ||
                selectedCategory === "rental") && (
                <RentalSection />
            )}
        </main>
    );
};

export default MainPage;