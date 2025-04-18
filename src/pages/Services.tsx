import { useEffect } from 'react';
import ThreeScene from '@/components/ThreeSimple';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.transition = 'opacity 1s ease, transform 1s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      if (section instanceof HTMLElement) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(100px)';
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ThreeScene />
      <Navbar />

      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-montserrat font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-roboto text-white/70 max-w-3xl mx-auto mb-12">
            Elevate your digital presence with our innovative solutions
          </p>
          <div className="w-24 h-24 mx-auto border-b-2 border-secondary flex items-center justify-center">
            <svg
              className="w-8 h-8 text-secondary animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">What We Offer</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              We provide comprehensive digital solutions tailored to your unique needs. Our services combine technical expertise with creative insight to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                title: '3D Design',
                description: 'Immersive 3D experiences and visualizations that bring your ideas to life with stunning detail and interactivity.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                ),
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that creates intuitive, engaging interfaces that delight users and drive conversions.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 13h6v6H4zM16 13h4v6h-4z" />
                  </svg>
                ),
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic marketing solutions that increase visibility, engage audiences, and drive meaningful results.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                ),
              },
              {
                title: 'Brand Strategy',
                description: 'Comprehensive brand development that establishes a strong identity and connects with your target audience.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7V7a4 4 0 014-4z" />
                  </svg>
                ),
              },
              {
                title: 'Motion Graphics',
                description: 'Dynamic visual content that captivates viewers and effectively communicates your message.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-8 group hover:bg-white/10 transition-colors duration-300 animate-section"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-secondary mb-6 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">{service.title}</h3>
                <p className="font-roboto text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-section">
            <h2 className="text-4xl font-montserrat font-bold mb-6">Our Process</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-lg font-roboto text-white/70 max-w-3xl mx-auto">
              We follow a structured approach to ensure every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-secondary/30 transform -translate-x-1/2 hidden md:block" />
            <div className="space-y-12 md:space-y-0">
              {[
                'Discovery',
                'Strategy',
                'Design',
                'Development',
                'Testing',
                'Launch',
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center animate-section ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-full md:w-1/2 p-6 flex justify-center md:justify-end">
                    <div className={`text-center md:text-left`}>
                      <h3 className="text-3xl font-bold mb-2">Step {index + 1}: {step}</h3>
                      <p className="text-white/70 font-roboto max-w-md">
                        {/* Custom descriptions for each step */}
                        {{
                          0: 'We begin by understanding your business, goals, and project requirements.',
                          1: 'We craft a strategic plan tailored to your needs.',
                          2: 'Designs that align with your brand and user expectations.',
                          3: 'Efficient development with modern technologies.',
                          4: 'Testing across devices and platforms to ensure quality.',
                          5: 'Smooth launch and continued support.',
                        }[index]}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-secondary text-black font-bold flex items-center justify-center text-xl">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
