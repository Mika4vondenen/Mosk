import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setMessage({ type: 'success', text: 'Nachricht erfolgreich gesendet! Wir werden uns in Kürze bei Ihnen melden.' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setMessage({ type: 'error', text: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' });
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-4">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lassen Sie uns über Ihr Projekt sprechen. Wir freuen uns auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#f59e0b] mb-8">
              Schreiben Sie uns
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b] focus:ring-opacity-50 transition-all duration-300 outline-none placeholder-gray-400"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b] focus:ring-opacity-50 transition-all duration-300 outline-none placeholder-gray-400"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b] focus:ring-opacity-50 transition-all duration-300 outline-none placeholder-gray-400"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b] focus:ring-opacity-50 transition-all duration-300 outline-none resize-none placeholder-gray-400"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-[#f59e0b] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#ffc61a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Wird gesendet...' : 'Nachricht senden'}
                <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>

              {message && (
                <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-500/20 text-green-300 border border-green-500/50' : 'bg-red-500/20 text-red-300 border border-red-500/50'}`}>
                  {message.text}
                </div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#f59e0b] mb-8">
              Kontaktinformationen
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-[#f59e0b] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">E-Mail</h4>
                  <a href="mailto:d.mamon@moskunlimited.be" className="text-gray-400 hover:text-[#f59e0b] transition-colors duration-300">
                    d.mamon@moskunlimited.be
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f59e0b] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">Telefon</h4>
                  <a href="tel:+49176476972299" className="text-gray-400 hover:text-[#f59e0b] transition-colors duration-300">
                    (+49) 0176 4769 7299
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#f59e0b] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#0A1F44]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-1">Standort</h4>
                  <p className="text-gray-400">
                    BELGIEN<br />
                    Weissenbrücke 2. 4770 Amel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 rounded-xl">
              <h4 className="text-2xl font-bold text-white mb-4">
                Starten wir Ihr Projekt.
              </h4>
              <p className="text-white mb-6 leading-relaxed">
                Ob Produktfotografie, Videoproduktion oder professionelles Editing – Ich setze Ihre Ideen professionell um. Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
              </p>
              <div className="flex items-center gap-2 text-[#FFB400] font-semibold">
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
