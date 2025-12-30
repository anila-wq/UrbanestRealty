import { useState } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import logo from 'figma:asset/0c1e9899896b786103246b29b6b25c9fbfdc5fa9.png';
import { EnquiryForm } from './EnquiryForm';

// Inline SVG icons to replace lucide-react
const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' }
  ],
  projects: [
    { name: 'Eastfield', href: '/eastfield' },
    { name: 'Elite-35', href: '#elite-35' },
    { name: 'Serene Exotica', href: '/sereneexotica' }
  ],
  services: [
    { name: 'Property Sales', href: '#sales' },
    { name: 'Property Consultation', href: '#consultation' },
    { name: 'Investment Advisory', href: '#advisory' },
    { name: 'After Sales Support', href: '#support' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Urbanest-Realty/61555019245999/?rdid=chfHHsZjXiFGkrh2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GDdMW9MHq%2F', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/urbanest_realty?igsh=MTM5bWNpdjM4ZmY2dA==#', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/urbanest-realty-669997303/', label: 'LinkedIn' }
];

export function Footer() {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 text-center">
          {/* Company Info */}
          <div>
            <div className="flex items-center justify-center mb-4">
              <img src={logo} alt="Urbanest Realty Logo" className="h-16 w-auto mr-3" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              We are committed to delivering the highest quality of construction and upholding our promises. 
              Our primary goal is to ensure complete customer satisfaction and foster lasting relationships.
            </p>
          </div>

          {/* Quick Links & Projects */}
          <div className="bg-gray-800/50 px-6 pt-6 pb-4 -mb-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-100">Quick Links</h3>
                  {footerLinks.projects.map((link) => (
    <li key={link.name}>
      <a
        href={link.name === 'Eastfield' ? '/eastfield/' : link.name === 'Elite-35' ? 'https://date-relume-15377570.figma.site' : link.name === 'Serene Exotica' ? '/sereneexotica/' : link.href}
        className="text-gray-400 hover:text-gray-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.name}
      </a>
      <a 
        href={link.name === 'Eastfield' ? '/eastfield/' : link.name === 'Elite-35' ? 'https://date-relume-15377570.figma.site' : link.name === 'Serene Exotica' ? '/sereneexotica/' : link.href}
        className="text-gray-400 hover:text-gray-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>
  {footerLinks.projects.map((link) => (
    <li key={link.name}>
      <a

------------start anila------------
<ul className="space-y-2">
  {footerLinks.projects.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        className="text-gray-400 hover:text-gray-100 transition-colors"
        target={link.href.startsWith('http') ? '_blank' : '_self'}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>
---------End code anila------

              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4 text-gray-100">Our Projects</h3>
                <ul className="space-y-2">
                  {footerLinks.projects.map((link) => (
                        href={link.href}
className="text-gray-400 hover:text-white transition-colors"
><a 
    href={link.href} 
    className="text-gray-400 hover:text-gray-100 transition-colors"
>
    {link.name}
</a>
</li>
<li key={link.name}>
                      <a
                        href={link.name === 'Eastfield' ? '/eastfield/' : link.name === 'Elite-35' ? 'https://date-relume-15377570.figma.site' : link.name === 'Serene Exotica' ? '/sereneexotica/' : link.href}
                        className="text-gray-400 hover:text-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a> <a 
                        href={link.name === 'Eastfield' ? '/eastfield/' : link.name === 'Elite-35' ? 'https://date-relume-15377570.figma.site' : link.name === 'Serene Exotica' ? '/sereneexotica/' : link.href}
                        className="text-gray-400 hover:text-gray-100 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information - Moved to Right */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-gray-100">Contact Us</h3>
            <div className="space-y-3">
              {/* Address First */}
              <div className="flex items-start justify-center group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 mt-1 group-hover:bg-gray-700 transition-colors">
                  <MapPin className="h-5 w-5 text-gray-100" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    1st Floor, No. 2, Shrusti Layout, Phase I,<br />
                    Basavanapura Main Road, KR Puram,<br />
                    Bengaluru, Karnataka, 560036
                  </p>
                </div>
              </div>
              
              {/* Email Second */}
              <div className="flex items-center justify-center group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                  <Mail className="h-5 w-5 text-gray-100" />
                </div>
                <div>
                  <a 
                    href="mailto:sales@urbanestrealty.in" 
                    className="text-gray-300 hover:text-gray-100 transition-colors text-xl font-semibold cursor-pointer"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'email_click', {
                          'event_category': 'engagement',
                          'event_label': 'Footer Email Click'
                        });
                      }
                    }}
                  >
                    sales@urbanestrealty.in
                  </a>
                </div>
              </div>
              
              {/* Phone Third */}
              <div className="flex items-center justify-center group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-700 transition-colors">
                  <Phone className="h-5 w-5 text-gray-100" />
                </div>
                <div>
                  <a 
                    href="tel:+917090300066" 
                    className="text-gray-300 hover:text-gray-100 transition-colors text-xl font-semibold cursor-pointer"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag('event', 'conversion', {
                          'send_to': 'AW-11565888128/PhoneClick',
                          'value': 1.0,
                          'currency': 'INR'
                        });
                        window.gtag('event', 'phone_call', {
                          'event_category': 'engagement',
                          'event_label': 'Footer Phone Click'
                        });
                      }
                    }}
                  >
                    +91 7090300066
                  </a>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href="https://www.facebook.com/share/1GDdMW9MHq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/urbanest_realty?igsh=MTM5bWNpdjM4ZmY2dA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/urbanest-realty-669997303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 text-gray-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center text-center">
            <p className="text-gray-400">
              © 2024 Urbanest Realty. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Enquiry Form Dialog */}
      <EnquiryForm 
        isOpen={showEnquiry} 
        onClose={() => setShowEnquiry(false)} 
      />
    </footer>
  );
}
