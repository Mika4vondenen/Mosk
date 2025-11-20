import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen. Wir freuen uns auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-8">
              Schreiben Sie uns
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700] focus:ring-opacity-50 transition-all duration-300 outline-none"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F5B700] focus:ring-2 focus:ring-[#F5B700] focus:ring-opacity-50 transition-all duration-300 outline-none resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-[#F5B700] text-[#0A1F44] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                Nachricht senden
                <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44] mb-8">
              Kontaktinformationen
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#F5B700] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44] mb-1">E-Mail</h4>
                  <a href="mailto:info@editbymosk.de" className="text-gray-600 hover:text-[#F5B700] transition-colors duration-300">
                    info@editbymosk.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F5B700] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44] mb-1">Telefon</h4>
                  <a href="tel:+49123456789" className="text-gray-600 hover:text-[#F5B700] transition-colors duration-300">
                    +49 (0) 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F5B700] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A1F44] mb-1">Standort</h4>
                  <p className="text-gray-600">
                    Deutschlandweiter Service<br />
                    Hauptsitz: Deutschland
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A1F44] to-[#0d2a5c] p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-4">
                Bereit für Ihr Projekt?
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ob Produktfotografie, Videoproduktion oder professionelles Editing – wir setzen Ihre Ideen professionell um. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
              </p>
              <div className="flex items-center gap-2 text-[#F5B700] font-semibold">
                <Clock size={20} />
                <span>Antwort innerhalb von 24 Stunden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
