// app/page.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import OurStory from '../components/OurStory';
import MeetOurTeam from '../components/MeetOurTeam';
import LatestInsights from '../components/LatestInsights';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <div id="services" className="scroll-mt-20">
          <Services />
        </div>
        <div id="portfolio" className="scroll-mt-20">
          <OurWork />
        </div>
        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-16">
          <div id="about" className="scroll-mt-20">
            <OurStory />
          </div>
          <MeetOurTeam />
        </div>
        <div id="blog" className="scroll-mt-20">
          <LatestInsights />
        </div>
        <div id="contact" className="bg-gray-50 py-16 scroll-mt-20">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-black">Get in Touch</h2>
              <p className="text-center text-gray-600 mb-12">Ready to start your project? Contact us for a free consultation.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <ContactForm />
                  <ContactInfo />
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 