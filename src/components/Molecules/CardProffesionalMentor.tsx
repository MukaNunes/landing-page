"use client";

import ItemDescription from "@/components/Molecules/ItemDescription";
import Button from "@/components/Atoms/Button";

export default function CardProffesionalMentor() {
  return (
    <section className="flex flex-col items-center">
      <div className="grid grid-cols-2 mb-10">
        <div>
          <span className="big-title text-font-light">Proffesional Mentor</span>
        </div>
        <div>
          <span className="small-title">
            Are you looking to advance your career, gain industry insights, or
            receive expert guidance in your professional journey? Our
            Professional Mentor program is designed to connect you with seasoned
            experts who can provide invaluable mentorship.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 space-x-4 w-full">
        <ItemDescription
          title="Jemy Durinto"
          description="Logo Designer"
          imageHeight="big"
        />
        <ItemDescription
          title="Seikoji De Loparto"
          description="Logo Designer"
          imageHeight="big"
        />
        <ItemDescription
          title="Miracle Panta"
          description="UI/UX Designer"
          imageHeight="big"
        />
        <ItemDescription
          title="Dery Franklin"
          description="Motion Graph"
          imageHeight="big"
        />
      </div>

      <Button text="Show More" className="mt-10" />
    </section>
  );
}
