const GroupBuyCard = ({ item }) => {
    return (
        <article
            className="
                flex w-full items-center gap-4
                rounded-2xl bg-[#F4F4F4]
                p-4
                shadow-[0_15px_40px_0_rgba(206,206,206,0.08)]
                backdrop-blur-[10px]
            "
        >
            <div
                className="
                    h-[118px] w-[118px]
                    shrink-0 overflow-hidden
                    bg-[#D9EAF8]
                "
            >
                {item.imageUrl ? (
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover"
                    />
                ) : null}
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="truncate text-lg font-semibold text-[#171717]">
                    {item.title}
                </h3>

                <p className="mt-2 text-sm text-[#464545]">
                    현재 {item.currentParticipants}명 참여중
                </p>

                <p className="mt-8 text-xl font-semibold text-[#171717]">
                    {item.price.toLocaleString()}원
                </p>
            </div>
        </article>
    );
};

export default GroupBuyCard;