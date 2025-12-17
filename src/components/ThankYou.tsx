import { useEffect, useState } from 'react';

// Inline SVG icons
const Check = ({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ArrowLeft = ({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export function ThankYou() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get name from localStorage (works across tabs)
    const storedName = localStorage.getItem('thankYouName');
    const name = storedName || '';
    setUserName(name);
    
    // Clear the stored name after reading it
    if (storedName) {
      localStorage.removeItem('thankYouName');
    }

    // Track thank you page view
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Thank You - Form Submission',
        page_location: window.location.href,
        page_path: '/#thankyou',
      });
    }
  }, []);

  const handleGoBack = () => {
    // Close the tab or navigate back
    if (window.opener) {
      // If opened in new tab from parent, close this tab
      window.close();
    } else {
      // Otherwise navigate back to home
      window.location.hash = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[600px]">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-14 text-center">
          {/* Success Icon - Green Circle with Checkmark (outline style) */}
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full border-[5px] border-[#10b981] flex items-center justify-center animate-[scale-in_0.5s_ease-out]">
              <Check className="w-14 h-14 text-[#10b981]" strokeWidth={3.5} />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-5xl mb-6 text-gray-900">
            Thank you{userName ? `, ${userName}` : ''}!
          </h1>
          
          {/* Yellow underline decoration */}
          <div className="flex justify-center mb-10">
            <div className="w-24 h-1.5 bg-[#fbbf24] rounded-full"></div>
          </div>

          {/* Success Confirmation with green checkmark (no background box) */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <Check className="w-6 h-6 text-[#10b981]" strokeWidth={2.5} />
            <p className="text-[#10b981] text-lg">
              Your enquiry has been submitted successfully
            </p>
          </div>

          {/* Additional Message */}
          <p className="text-gray-500 mb-12 leading-relaxed text-lg">
            We'll contact you shortly to discuss your requirements<br />
            for Eastfield by Urbanest Realty
          </p>

          {/* Go Back Button - Outline Style */}
          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            Go Back
          </button>
        </div>

        {/* Contact Footer - Outside the card */}
        <p className="text-gray-600 text-center mt-8 text-lg">
          Need immediate assistance? Call us at{' '}
          <a 
            href="tel:+917090300066" 
            className="text-[#f97316] hover:underline transition-colors"
          >
            +91 70903 00066
          </a>
        </p>
      </div>
    </div>
  );
}