import { Menu, X, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setNavVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        } ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center transition-all duration-700 delay-100 ${
              navVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}>
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0693e3] to-[#9b51e0] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <span className="text-white font-bold text-xl">π</span>
                </div>
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Pi Network</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={`text-[#32373c] hover:text-[#0693e3] transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Pi Blockchain
              </a>
              <a
                href="#"
                className={`text-[#32373c] hover:text-[#0693e3] transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Developers
              </a>
              <a
                href="#"
                className={`text-[#32373c] hover:text-[#0693e3] transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                About Us
              </a>
              <div
                className={`flex items-center space-x-3 transition-all duration-700 ${
                  navVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <button
              className={`md:hidden transition-all duration-700 ${
                navVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-[#32373c] hover:text-[#0693e3] transition-all duration-300 animate-fadeIn" style={{ animationDelay: '50ms' }}>
                  Pi Blockchain
                </a>
                <a href="#" className="text-[#32373c] hover:text-[#0693e3] transition-all duration-300 animate-fadeIn" style={{ animationDelay: '100ms' }}>
                  Developers
                </a>
                <a href="#" className="text-[#32373c] hover:text-[#0693e3] transition-all duration-300 animate-fadeIn" style={{ animationDelay: '150ms' }}>
                  About Us
                </a>
                <div className="flex items-center space-x-3 pt-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                  <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative bg-gradient-to-br from-[#e6f7ff] via-white to-[#f3e5ff] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1
                id="hero-title"
                data-animate
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#32373c] mb-6 leading-tight transition-all duration-1000 ${
                  isVisible['hero-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                The First Digital Currency<br />You Can Mine on Your Phone
              </h1>
              <p
                id="hero-subtitle"
                data-animate
                className={`text-xl sm:text-2xl text-[#32373c]/70 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
                  isVisible['hero-subtitle'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Start mining Pi cryptocurrency today with our free, energy-light mobile app!
              </p>
              <button
                id="hero-cta"
                data-animate
                className={`bg-gradient-to-r from-[#0693e3] to-[#9b51e0] hover:from-[#0580ca] hover:to-[#8a44ca] text-white font-semibold px-8 py-4 rounded-[5px] text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible['hero-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Trade ID Marketplace
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div
                id="feature-1"
                data-animate
                className={`text-center transition-all duration-1000 ${
                  isVisible['feature-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0693e3] to-[#0580ca] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">Decentralized</h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Secure, Immutable, non-counterfeitable and interoperable digital money
                </p>
              </div>

              <div
                id="feature-2"
                data-animate
                className={`text-center transition-all duration-1000 delay-200 ${
                  isVisible['feature-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#9b51e0] to-[#8a44ca] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">Mobile First</h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Works on your mobile phone and does not drain your battery
                </p>
              </div>

              <div
                id="feature-3"
                data-animate
                className={`text-center transition-all duration-1000 delay-300 ${
                  isVisible['feature-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0693e3] to-[#06c167] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">User & Planet-Friendly</h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Easy to use, secure at scale, without the massive electrical waste
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              id="download-title"
              data-animate
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#32373c] mb-6 transition-all duration-1000 ${
                isVisible['download-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Download the Pi Network App
            </h2>
            <p
              id="download-subtitle"
              data-animate
              className={`text-xl text-[#32373c]/70 mb-10 transition-all duration-1000 delay-200 ${
                isVisible['download-subtitle'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Mining Pi is free. All you need is an invitation from an existing trusted member on the network.
            </p>
            <div
              id="download-buttons"
              data-animate
              className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 ${
                isVisible['download-buttons'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a href="#" className="inline-flex items-center bg-[#32373c] hover:bg-[#1a1d20] text-white font-semibold px-8 py-4 rounded-[5px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center bg-[#32373c] hover:bg-[#1a1d20] text-white font-semibold px-8 py-4 rounded-[5px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0693e3] to-[#9b51e0] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <span className="text-white font-bold text-xl">π</span>
            </div>
            <span className="ml-3 text-xl font-semibold">Pi Network</span>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Youtube size={24} />
            </a>
            <a href="#" className="hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Pi Network. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
