import { Suspense } from "react";
import { Spinner } from "@nextui-org/react";
import { GetCNCMuster } from "@/components/islets/pages/muster/get-cnc-muster";
import Balancer from "react-wrap-balancer";

export default function MusterPremiumPage() {
  const musterFolder = "muster/premium";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
          <Balancer>
            Unsere <span className="text-ring">Premium-Muster</span> verbinden
            erstklassige Materialien mit sorgfältiger Verarbeitung und
            zeitlosem Design. Entdecken Sie hochwertige Zäune und Paneele,
            die durch ihre elegante Optik und langlebige Qualität überzeugen.
            Wählen Sie Ihr Lieblingsdesign und gestalten Sie eine individuelle
            Lösung für Ihr Zuhause.
          </Balancer>
        </h1>
        <div className="flex justify-center py-8">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetCNCMuster galerieFolder={musterFolder} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}