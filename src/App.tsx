import { Menu, X, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import { useState, useEffect, useRef, FormEvent } from "react";

import logo from "./img/logo.webp";
import community from "./img/community.png";
import heroBg from "./img/pi-background.png";
import phone from "./img/pi_video-6.webp";
import halfPhone from "./img/half-phone.png";

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

    window.addEventListener("scroll", handleScroll);

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

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#251538]">
      <header
        className={`fixed top-0 left-0 right-0 z-10 transition-all duration-500 ${
          scrolled
            ? " backdrop-blur-md shadow-md bg-[#593e8b]"
            : "bg-[transparent]"
        } ${
          navVisible
            ? " translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div
            className={`flex justify-between transition-all duration-700 items-center ${
              !scrolled ? "md:h-[20vh] h-[14vh]" : "h-[10vh]"
            } `}
          >
            <div
              className={`flex items-center transition-all duration-700 delay-100 ${
                navVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="flex-shrink-0">
                <div className={`${scrolled ? "md:h-[5vh] h-10" : "md:h-[8vh] h-10"}`}>
                  <img
                    src={logo}
                    className="h-full w-full transition duration-700"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-7">
              <a
                href="#"
                className={`text-[#cac1d1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                Pi Blockchain
              </a>
              <a
                href="#"
                className={`text-[#cac1d1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Developers
              </a>
              <a
                href="#"
                className={`text-[#cac1d1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                About Us
              </a>
              <a
                href="#"
                className={`text-[#cac1d1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Blogs
              </a>{" "}
              <a
                href="#"
                className={`text-[#cac1d1] hover:text-white transition-all duration-300 hover:-translate-y-0.5 ${
                  navVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Support
              </a>
              <div
                className={`flex items-center space-x-3 transition-all duration-700 ${
                  navVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <button
              className={`md:hidden transition-all duration-700 ${
                navVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              className={`fixed inset-0 z-40 flex flex-col justify-center items-center space-y-8 
      bg-[#251538]/95 backdrop-blur-sm transition-all duration-500 ease-out 
      md:hidden ${
        mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }
    `}
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-white hover:scale-110 transition-transform duration-300"
              >
                <X size={32} />
              </button>

              {/* Navigation Links */}
              {[
                "Pi Blockchain",
                "Developers",
                "About Us",
                "Blogs",
                "Support",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white text-2xl font-semibold hover:text-[#f3ae60] transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {item}
                </a>
              ))}

              {/* Social Icons */}
              <div className="flex space-x-6 mt-10">
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-transform duration-300 hover:scale-110"
                >
                  <Twitter size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-transform duration-300 hover:scale-110"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-transform duration-300 hover:scale-110"
                >
                  <Youtube size={28} />
                </a>
                <a
                  href="#"
                  className="text-[#abb8c3] hover:text-[#0693e3] transition-transform duration-300 hover:scale-110"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
      <div className="lg:h-[225px] h-[100px] hidden bg-[#593e8b] center fixed top-0 z-20 w-full text-white">
        <div className="h-full w-full flex items-center relative lg:p-20 p-10">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="w-full mb-1 text-white lg:text-4xl text-xl font-[bold] font-[monospace] lg:h-20 h-10 bg-[transparent] border-b solid border-[#e48169] border-b-[3px]"
            />
            <p className="text-[#d7b9fa] lg:block hidden">
              Hit Enter to Search and ESC to close{" "}
            </p>
          </form>
        </div>
      </div>

      <main className="pt-20">
        <section className={`relative bg-[url(${heroBg})] bg-[cover] text-white py-20 px-4 md:h-[fit-content] py-20 h-[fit-content] sm:px-6 lg:px-8`}>
          <div className="max-w-7xl mx-auto md:px-20">
            <div className="md:flex mb-6">
              <div
                className="w-[7
              0%]"
              >
                <h1
                  id="hero-title"
                  data-animate
                  className={`md:text-4xl text-5xl lg:text-6xl font-bold text-white mb-6  transition-all duration-1000 ${
                    isVisible["hero-title"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  The First Digital Currency
                  <br />
                  You Can Mine on Your Phone
                </h1>
                <p
                  id="hero-subtitle"
                  data-animate
                  className={`text-xl sm:text-2xl text-white  mb-10 max-w-3xl  transition-all duration-1000 delay-200 ${
                    isVisible["hero-subtitle"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Start mining Pi cryptocurrency today with our free,
                  energy-light mobile app!
                </p>
                <button
                  id="hero-cta"
                  data-animate
                  className={`bg-[transparent] border border-[#f3ae60] flex hover:from-[#0580ca] hover:to-[#8a44ca] text-[#f3ae60] font-semibold px-8 py-4 rounded-[5px] text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:h-16 h-[fit-content] hover:-translate-y-1 ${
                    isVisible["hero-cta"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <span className="mr-2">Trade ID Marketplace</span>
                  <img src={community} className="h-8" alt="" />
                </button>
              </div>
              <div className="md:h-[90vh] xl:block hidden h-[fit-content] w-[20%] absolute top-0 right-8 ">
                <img src={phone} className="w-full h-full" alt="phone" />
              </div>
            </div>

            <div>
              <iframe
                className="lg:w-[793px] w-full"
                height="444"
                src="https://www.youtube.com/embed/MsOaC61cR3U"
                title="Pi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="bg-[#79438b] text-center p-10 text-white">
          <h1
            id="mining-info"
            data-animate
            className={`text-4xl mx-auto transition-all duration-500 ${
              isVisible["mining-info"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Mining crypto is hard. <br /> Investing in crypto is risky.
            <br /> Too many of us are left out of the cryptocurrency revolution…
          </h1>
        </section>

        <section>
          <div
            id="phone-section"
            className={`w-full md:flex bg-white h-[fit-content] lg:p-20 p-5 lg:px-40 transition-all duration-500 ${
              isVisible["phone-section"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            data-animate
          >
            <div className="md:w-1/2 w-full">
              <h1
                id="solution-header"
                data-animate
                className={`text-[#8a468d] text-6xl font-bold mb-2 transition-all duration-500 ${
                  isVisible["solution-header"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Pi makes crypto mining easy.
              </h1>
              <p
                id="solution-info"
                data-animate
                className={`font-bold text-[#444444] mb-5 text-lg transition-all duration-500 ${
                  isVisible["solution-info"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Breakthrough tech allows you to mine Pi on your phone without
                draining your battery.
              </p>
              <button
                id="learn-pi"
                data-animate
                className={`h-15 bg-[#8b478e] text-white p-3 rounded-mdtransition-all duration-500 ${
                  isVisible["learn-pi"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Learn the Tech Behind Pi
              </button>
            </div>
            <div
              id="show-pi"
              data-animate
              className={`md:w-1/2 w-full p-5 transition-all duration-500 ${
                isVisible["show-pi"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <img src={halfPhone} className="w-full " />
            </div>
          </div>
        </section>


        <section className="py-20 px-4 sm:px-6 lg:px-40 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              <div
                id="feature-1"
                data-animate
                className={`text-center border border-[#ccc] rounded-md shadow-xl p-5 transition-all duration-1000 ${
                  isVisible["feature-1"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg
                    className="w-8 h-8 text-[#6c3b70]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">
                  Decentralized
                </h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Secure, Immutable, non-counterfeitable and interoperable
                  digital money
                </p>
              </div>

              <div
                id="feature-2"
                data-animate
                className={`text-center transition-all border border-[#ccc] rounded-md shadow-xl p-5  duration-1000 delay-200 ${
                  isVisible["feature-2"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="w-10 h-10  rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg
                    className="w-8 h-8 text-[#6c3b70]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">
                  Mobile First
                </h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Works on your mobile phone and does not drain your battery
                </p>
              </div>

              <div
                id="feature-3"
                data-animate
                className={`text-center transition-all duration-1000  border border-[#ccc] rounded-md shadow-xl p-5  delay-300 ${
                  isVisible["feature-3"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg">
                  <svg
                    className="w-8 h-8 text-[#6c3b70]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#32373c] mb-4">
                  User & Planet-Friendly
                </h3>
                <p className="text-[#32373c]/70 leading-relaxed">
                  Easy to use, secure at scale, without the massive electrical
                  waste
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
                isVisible["download-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Download the Pi Network App
            </h2>
            <p
              id="download-subtitle"
              data-animate
              className={`text-xl text-[#32373c]/70 mb-10 transition-all duration-1000 delay-200 ${
                isVisible["download-subtitle"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Mining Pi is free. All you need is an invitation from an existing
              trusted member on the network.
            </p>
            <div
              id="download-buttons"
              data-animate
              className={`flex flex-col sm:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-300 ${
                isVisible["download-buttons"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#"
                className="inline-flex items-center bg-[#32373c] hover:bg-[#1a1d20] text-white font-semibold px-8 py-4 rounded-[5px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center bg-[#32373c] hover:bg-[#1a1d20] text-white font-semibold px-8 py-4 rounded-[5px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
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

      <footer className="bg-[#252525]  font-bold font-[] text-[#bab1c0] py-12 px-8 sm:px-6 lg:px-20">
        <div className="md:flex gap-20">
          <div className="md:w-1/3 w-full md:text-xl mb-4">
            <ul>
              <li>
                <a href="">Pi Whitepaper</a>
              </li>
              <li>
                <a href="">Support & FAQ</a>
              </li>
              <li>
                <a href="">Terms Of Service</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full md:text-xl mb-4">
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Developer Terms of Use</a>
              </li>
              <li>
                <a href="">Pi Trademark</a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 w-full md:text-xl flex justify-center ">
            <img src={logo} className="h-10 md:w-[70%]" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
