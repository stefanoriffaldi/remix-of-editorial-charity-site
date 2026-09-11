import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import communityGathering from "@/assets/community-gathering.jpg";
import ourStoryBg from "@/assets/our-story-bg.jpg";
import exampleFileAsset from "@/assets/example-file.jpg.asset.json";
import kitchenTabletAsset from "@/assets/kitchen-tablet.jpg.asset.json";
import checkMarkAsset from "@/assets/check-mark.jpg.asset.json";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
      <div className="relative overflow-hidden">
        <img src={communityGathering} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-olive-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 via-olive-900/40 to-olive-950/60" />
      </div>
      <div className="relative overflow-hidden hidden md:block">
        <img src={ourStoryBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-olive-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-bl from-olive-900/50 to-olive-950/70" />
      </div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <h1 className="font-serif text-6xl md:text-[7rem] leading-[0.85] text-cream/90 tracking-tight">Ogni piccolo</h1>
        <p className="font-serif text-6xl md:text-[7rem] leading-[0.85] text-cream/90 tracking-tight md:text-right">gesto conta</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <p className="text-cream/60 text-sm md:text-base leading-relaxed max-w-sm">
          Costruiamo un futuro migliore attraverso istruzione, accesso alle cure e valorizzazione delle comunità nelle regioni più fragili del mondo.
        </p>
        <div className="md:flex md:justify-end">
          <Link to="/donate" className="inline-block border border-cream/50 text-cream/90 hover:bg-cream/10 px-10 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 rounded-full">
            Dona
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const MarqueeSection = () => {
  const text = "Proteggere la natura, generare cambiamento.";
  return (
    <section className="w-full bg-olive-950 border-y border-olive-800/30 overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="text-sm md:text-base tracking-widest text-cream/50 mx-10 uppercase">{text}</span>
        ))}
      </div>
    </section>
  );
};

const OurStorySection = () => (
  <section className="relative min-h-[600px] md:min-h-[700px] flex items-end overflow-hidden">
    <img src={ourStoryBg} alt="Centro comunitario con studenti" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-olive-950/50 mix-blend-multiply" />
    <div className="absolute inset-0 bg-gradient-to-t from-olive-950/90 via-olive-950/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-olive-950/70 to-transparent" />

    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-olive-800/20 pointer-events-none hidden lg:block">
      <svg width="400" height="400" viewBox="0 0 400 400" fill="currentColor" className="opacity-30">
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="320" fontFamily="DM Serif Display, serif">E</text>
      </svg>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 pt-32">
      <h2 className="font-serif text-5xl md:text-7xl text-cream mb-8">La nostra storia</h2>
      <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-lg">
        Ember Foundation si dedica a proteggere e rafforzare le comunità più vulnerabili del mondo.
        Attraverso sensibilizzazione, istruzione e progetti sul campo affrontiamo temi
        cruciali come l'accesso alle cure, la disuguaglianza economica e le barriere all'istruzione. Vogliamo
        generare un cambiamento positivo e duraturo per famiglie e comunità in tutto il mondo, promuovendo collaborazione e consapevolezza.
      </p>
    </div>
  </section>
);

const DigitalSection = () => (
  <section className="bg-olive-950 py-20 md:py-28 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <span className="text-xs tracking-widest uppercase text-cream/50">Formazione digitale</span>
        <h2 className="font-serif text-4xl md:text-6xl text-cream leading-tight">
          Dalla cucina di casa alle competenze di domani
        </h2>
        <p className="text-cream/70 text-base leading-relaxed max-w-lg">
          Portiamo strumenti e connessione dove prima non arrivavano: un tablet sul tavolo di casa
          diventa un'aula, un corso di alfabetizzazione digitale, una ricetta condivisa tra famiglie.
          Le nostre risorse online sono gratuite, semplici e pensate per chi inizia da zero.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src={kitchenTabletAsset.url}
          alt="Un tablet appoggiato sul piano della cucina accanto a una confezione di uova"
          loading="lazy"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <img
          src={exampleFileAsset.url}
          alt="Grafica colorata con il logo dei nostri materiali didattici scaricabili"
          loading="lazy"
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-cream-dark">
    <div className="border-b border-olive-800/15 px-6 py-4">
      <p className="max-w-7xl mx-auto text-sm text-olive-700 tracking-wide text-center">Fai la differenza, mostra il tuo sostegno</p>
    </div>
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
      <Heart className="w-10 h-10 text-olive-700 mb-8 mx-auto" />
      <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-olive-900 leading-tight max-w-3xl mx-auto mb-12">
        Il 100% delle donazioni va direttamente alle comunità che ne hanno bisogno.<sup className="text-2xl align-super">*</sup>
      </h2>
      <p className="text-[10px] leading-snug text-olive-700/70 max-w-md mx-auto mb-10">
        * al netto delle nostre spese di gestione interne che potrebbero pareggiare o superare il totale ricevuto 😈
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/donate" className="inline-block border-2 border-olive-900 text-olive-900 hover:bg-olive-900 hover:text-cream px-10 py-3.5 text-sm tracking-widest uppercase transition-all duration-300 rounded-full">
          Dona
        </Link>
        <img
          src={checkMarkAsset.url}
          alt="Simbolo di spunta che certifica la trasparenza delle donazioni"
          loading="lazy"
          className="w-12 h-12 object-contain mix-blend-multiply"
        />
      </div>
    </div>
  </section>
);

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <MarqueeSection />
      <OurStorySection />
      <DigitalSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
