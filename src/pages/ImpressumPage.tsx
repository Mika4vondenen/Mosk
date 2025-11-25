export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-neutral-950 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-12">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-300 space-y-2">
              <p>Ihr Name</p>
              <p>Ihre Straße</p>
              <p>Ihre PLZ und Stadt</p>
              <p>Ihr Land</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
            <div className="text-gray-300 space-y-2">
              <p>E-Mail: <a href="mailto:info@example.com" className="text-blue-400 hover:text-blue-300">info@example.com</a></p>
              <p>Telefon: +49 (0) XXX XXXXXXX</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Haftung für Inhalte</h2>
            <p className="text-gray-300">
              Die Inhalte unserer Seiten wurden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
            <p className="text-gray-300">
              Unsere Website enthält Links zu externen Websites Dritter. Wir haben keinen Einfluss auf deren Inhalte und können daher keine Gewähr für diese Inhalte übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
            <p className="text-gray-300">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
