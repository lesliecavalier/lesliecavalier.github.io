import iowan from "@/components/font/iowan";

function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <div
        className={`flex ${iowan.className} flex-col gap-4 mt-8 md:mt-16 text-xl max-w-2xl mx-auto leading-8`}
      >
        <h1 className="p-4 md:mt-16 md:mb-4 text-4xl leading-12">
          / Leslie Cavalier /
        </h1>
        <p className="p-4">
          Former member of a whimsical traveling circle troupe; ex-van lifer;
          urbanite of the voluntarily punkte; sits on pleather drinking smoky
          mezcals; often confused for the bisexual, ambiguously queer, insane;
          successful in life.
        </p>
        <div className="max-w-2xl my-16 p-4 md:p-8 bg-blue-900 mt-[100px] text-white">
          <p className="mt-[120px]">
            <div className="max-w-full md:max-w-[520px] md:pr-[120px]">
              WHEN WOMAN AWAKENS TO FULL CONSCIOUSNESS of her human dignity, her
              resistance may lead her far beyond the boundaries of reason.
            </div>
          </p>
          <p className="mt-8 mb-32">Amalie Skram, 1880</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
