import { useNavigate } from "react-router-dom";

function CategoryCard({ item }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/item/${item.type}/${item.id}`);
    };
    return (
        <article onClick={handleCardClick} className="flex gap-4 border-b border-[#EEEEEE] bg-white px-4 py-4">
            <div className="h-[88px] w-[88px] shrink-0 rounded-lg bg-[#A2A2A2]">
                {item.imageUrl && (
                    <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full rounded-lg object-cover"
                    />
                )}
            </div>

            <div className="flex flex-1 flex-col">
                <span className="w-fit rounded border border-[#62B5F5] px-1 py-[2px] text-[10px] text-[#62B5F5]">
                    {item.type === "groupBuy" ? "공동구매" : "대여"}
                </span>

                <h3 className="mt-1 text-sm font-semibold text-[#222222]">
                    {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#666666]">
                    {item.type === "groupBuy"
                        ? `${item.currentParticipants ?? 0}/${item.capacity ?? 0}명 참여`
                        : item.rentalPeriod}
                </p>

                <p className="mt-auto text-sm font-semibold text-[#222222]">
                    {Number(item.price).toLocaleString()}원
                </p>
            </div>
        </article>
    );
}

export default CategoryCard;