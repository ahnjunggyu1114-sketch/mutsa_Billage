import { useLocation, useNavigate, useParams } from "react-router-dom";

function RentalCompletePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const rentalInfo = location.state;

    if (!rentalInfo?.item) {
        return (
            <main className="flex min-h-screen items-center justify-center px-7">
                <div className="text-center">
                    <p className="text-sm text-[#A2A2A2]">
                        확정된 대여 정보를 찾을 수 없습니다.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="mt-4 text-sm font-semibold text-[#62B5F5]"
                    >
                        홈으로 이동
                    </button>
                </div>
            </main>
        );
    }

    const {
        item,
        rentalDays,
        pickupDate,
        reason,
        message,
        totalPrice,
    } = rentalInfo;

    const dailyPrice = Number(item.price ?? 0);

    const handleViewRentalHistory = () => {
        navigate("/mypage");
    };

    return (
        <main className="min-h-screen bg-white px-7 pb-32 pt-12">
            {/* 완료 아이콘 */}
            <section className="flex flex-col items-center">
                <div className="relative flex h-[78px] w-[78px] items-end justify-center">
                    <div className="absolute top-0 h-[38px] w-[40px] rounded-t-full border-[9px] border-[#62B5F5] border-b-0" />

                    <div className="relative flex h-[55px] w-[70px] items-center justify-center rounded-[2px] bg-[#62B5F5]">
                        <span className="absolute h-[18px] w-[32px] rotate-[-45deg] border-b-[7px] border-l-[7px] border-white" />
                    </div>
                </div>

                <h1 className="mt-8 text-[20px] font-bold text-[#222222]">
                    대여가 확정 되었습니다!
                </h1>
            </section>

            {/* 대여 정보 */}
            <section className="mt-9">
                <h2 className="text-[19px] font-bold text-[#222222]">
                    대여 정보
                </h2>

                <div className="mt-6 space-y-4">
                    <InfoRow
                        label="대여 물품"
                        value={item.title}
                    />

                    <InfoRow
                        label="대여 기간"
                        value={`${rentalDays}일`}
                    />

                    <InfoRow
                        label="수령 희망일"
                        value={pickupDate}
                    />

                    <InfoRow
                        label="대여이유"
                        value={reason || "-"}
                    />

                    <InfoRow
                        label="메시지"
                        value={message || "-"}
                    />
                </div>
            </section>

            <div className="my-8 border-t border-[#EEEEEE]" />

            {/* 결제 정보 */}
            <section>
                <h2 className="text-[19px] font-bold text-[#222222]">
                    결제 정보
                </h2>

                <div className="mt-6 space-y-4">
                    <InfoRow
                        label="대여 요금"
                        value={`${dailyPrice.toLocaleString()} 크레딧`}
                    />

                    <InfoRow
                        label="대여 일수"
                        value={`${rentalDays}일`}
                    />
                </div>

                <div className="mt-7 flex items-center justify-between">
                    <span className="text-[18px] font-bold text-[#222222]">
                        총 결제 금액
                    </span>

                    <span className="text-[18px] font-bold text-[#62B5F5]">
                        {Number(totalPrice).toLocaleString()} 크레딧
                    </span>
                </div>
            </section>

            {/* 하단 버튼 */}
            <div className="fixed inset-x-0 bottom-0 z-50 bg-white px-7 pb-7 pt-4">
                <button
                    type="button"
                    onClick={handleViewRentalHistory}
                    className="
                        h-[58px] w-full rounded-[13px]
                        bg-[#62B5F5]
                        text-[17px] font-semibold text-white
                    "
                >
                    대여 내역 보기
                </button>
            </div>
        </main>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex items-start gap-6">
            <span className="w-[82px] shrink-0 text-[15px] font-medium text-[#4A4A4A]">
                {label}
            </span>

            <span className="min-w-0 flex-1 whitespace-pre-wrap break-words text-[15px] text-[#4A4A4A]">
                {value}
            </span>
        </div>
    );
}

export default RentalCompletePage;