export const HeroSection = () => (
  <div className="flex-grow min-h-screen">
    {/* Hero Image */}
    <section>
      <img
        src="/assets/hero-img.jpg"
        alt="hero image"
        className="w-full h-[500px] object-cover brightness-50"
      />

      {/* Content Section */}
      <div className="my-8 container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-8 text-center">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-justify">
            <p className="text-4xl px-8 font-semibold mb-6">
              Everything you need to know...
            </p>
            <div className="space-y-6 px-8 text-gray-500 font-semibold leading-relaxed">
              <p>
                US-INDIA ART and Culture Exchange Center is one of the three
                divisions of Orpax Qualtra. USIAC is an Artworks organization
                principally associated with concept/theme design, manufacturing,
                and installation of Artworks. The organization specializes in
                producing innovative and aesthetically pleasing artworks for both
                interiors and exteriors.
              </p>
              <p>
                US-INDIA provides an ideal platform for nurturing and encouraging
                upcoming talents, particularly those who are gifted but lack
                adequate resources, in innovative and truly intriguing artistic and
                cultural ventures.
              </p>
              <p>
                We facilitate the exchange of innovative artistic and cultural
                creations between creators and audiences in the societies of the
                United States—the oldest democracy—and India, the largest
                democracy.
              </p>
              <p>
                COME…. LET’S ALL PARTICIPATE & REJOICE IN OUR CONTINUOUS ENDEAVOR
                FOR DISCOVERING AND PROMOTING UPCOMING TALENTS IN ART & CULTURE…
                SEE FOR YOURSELF HOW GRATIFYING THIS ACT CAN BE.
              </p>
            </div>
          </div>

          {/* Accompanying Image */}
          <div className="lg:w-1/2">
            <img
              src="/assets/home/hero/about-us.jpg"
              alt="About Us Visual"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
);
