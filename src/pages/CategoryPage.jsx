import { useState } from "react";

import CategoryTabs from "../components/categorys/CategoryTabs";
import CategoryList from "../components/categorys/CategoryList";

import groupBuyMockData from "../data/groupBuyMockData";
import rentalMockData from "../data/rentalMockData";

import searchIcon from "../assets/search.svg";


function CategoryPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const rentalItems = rentalMockData.map((item) => ({
        ...item,
        type: "rental",
    }));

    const groupBuyItems = groupBuyMockData.map((item) => ({
        ...item,
        type: "groupBuy",
    }));

    const allItems = [...rentalItems, ...groupBuyItems];

    const filteredItems = {
        all: allItems,
        groupBuy: groupBuyItems,
        rental: rentalItems,
    }[selectedCategory];

    return (
        <main className="min-h-screen px-5 pb-28 pt-5">
            <section className="mt-6 px-5 pb-5">
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
            <CategoryTabs
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <CategoryList items={filteredItems} />
        </main>
    );
}

export default CategoryPage;