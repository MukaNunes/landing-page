import CardBeginJourney from "@/components/Molecules/CardBeginJourney";
import CardFavoriteClass from "@/components/Molecules/CardFavoriteClass";
import CardProffesionalMentor from "@/components/Molecules/CardProffesionalMentor";
import CardStudyAnywhere from "@/components/Molecules/CardStudyAnywhere";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <CardBeginJourney />
      <CardStudyAnywhere />
      <CardFavoriteClass />
      <CardProffesionalMentor />
    </main>
  );
}
