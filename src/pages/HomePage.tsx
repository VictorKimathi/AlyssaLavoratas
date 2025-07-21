import React from 'react';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';
import Button from '../components/Button';
const HomePage = () => {
  return <div className="w-full bg-[#0F1112] text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F1112]/70 to-[#0F1112] z-10"></div>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Digital technology background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-6 animate-fade-in">
              Alyssa Lavorata
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in delay-300">
              Tech-savvy Digital Writer: Making Innovation Relatable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-500">
              <Button to="/portfolio" variant="primary">
                View My Portfolio
              </Button>
              <Button to="/services" variant="outline">
                Explore My Services
              </Button>
            </div>
          </div>
        </div>
        <a href="#intro" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce" aria-label="Scroll down">
          <ArrowDownIcon size={32} />
        </a>
      </section>
      {/* Introduction Section */}
      <section id="intro" className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
              Transforming Complex Tech into Compelling Stories
            </h2>
            <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Specializing in consumer electronics, smart home tools, and app
              ecosystems, I bridge the gap between technical innovation and user
              understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#22272B] p-8 rounded-lg text-center">
              <div className="text-[#61DAFB] text-4xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Content Strategy</h3>
              <p className="text-gray-300">
                Building content maps, managing teams, and optimizing
                performance for digital products and services.
              </p>
            </div>
            <div className="bg-[#22272B] p-8 rounded-lg text-center">
              <div className="text-[#61DAFB] text-4xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Technical Copywriting</h3>
              <p className="text-gray-300">
                Creating user manuals, onboarding guides, and translating
                developer notes into branded UX copy.
              </p>
            </div>
            <div className="bg-[#22272B] p-8 rounded-lg text-center">
              <div className="text-[#61DAFB] text-4xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">UX Writing</h3>
              <p className="text-gray-300">
                Crafting microcopy that guides users through digital experiences
                with clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-[#0F1112]">
        <div className="container mx-auto px-4">
          <div className="bg-[#22272B] rounded-lg p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-gray-300">
                Let's work together to make your tech innovation accessible and
                engaging.
              </p>
            </div>
            <Button to="/contact" variant="primary" className="flex items-center">
              Get in Touch <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;