import { useState, useCallback, memo } from 'react';
import { Button } from './ui/button';
import { EnquiryForm } from './EnquiryForm';
import { HERO_IMAGES } from './constants/images';

// Inline SVG icons to replace lucide-react
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Construction = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

export const Hero = memo(function Hero() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Optimized scroll - instant scroll for better performance
  const scrollToProjects = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <>
      <section id="home" className="relative pt-16">
        {/* Mobile Layout - Image on top, content below */}
        <div className="md:hidden">
          {/* Mobile Background Image Section */}
          <div className="relative h-72 w-full">
            <div 
              className="absolute top-0 left-0 right-0 bottom-[-100px] z-0 bg-cover md:bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${HERO_IMAGES.background})`,
                backgroundPosition: window.innerWidth < 768 ? 'center 65%' : 'center'
              }}
            >
            </div>
          </div>

          {/* Mobile Content Below Image */}
          <div className="relative z-10 px-6 pt-20 pb-12 text-center text-white bg-gray-900 mt-24">
            <h1 className="text-3xl font-normal mb-4 text-white -mt-8">
              Welcome to
              <span className="block text-white">
                Urbanest Realty
              </span>
            </h1>
            <p className="text-base mb-6 text-gray-200 max-w-2xl mx-auto">
              Discover refined living with Urbanest Realty - where timeless design meets comfort, sophistication and modern luxury.
            </p>
            
            {/* Mobile Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 mb-8 mt-6">
              <Button 
                size="sm" 
                className="bg-black text-white hover:bg-gray-900 font-medium w-full max-w-[160px] px-8 py-6 whitespace-nowrap border-2 border-white"
                onClick={scrollToProjects}
              >
                Explore Projects
              </Button>
              
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 border-2 border-white" onClick={() => setShowEnquiry(true)}>
                Enquire Now
              </Button>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12">
              <div className="flex flex-col items-center">
                <Building2 className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">3</div>
                <div className="text-xs text-gray-300 text-center">Ongoing Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <Construction className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">1M sqft</div>
                <div className="text-xs text-gray-300 text-center">Under Construction</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">Bangalore</div>
                <div className="text-xs text-gray-300 text-center">Prime Locations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Using Mobile Styling */}
        <div className="hidden md:block">
          {/* Desktop Background Image Section */}
          <div className="relative h-96 w-full">
            <div 
              className="absolute top-[-295px] left-0 right-0 bottom-[-300px] z-0 bg-cover bg-no-repeat"
              style={{ 
                backgroundImage: `url(${HERO_IMAGES.background})`,
                backgroundPosition: 'center center'
              }}
            >
            </div>
          </div>

          {/* Desktop Content Below Image */}
          <div className="relative z-10 px-6 pt-12 pb-6 text-center text-white -mt-20 md:-mt-8 max-w-3xl md:max-w-2xl mx-auto" style={{ backgroundColor: 'rgba(16, 23, 39, 0.7)' }}>
            <h1 className="text-3xl font-normal mb-4 text-white -mt-8">
              Welcome to
              <span className="block text-white">
                Urbanest Realty
              </span>
            </h1>
            <p className="text-base mb-6 text-gray-200 max-w-2xl mx-auto">
              Discover refined living with Urbanest Realty - where timeless design meets comfort, sophistication and modern luxury.
            </p>
            
            {/* Desktop Buttons */}
            <div className="flex flex-row items-center justify-center gap-3 mb-8 mt-6">
              <Button 
                size="sm" 
                className="bg-black text-white hover:bg-gray-900 font-medium w-full max-w-[160px] px-8 py-6 whitespace-nowrap border-2 border-white"
                onClick={scrollToProjects}
              >
                Explore Projects
              </Button>
              
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 border-2 border-white" onClick={() => setShowEnquiry(true)}>
                Enquire Now
              </Button>
            </div>

            {/* Desktop Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-12">
              <div className="flex flex-col items-center">
                <Building2 className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">3</div>
                <div className="text-xs text-gray-300 text-center">Ongoing Projects</div>
              </div>
              <div className="flex flex-col items-center">
                <Construction className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">1M sqft</div>
                <div className="text-xs text-gray-300 text-center">Under Construction</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-2 text-white" />
                <div className="text-lg font-bold text-white">Bangalore</div>
                <div className="text-xs text-gray-300 text-center">Prime Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <EnquiryForm 
          isOpen={showEnquiry}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </>
  );
});