import image_90a00775e33ba29c9556fc4fc8df503ab2fd88bb from 'figma:asset/90a00775e33ba29c9556fc4fc8df503ab2fd88bb.png';
import { useState, useCallback, memo } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import logoImage from 'figma:asset/0c1e9899896b786103246b29b6b25c9fbfdc5fa9.png';
import { EnquiryForm } from './EnquiryForm';
import { navItems, projectItems } from './constants/navigation';

// Inline SVG icons to replace lucide-react
const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Optimized callbacks to prevent recreation on every render
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close menu if open
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="#
                onClick={handleLogoClick}
                className="block hover:opacity-80 transition-opacity duration-150 cursor-pointer"
                aria-label="Go to home page"
              >
                <img 
                  src={image_90a00775e33ba29c9556fc4fc8df503ab2fd88bb} 
                  alt="Urbanest Realty Logo" 
                  className="h-12 w-auto"
                  loading="eager"
                />
              </a>
            </div>
          </div>
          
          {/* Menu button - Now visible on both mobile and desktop */}
          <div>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-150"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Now visible on both mobile and desktop */}
      {isOpen && (
        <div>
          <div className="px-3 py-2 bg-white border-t border-gray-200 max-w-xs mx-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md font-medium transition-colors duration-150"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Projects Menu */}
            <div>
              <a
                href="#projects"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md font-medium transition-colors duration-150"
                onClick={closeMenu}
              >
                All Projects
              </a>
              <div className="ml-4">
                {projectItems.map((project) => (
                  <a
                    key={project.name}
                    href={project.name === 'Eastfield' ? '/eastfield/' : project.name === 'Serene Exotica' ? '/sereneexotica/' : project.name === 'Elite-35' ? '#projects' : project.href}
                    target={(project.external || project.name === 'Serene Exotica' || project.name === 'Eastfield') && project.name !== 'Elite-35' ? "_blank" : "_self"}
                    rel={(project.external || project.name === 'Serene Exotica' || project.name === 'Eastfield') && project.name !== 'Elite-35' ? "noopener noreferrer" : undefined}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-sm transition-colors duration-150"
                    onClick={closeMenu}
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-3 mt-2 border-t border-gray-200">
              <a 
                href="tel:+917090300066" 
                className="flex items-center px-3 py-2 mb-2 text-gray-900 font-medium hover:text-gray-700 transition-colors duration-150"
                onClick={closeMenu}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 7090300066</span>
              </a>
              <EnquiryForm>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-150">
                  Enquire Now
                </Button>
              </EnquiryForm>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});
