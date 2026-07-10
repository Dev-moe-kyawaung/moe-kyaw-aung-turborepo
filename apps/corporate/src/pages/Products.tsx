import { Section, AppCardList } from "ui";

export default function Products() {
  const products = [
    { icon: "💼", title: "Business Apps", description: "Productivity & management tools" },
    { icon: "🛒", title: "E-commerce", description: "Online stores and marketplaces" },
  ];

  return (
    <Section id="products" label="Products" title="Our Products">
      <AppCardList
        apps={products.map((p) => ({
          icon: p.icon,
          title: p.title,
          description: p.description,
        }))}
      />
    </Section>
  );
}
