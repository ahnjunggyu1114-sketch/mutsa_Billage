import RentalCard from "./RentalCard";
import rentalMockData from "../../data/rentalMockData";

const RentalSection = () => {
    return (
        <section className="mt-10 px-5">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#171717]">
                    대여 가능
                </h2>

                <button
                    type="button"
                    className="text-sm text-[#A2A2A2]"
                >
                    전체보기
                </button>
            </div>

            <div className="mt-5 flex flex-col gap-4">
                {rentalMockData.map((item) => (
                    <RentalCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
};

export default RentalSection;