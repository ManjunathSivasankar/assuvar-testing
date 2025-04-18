
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">
              ASSU<span className="text-secondary">VAR</span>
            </h3>
            <p className="font-roboto text-white/70 mb-6">
              Innovative solutions with cutting-edge technology
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'facebook', href: '#' },
                { icon: 'twitter', href: '#' },
                { icon: 'instagram', href: '#' },
                { icon: 'linkedin', href: '#' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-black border border-secondary/30 text-secondary hover:bg-secondary hover:text-black transition-colors duration-300"
                >
                  <span className="sr-only">{social.icon}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-roboto text-white/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                '3D Design',
                'UI/UX Design',
                'Digital Marketing',
                'Brand Strategy',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-roboto text-white/70 hover:text-secondary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 font-roboto text-white/70">
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-secondary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                123 Tech Street, Innovation City
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-secondary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
                info@assuvar.com
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-1 text-secondary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </span>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-white/50 text-sm">
            &copy; {new Date().getFullYear()} ASSUVAR. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 font-roboto text-white/50 text-sm">
              <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
