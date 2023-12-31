import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";
import { CardsAngebot } from "@/components/islets/pages/angebot/cards";
import { HeroAngebot } from "@/components/islets/pages/angebot/hero";

export default function AngebotPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2">
        <HeroAngebot />
        <CardsAngebot />
      </section>

      <FireBlobGradient
        paddingTopSM="sm:-top-[180rem]"
        paddingTop="-top-[280rem]"
      />
    </>
  );
}
