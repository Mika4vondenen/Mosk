import { Timeline } from '../components/ui/timeline';
import { BlurFade } from '../components/ui/blur-fade';
import { useAnimation } from '../context/AnimationContext';

export default function AboutPage() {
  const { showInitialAnimation } = useAnimation();

  const timelineData = [
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Die Gründung von Edit by Mosk - mit einer klaren Vision und Leidenschaft für visuelle Exzellenz.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Erste Produktfotografie-Projekte
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Aufbau eines professionellen Studios
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Erste Imagefilme für lokale Unternehmen
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Investition in modernste Kameratechnik
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Entwicklung unserer Qualitätsstandards
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022-2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Aufbau eines starken Teams von Kreativen und Technikern. Expansion in neue Geschäftsbereiche wie Drohnenfotografie und Social-Media-Content-Produktion.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Über 300 erfolgreiche Projekte mit Kunden aus verschiedensten Branchen - von kleinen Start-ups bis zu etablierten Großunternehmen.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expansion unserer Services und Integration modernster KI-gestützter Bearbeitungstechnologien. Lancierung neuer Express-Services für noch schnellere Projektabwicklung.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-32">
      <section className="bg-black">
        <BlurFade delay={0.25} inView={showInitialAnimation} sessionKey="about-timeline">
          <Timeline data={timelineData} />
        </BlurFade>
      </section>
    </div>
  );
}
