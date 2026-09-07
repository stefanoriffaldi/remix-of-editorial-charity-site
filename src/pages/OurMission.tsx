import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Flame } from "lucide-react";
import impactHeroBg from "@/assets/impact-hero-bg.jpg";
import ourStoryBg from "@/assets/our-story-bg.jpg";

const goals = [
  {
    num: "01",
    title: "Accesso all'istruzione",
    desc: "Crediamo che l'istruzione sia la base di ogni opportunità. Dalla costruzione di aule nei villaggi rurali alle borse di studio per studenti sfollati, rimuoviamo le barriere all'apprendimento. I nostri programmi sostengono ogni anno oltre 15.000 studenti con materiale scolastico, formazione per insegnanti e alfabetizzazione digitale. Investire nell'istruzione oggi significa formare i leader, gli operatori sanitari e gli innovatori di domani.",
  },
  {
    num: "02",
    title: "Equità nelle cure",
    desc: "La qualità delle cure non deve dipendere dal luogo in cui si nasce. Le nostre cliniche mobili portano servizi medici essenziali nelle comunità più remote, mentre i programmi di salute materna hanno ridotto del 40% la mortalità infantile nelle regioni partner. Formiamo operatori sanitari locali, apriamo centri di assistenza e distribuiamo farmaci salvavita. Dalla prevenzione all'emergenza, costruiamo sistemi sanitari che accolgono tutti con dignità e umanità.",
  },
  {
    num: "03",
    title: "Autonomia economica",
    desc: "Un cambiamento sostenibile richiede indipendenza economica. I nostri programmi di microcredito e i centri di formazione professionale hanno aiutato oltre 8.000 famiglie ad avviare piccole attività e ottenere un reddito stabile. Sosteniamo le imprenditrici, insegniamo competenze richieste dal mercato e creiamo lavoro con salari equi. Rafforzando le economie locali invece di creare dipendenza, aiutiamo le comunità a costruire un futuro autonomo e prospero.",
  },
];

const DecorativeCircles = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 500 500"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="2" opacity="0.15" />
    <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="2" opacity="0.12" />
    <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="2" opacity="0.1" />
    <circle cx="250" cy="250" r="60" stroke="currentColor" strokeWidth="2" opacity="0.08" />
  </svg>
);

const OurMission = () => (
  <>
    <Header />
    <main>
      {/* Hero — tall, full-viewport with decorative circles */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={impactHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-olive-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-olive-950/30 via-transparent to-olive-950/40" />

        {/* Decorative concentric circles */}
        <DecorativeCircles className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[600px] h-[600px] text-olive-400 pointer-events-none" />
        <DecorativeCircles className="absolute bottom-0 left-1/4 translate-y-1/4 w-[400px] h-[400px] text-olive-500 pointer-events-none" />

        <h1 className="relative z-10 font-serif text-7xl md:text-8xl lg:text-9xl text-cream tracking-tight">
          La nostra missione
        </h1>
      </section>

      {/* Our Goals */}
      <section className="relative py-20 px-6 bg-tan/30 overflow-hidden">
        {/* Decorative circle bleeding into goals */}
        <DecorativeCircles className="absolute -top-40 -right-40 w-[500px] h-[500px] text-olive-600 pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-olive-900 mb-16">I nostri obiettivi</h2>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            {goals.map((g) => (
              <div key={g.num}>
                <span className="text-sm font-serif text-olive-500 block mb-3">{g.num}</span>
                <h3 className="font-serif text-xl text-olive-900 mb-4">{g.title}</h3>
                <p className="text-sm text-olive-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It All Started — 50/50 split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left: full-bleed image with overlaid heading */}
        <div className="relative min-h-[400px] lg:min-h-full">
          <img
            src={ourStoryBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-olive-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-olive-950/70 via-transparent to-transparent" />
          <h2 className="absolute bottom-8 left-8 right-8 font-serif text-4xl md:text-5xl lg:text-6xl text-cream z-10">
            Come è iniziato tutto
          </h2>
        </div>

        {/* Right: khaki panel with icon + text */}
        <div className="bg-tan/30 flex flex-col justify-center px-10 lg:px-16 py-16">
          <Flame className="w-12 h-12 text-olive-600 mb-6" />
          <p className="text-sm md:text-base text-olive-700 leading-relaxed max-w-lg">
            Ember Foundation è nata nel 2018, quando la fondatrice Maya Rodriguez ha visto in prima persona
            l'impatto devastante della mancanza di risorse nelle zone rurali del Guatemala. Quello che era il
            progetto di una singola aula è diventato un movimento globale presente in tre continenti. Lavoriamo
            fianco a fianco con le comunità locali, perché ogni iniziativa sia rispettosa della cultura,
            sostenibile e guidata dalle persone del posto. Non imponiamo soluzioni: diamo voce alla straordinaria
            forza e visione di chi accompagniamo.
          </p>
        </div>
      </section>

      {/* Dark spacer before footer */}
      <section className="h-40 bg-olive-950" />
    </main>
    <Footer />
  </>
);

export default OurMission;
