import { useNavigate, useParams } from "react-router-dom";

import groupBuyMockData from "../data/groupBuyMockData";
import rentalMockData from "../data/rentalMockData";

function ItemPage() {
    const { type, id } = useParams();
    const navigate = useNavigate();

    const isRental = type === "rental";

    const data = isRental
        ? rentalMockData
        : groupBuyMockData;

    const item = data.find(
        (item) => String(item.id) === String(id),
    );

    if (!item) {
        return (
            <main className="flex min-h-screen items-center justify-center px-5">
                <p className="text-sm text-[#A2A2A2]">
                    존재하지 않는 게시글입니다.
                </p>
            </main>
        );
    }

    const imageUrl =
        item.imageUrl ??
        item.image_url;

    const handleApply = () => {
        navigate(`/item/rental/${id}/apply`, {
            state: {
                item,
            },
        });
    };

    return (
        <main className="min-h-screen bg-white pb-28">
            {/* 상품 이미지 */}
            <section className="flex h-[300px] items-center justify-center px-5 py-6">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={item.title}
                        className="h-full w-full rounded-xl object-cover"
                    />
                ) : (
                    <div className="h-full w-full rounded-xl bg-[#D9D9D9]" />
                )}
            </section>

            {/* 상품 기본 정보 */}
            <section className="border-b border-[#EEEEEE] px-5 pb-6">
                <span
                    className="
                        inline-flex rounded
                        border border-[#62B5F5]
                        px-2 py-1
                        text-[11px] font-medium
                        text-[#62B5F5]
                    "
                >
                    {isRental ? "대여" : "공동구매"}
                </span>

                <h1 className="mt-3 text-[20px] font-bold text-[#222222]">
                    {item.title}
                </h1>

                <p className="mt-2 text-[16px] font-bold text-[#62B5F5]">
                    {Number(item.price).toLocaleString()}원
                </p>

                {isRental && item.rentalPeriod && (
                    <p className="mt-2 text-sm text-[#777777]">
                        대여 기간: {item.rentalPeriod}
                    </p>
                )}

                {!isRental && (
                    <p className="mt-2 text-sm text-[#777777]">
                        {item.currentParticipants ?? 0}/
                        {item.capacity ?? 0}명 참여 중
                    </p>
                )}

                {item.writerName && (
                    <p className="mt-4 text-sm text-[#777777]">
                        {item.writerName}
                    </p>
                )}
            </section>

            {/* 상품 소개 */}
            <section className="px-5 py-6">
                <h2 className="text-[16px] font-bold text-[#222222]">
                    상품 소개
                </h2>

                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-[#666666]">
                    {item.description ??
                        item.content ??
                        "등록된 상품 설명이 없습니다."}
                </p>
            </section>

            {/* 하단 신청 버튼 */}
            <div
                className="
                    fixed bottom-0 left-1/2 z-[9999]
                    w-full max-w-[430px]
                    -translate-x-1/2
                    bg-white
                    px-5 pb-6 pt-3
                "
            >
                <button
                    type="button"
                    onClick={handleApply}
                    className="
                        h-[52px] w-full
                        rounded-lg
                        bg-[#62B5F5]
                        text-[16px] font-semibold
                        text-white
                    "
                >
                    {isRental ? "대여 신청하기" : "공동구매 참여하기"}
                </button>
            </div>
        </main>
    );
}

export default ItemPage;