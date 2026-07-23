import CategoryCard from "./CategoryCard";

function CategoryList({ items }) {
    return (
        <section className="flex flex-col">
            {items.map((item) => (
                <CategoryCard
                    key={`${item.type}-${item.id}`}
                    item={item}
                />
            ))}
        </section>
    );
}

export default CategoryList;