import React from 'react';
import SectionTitle from '../components/SectionTitle';
import PortfolioCard from '../components/PortfolioCard';
const PortfolioPage = () => {
  const portfolioItems = [{
    id: 1,
    title: 'Green Tech Gadgets: How Sustainability Is Reshaping Consumer Electronics in 2025',
    description: 'There was a time when "eco-friendly gadget" meant choosing a product with less packaging or maybe skipping the charger in the box. But in 2025, sustainability in consumer tech goes far beyond that. From modular devices that are built to last, to smart systems that reduce energy waste automatically, green tech is no longer a niche – it's becoming an industry standard.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/portfolio/content-strategy',
    href: 'Green_Tech_Gadgets.pdf'
  }, {
    id: 2,
    title: 'Retro Tech with a Twist: How Classic Gadgets Are Getting Smart Upgrades',
    description: 'There’s something irresistibly cool about vintage tech. The tactile buttons, the warm glow of analog displays, the satisfying clicks of cassette decks – they bring back a time when gadgets had weight and character. But today’s retro tech isn’t just about nostalgia. Thanks to a wave of smart upgrades, classic designs are getting modern brains.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/portfolio/technical-documentation',
    href: 'Retro_Tech_with_a_Twist.pdf'
  }, {
    id: 3,
    title: 'Smart Glasses 2.0: Are Wearables for Your Face Finally Ready to Take Off?',
    description: 'Smart glasses have hovered on the edge of mainstream adoption for years. Early attempts like Google Glass felt more like sci-fi prototypes than everyday gadgets and later products leaned too far into niche use or clunky design. But 2025 might be the year that changes. With the latest wave of smart glasses merging sleek aesthetics, AI-driven features and real-world utility, this category is beginning to feel a lot less experimental – and a lot more inevitable.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '/portfolio/smart-home',
    href: 'Smart_Glasses_2.pdf'
  }];
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            My Work
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging Utility and Curiosity: A showcase of my content strategy
            and technical writing projects that transform complex tech into
            engaging user experiences.
          </p>
        </div>
      </section>
      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Featured Projects" subtitle="Explore my work across various tech domains" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map(item => <PortfolioCard key={item.id} title={item.title} description={item.description} image={item.image} link={item.link} />)}
          </div>
        </div>
      </section>
      {/* Case Study Preview */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Content Strategy Case Study
              </h2>
              <p className="text-gray-300 mb-6">
                For Digital North Collective, I developed a comprehensive
                content strategy for their cloud storage and VPN products that
                resulted in a 45% increase in organic traffic and a 30%
                improvement in user engagement metrics.
              </p>
              <h3 className="text-xl font-bold mb-4">Key Achievements:</h3>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Built content maps and topic clusters that addressed the
                    full user journey
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Managed a team of freelance contributors to ensure
                    consistent quality and voice
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Led performance reviews that identified optimization
                    opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Implemented cross-platform distribution strategy that
                    maximized reach
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#61DAFB]/20 rounded-lg transform -rotate-2"></div>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Content strategy dashboard" className="relative z-10 rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default PortfolioPage;
