function CategoryTabs({ selectedCategory, onSelectCategory }) {
    const tabs = [
        { id: "all", label: "전체" },
        { id: "groupBuy", label: "공동구매" },
        { id: "rental", label: "대여" },
    ];

    return (
        <div className="flex border-b border-[#E8E8E8]">
            {tabs.map((tab) => {
                const isSelected = selectedCategory === tab.id;

                return (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => onSelectCategory(tab.id)}
                        className={`
                            relative flex-1
                            pb-3 pt-2
                            text-[16px] font-medium
                            transition-colors
                            ${
                                isSelected
                                    ? "text-[#62B5F5]"
                                    : "text-[#A2A2A2]"
                            }
                        `}
                    >
                        {tab.label}

                        {isSelected && (
                            <span
                                className="
                                    absolute bottom-[-1px] left-0
                                    h-[2px] w-full
                                    bg-[#62B5F5]
                                "
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
}

export default CategoryTabs;