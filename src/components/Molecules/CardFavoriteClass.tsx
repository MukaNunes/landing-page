"use client";

import ItemDescription from "@/components/Molecules/ItemDescription";
import Button from "@/components/Atoms/Button";

export default function CardFavoriteClass() {
  return (
    <section className="flex flex-col items-center">
      <span className="big-title mb-5 text-font-light">
        Favorite Class
      </span>
      <div className="grid grid-cols-3 space-x-4">
        <ItemDescription
          title="Logo Branding Guideline"
          description="Your trusted resource for maintaining consistent and impactful logo representation"
          rate={5}
          lessons={20}
        />
        <ItemDescription
          title="Movie Maker"
          description=" Unleash your creativity and produce stunning videos with our step-by-step guideline"
          rate={4.8}
          lessons={22}
        />
        <ItemDescription
          title="UI Wireframe and Flow"
          description="Our comprehensive guideline is your roadmap to crafting seamless and user friendly digital experiences."
          rate={4.8}
          lessons={10}
        />
      </div>

      <Button text="Show All Classes" className="mt-10"/>
    </section>
  );
}
