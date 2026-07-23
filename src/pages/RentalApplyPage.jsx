import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import rentalMockData from "../data/rentalMockData";

function RentalApplyPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const item = useMemo(() => {
        if (location.state?.item) {
            return location.state.item;
        }

        return rentalMockData.find(
            (rentalItem) => String(rentalItem.id) === String(id),
        );
    }, [id, location.state]);

    const [rentalDays, setRentalDays] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

    const isFormValid =
        rentalDays.trim() !== "" &&
        pickupDate.trim() !== "";

    const imageUrl =
        item?.imageUrl ??
        item?.image_url;

    const handleRentalDaysChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, "");
        setRentalDays(value);
    };

    const handleNext = () => {
        if (!isFormValid || !item) {
            return;
        }

        navigate(`/item/rental/${id}/confirm`, {
            state: {
                item,
                rentalDays,
                pickupDate,
                reason,
                message,
            },
        });
    };

    if (!item) {
        return (
            <main className="flex min-h-screen items-center justify-center px-7">
                <p className="text-sm text-[#A2A2A2]">
                    대여 물품을 찾을 수 없습니다.
                </p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-7 pb-32 pt-7">
            {/* 대여 물품 */}
            <section>
                <h1 className="text-[22px] font-bold text-[#222222]">
                    대여 물품
                </h1>

                <div
                    className="
                        mt-4 flex min-h-[150px] items-center
                        rounded-[22px] border border-[#EEEEEE]
                        bg-white px-5 py-5
                        shadow-[0_10px_35px_rgba(0,0,0,0.03)]
                    "
                >
                    <div
                        className="
                            flex h-[108px] w-[108px] shrink-0
                            items-center justify-center
                            overflow-hidden rounded-lg bg-[#FCFCFC]
                        "
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={item.title}
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <div className="h-full w-full bg-[#F2F2F2]" />
                        )}
                    </div>

                    <div className="ml-5 min-w-0">
                        <h2 className="truncate text-[18px] font-semibold text-[#222222]">
                            {item.title}
                        </h2>

                        <p className="mt-2 text-[16px] text-[#333333]">
                            1일{" "}
                            {Number(item.price).toLocaleString()}
                            크레딧
                        </p>
                    </div>
                </div>
            </section>

            {/* 대여 정보 입력 */}
            <section className="mt-8">
                <h2 className="text-[22px] font-bold text-[#222222]">
                    대여 정보 입력
                </h2>

                {/* 대여 기간 */}
                <div className="mt-8">
                    <label
                        htmlFor="rentalDays"
                        className="block text-[18px] font-semibold text-[#4A4A4A]"
                    >
                        대여 기간
                    </label>

                    <input
                        id="rentalDays"
                        type="text"
                        inputMode="numeric"
                        value={rentalDays}
                        onChange={handleRentalDaysChange}
                        placeholder="대여 기간을 숫자로 입력해주세요."
                        className="
                            mt-4 h-[64px] w-full rounded-[12px]
                            border border-[#EEEEEE]
                            px-6 text-[17px] text-[#333333]
                            outline-none
                            placeholder:text-[#B4B4B4]
                            focus:border-[#62B5F5]
                        "
                    />
                </div>

                {/* 수령 희망일 */}
                <div className="mt-7">
                    <label
                        htmlFor="pickupDate"
                        className="block text-[18px] font-semibold text-[#4A4A4A]"
                    >
                        수령 희망일
                    </label>

                    <input
                        id="pickupDate"
                        type="text"
                        value={pickupDate}
                        onChange={(event) =>
                            setPickupDate(event.target.value)
                        }
                        placeholder="ex) 2026-07-23"
                        className="
                            mt-4 h-[64px] w-full rounded-[12px]
                            border border-[#EEEEEE]
                            px-6 text-[17px] text-[#333333]
                            outline-none
                            placeholder:text-[#B4B4B4]
                            focus:border-[#62B5F5]
                        "
                    />
                </div>

                {/* 대여 이유 */}
                <div className="mt-7">
                    <label
                        htmlFor="reason"
                        className="block text-[18px] font-semibold text-[#4A4A4A]"
                    >
                        대여 이유(선택)
                    </label>

                    <input
                        id="reason"
                        type="text"
                        value={reason}
                        onChange={(event) =>
                            setReason(event.target.value)
                        }
                        placeholder="대여 목적을 작성해주세요."
                        className="
                            mt-4 h-[64px] w-full rounded-[12px]
                            border border-[#EEEEEE]
                            px-6 text-[17px] text-[#333333]
                            outline-none
                            placeholder:text-[#B4B4B4]
                            focus:border-[#62B5F5]
                        "
                    />
                </div>

                {/* 메시지 */}
                <div className="mt-7">
                    <label
                        htmlFor="message"
                        className="block text-[18px] font-semibold text-[#4A4A4A]"
                    >
                        메시지(선택)
                    </label>

                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                        placeholder="호스트에게 전달할 메시지를 작성해주세요."
                        className="
                            mt-4 h-[215px] w-full resize-none
                            rounded-[12px] border border-[#EEEEEE]
                            px-6 py-5 text-[17px] leading-7
                            text-[#333333] outline-none
                            placeholder:text-[#B4B4B4]
                            focus:border-[#62B5F5]
                        "
                    />
                </div>
            </section>

            {/* 하단 버튼 */}
            <div
                className="
                    fixed bottom-0 left-1/2 z-50
                    w-full max-w-[430px]
                    -translate-x-1/2
                    bg-white px-7 pb-7 pt-4
                "
            >
                <button
                    type="button"
                    disabled={!isFormValid}
                    onClick={handleNext}
                    className={`
                        h-[66px] w-full rounded-[15px]
                        text-[20px] font-semibold text-white
                        transition-colors
                        ${
                            isFormValid
                                ? "bg-[#62B5F5]"
                                : "cursor-not-allowed bg-[#D1D0D1]"
                        }
                    `}
                >
                    다음
                </button>
            </div>
        </main>
    );
}

export default RentalApplyPage;