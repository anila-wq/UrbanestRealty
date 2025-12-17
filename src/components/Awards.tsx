import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EnquiryForm } from './EnquiryForm';
import { submitToBothSystems } from './utils/dual-form-submit';
import award1 from 'figma:asset/92fcfbb984f6e93f08a4cb7245793aee6da28572.png';
import award2 from 'figma:asset/c1d2c612d843b4c2a52b444dd36c1ec08c96acfb.png';
import award3 from 'figma:asset/458e7c46acdaa9d934cfb9933aca1833056fbf77.png';

// Inline SVG icons to replace lucide-react
const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-11v4m-2-2h4m-11 0h2a2 2 0 012 2v1a5 5 0 01-5 5 5 5 0 01-5-5V9a2 2 0 012-2h2z" />
  </svg>
);

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Maximize2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const awards = [
  {
    id: 1,
    title: "Economic Times Business Awards 2025",
    category: "Emerging Developer of the Year - South India!",
    project: "Eastfield",
    description: "Recognized for outstanding architectural design and sustainable construction practices that set new standards in residential development.",
    year: "2025",
    organization: "Economic Times Business Awards 2025",
    images: [
      award1,
      award1
    ],
    icon: Trophy,
    color: "#FFD700",
    accent: "yellow"
  },
  {
    id: 3,
    title: "India Property Awards 2025",
    category: "Emerging Developer of the Year - South India!",
    project: "Urbanest Realty",
    description: "Awarded for exceptional commitment to environmental sustainability and eco-friendly building practices.",
    year: "2025",
    organization: "India Property Awards 2025",
    images: [
      award2,
      award2
    ],
    icon: Star,
    color: "#00FF7F",
    accent: "green"
  },
  {
    id: 2,
    title: "Economic Times Business Awards 2025",
    category: "Residential Project of the Year - Eastfield",
    project: "Elite-35",
    description: "Honored for implementing cutting-edge construction technologies and smart home integration that revolutionize modern living.",
    year: "2025",
    organization: "Economic Times Business Awards 2025",
    images: [
      award3,
      award3
    ],
    icon: Award,
    color: "#00BFFF",
    accent: "blue"
  }
];

// VisuallyHidden component for accessibility
function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

export function Awards() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, title: string} | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const openImageModal = (src: string, alt: string, title: string) => {
    setSelectedImage({ src, alt, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to both Google Forms and CRM Webhook
      const result = await submitToBothSystems({
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
      });

      if (result.success) {
        // Show success message
        setSubmitStatus('success');
        
        // Store user's name in localStorage
        const userName = formData.name;
        localStorage.setItem('thankYouName', userName);
        
        // Redirect to thank you page in the same window
        window.location.hash = 'thankyou';
        
        // Track in Google Analytics if available
        if (window.gtag) {
          window.gtag('event', 'form_submission', {
            'event_category': 'engagement',
            'event_label': 'Awards Section Form',
          });
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="awards" className="pt-16 pb-12 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">

          
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 mt-4">
            AWARDS & RECOGNITION
          </h2>
        </div>

        {/* Awards Grid - Mobile Layout for All Devices */}
        <div className="grid grid-cols-1 gap-8 mb-20 max-w-3xl mx-auto">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            
            return (
              <div key={award.id} className="group">
                <Card className="h-full bg-white border-gray-200 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                  {/* Award Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    {/* Main Award Image - Clickable */}
                    <div 
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => openImageModal(award.images[0], `${award.title} - Award Ceremony`, award.title)}
                    >
                      <ImageWithFallback
                        src={award.images[0]}
                        alt={`${award.title} - Award Ceremony`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* "View Full Size" Button - appears on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-lg">
                          <Maximize2 className="w-5 h-5 text-gray-900" />
                          <span className="text-gray-900 font-medium">View Full Size</span>
                        </div>
                      </div>
                    </div>



                  </div>

                  <CardContent className="p-6 pt-8 space-y-4">
                    {/* Category Badge */}
                    <Badge 
                      className="!bg-black !text-white font-medium px-3 py-1"
                    >
                      {award.category === 'Residential Project of the Year - Eastfield' ? 'Residential Real Estate Project of the Year' : (award.id === 1 ? award.category.replace(' - South India!', '') : award.category)}
                    </Badge>

                    {/* Award Title */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                      {award.id === 2 ? 'Times Business Awards 2025' : award.title}
                    </h3>

                    {/* Award Details */}
                    <div className="flex items-center justify-end text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{award.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center -mt-8">
          <p className="text-gray-700 mb-6 text-2xl font-bold">
            <span className="block">Ready to be part of</span>
            <span className="block">our award-winning legacy?</span>
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="text-left">
                <label htmlFor="awards-name" className="block text-sm mb-2 text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="awards-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                  placeholder="Enter your name"
                />
              </div>
              <div className="text-left">
                <label htmlFor="awards-contact" className="block text-sm mb-2 text-gray-700">
                  Contact
                </label>
                <input
                  type="tel"
                  id="awards-contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="text-left">
                <label htmlFor="awards-email" className="block text-sm mb-2 text-gray-700">
                  Email Id
                </label>
                <input
                  type="email"
                  id="awards-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                  ✓ Thank you! Your details have been submitted successfully. We'll contact you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
                  Something went wrong. Please contact us at sales@urbanestrealty.in
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="block mx-auto bg-gray-900 text-white font-medium px-12 py-3 rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Full-Size Image Popup Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-full h-full p-0 m-0 bg-gray-900/95 border-0 rounded-none overflow-hidden">
          {selectedImage && (
            <>
              <VisuallyHidden>
                <DialogTitle>Award Image Viewer</DialogTitle>
                <DialogDescription>
                  View full size image of {selectedImage.title} - {selectedImage.alt}
                </DialogDescription>
              </VisuallyHidden>
              
              <div className="relative w-full h-full flex flex-col">
                {/* Top Bar with Image Info and Close Button */}
                <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900/90 to-transparent p-6 flex items-center justify-between">
                  <div className="text-white max-w-2xl">
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.alt}</p>
                  </div>
                  
                  <button
                    onClick={closeImageModal}
                    className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300 text-gray-900 hover:bg-white transition-colors ml-4 flex-shrink-0"
                    aria-label="Close image viewer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Full Size Image Container */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <ImageWithFallback
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>

                {/* Bottom Instructions */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/60 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600">
                  <p className="text-white text-sm flex items-center space-x-2">
                    <span>Press</span>
                    <kbd className="px-2 py-1 bg-white/20 rounded text-xs font-mono">ESC</kbd>
                    <span>or click</span>
                    <X className="w-4 h-4" />
                    <span>to close</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}