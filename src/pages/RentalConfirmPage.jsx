import { useLocation, useNavigate, useParams } from "react-router-dom";

function RentalConfirmPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        item,
        rentalDays,
        pickupDate,
        reason,
        message,
    } = location.state || {};

    if (!item) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                신청 정보가 없습니다.
            </main>
        );
    }

    const totalPrice = Number(item.price) * Number(rentalDays);

    const imageUrl =
        item.imageUrl ??
        item.image_url;

    const handleConfirm = () => {
        navigate(`/item/rental/${id}/complete`, {
            state: {
                item,
                rentalDays,
                pickupDate,
                reason,
                message,
                totalPrice,
            },
        });
    };

    return (
        <main className="min-h-screen bg-white px-7 pb-32 pt-7">

            {/* 대여 물품 */}

            <section>
                <h2 className="text-[22px] font-bold">
                    대여 물품
                </h2>

                <div
                    className="
                        mt-4 flex items-center
                        rounded-[22px]
                        border border-[#EEEEEE]
                        px-5 py-5
                    "
                >
                    <div className="h-[90px] w-[90px] overflow-hidden rounded-lg">
                        <img
                            src={imageUrl}
                            alt={item.title}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="ml-5">
                        <h3 className="text-[20px] font-semibold">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-[16px]">
                            1일 {Number(item.price).toLocaleString()} 크레딧
                        </p>
                    </div>
                </div>
            </section>

            {/* 신청 정보 */}

            <section className="mt-10">

                <h2 className="text-[22px] font-bold">
                    신청 정보
                </h2>

                <div className="mt-6 space-y-5">

                    <InfoRow
                        label="대여 기간"
                        value={`${rentalDays}일`}
                    />

                    <InfoRow
                        label="수령 희망일"
                        value={pickupDate}
                    />

                    <InfoRow
                        label="대여 이유"
                        value={reason || "-"}
                    />

                    <InfoRow
                        label="메시지"
                        value={message || "-"}
                    />

                </div>

            </section>

            <div className="my-9 border-t border-[#EEEEEE]" />

            {/* 결제 정보 */}

            <section>

                <h2 className="text-[22px] font-bold">
                    결제 정보
                </h2>

                <div className="mt-6 space-y-5">

                    <InfoRow
                        label="대여 요금"
                        value={`${Number(item.price).toLocaleString()} 크레딧`}
                    />

                    <InfoRow
                        label="대여 일수"
                        value={`${rentalDays}일`}
                    />

                </div>

                <div className="mt-10 flex items-center justify-between">

                    <span className="text-[22px] font-bold">
                        총 결제 금액
                    </span>

                    <span className="text-[22px] font-bold text-[#62B5F5]">
                        {totalPrice.toLocaleString()} 크레딧
                    </span>

                </div>

            </section>

            {/* 버튼 */}

            <div
                className="
                    fixed bottom-0 left-1/2
                    w-full max-w-[430px]
                    -translate-x-1/2
                    bg-white
                    px-7 pb-7 pt-4
                "
            >
                <button
                    onClick={handleConfirm}
                    className="
                        h-[66px]
                        w-full
                        rounded-[16px]
                        bg-[#62B5F5]
                        text-[20px]
                        font-semibold
                        text-white
                    "
                >
                    확인
                </button>
            </div>

        </main>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex justify-between gap-6">

            <span className="text-[18px] font-medium text-[#4A4A4A]">
                {label}
            </span>

            <span className="text-right text-[18px] text-[#4A4A4A] whitespace-pre-wrap">
                {value}
            </span>

        </div>
    );
}

export default RentalConfirmPage;