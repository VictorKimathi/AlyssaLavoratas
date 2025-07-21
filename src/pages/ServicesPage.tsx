import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { FileTextIcon, LayoutIcon, TypeIcon, SearchIcon, UsersIcon, BrainIcon } from 'lucide-react';
const ServicesPage = () => {
  const services = [{
    id: 1,
    icon: <FileTextIcon size={36} />,
    title: 'Digital Content Strategy',
    description: 'Comprehensive content planning that aligns with business goals and user needs, creating a roadmap for effective tech communication.',
    deliverables: ['Content Audits & Gap Analysis', 'Topic Research & Clustering', 'Editorial Calendars', 'Performance Metrics & Analysis', 'Content Distribution Plans']
  }, {
    id: 2,
    icon: <LayoutIcon size={36} />,
    title: 'Technical Copywriting',
    description: 'Clear, accurate, and engaging content that explains complex technical concepts to various audiences without losing precision.',
    deliverables: ['User Manuals & Guides', 'Product Documentation', 'Technical Blog Posts', 'Feature Explanations', 'Troubleshooting Resources']
  }, {
    id: 3,
    icon: <TypeIcon size={36} />,
    title: 'UX Writing & Microcopy',
    description: 'Strategic interface text that guides users through digital experiences with clarity, consistency, and personality.',
    deliverables: ['In-App Messaging', 'Error Messages & Alerts', 'Onboarding Sequences', 'Form Field Instructions', 'Button Text & CTAs']
  }, {
    id: 4,
    icon: <SearchIcon size={36} />,
    title: 'SEO-Optimized Tech Content',
    description: 'Content that balances search visibility with user value, helping your tech products and services get discovered.',
    deliverables: ['Keyword Research & Analysis', 'SEO-Friendly Product Descriptions', 'Optimized Blog Content', 'Meta Descriptions & Tags', 'Search-Optimized FAQ Content']
  }, {
    id: 5,
    icon: <UsersIcon size={36} />,
    title: 'Content Team Management',
    description: 'Leadership and coordination of content teams to ensure consistent quality, voice, and strategic alignment.',
    deliverables: ['Freelancer Recruitment & Management', 'Style Guides & Brand Voice Documents', 'Content Quality Assurance', 'Team Training & Development', 'Project Management & Workflows']
  }, {
    id: 6,
    icon: <BrainIcon size={36} />,
    title: 'Tech Trend Analysis & Reporting',
    description: 'Insightful reporting on emerging technologies and digital trends to inform content and product strategies.',
    deliverables: ['Trend Research & Forecasting', 'Competitive Analysis', 'Industry Reports & Whitepapers', 'Newsletter Curation', 'Technology Adoption Insights']
  }];
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Content & Strategy Services
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert solutions for transforming complex technical information into
            clear, compelling, and user-focused content that drives engagement
            and understanding.
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Offerings" subtitle="Specialized services tailored to tech-focused content needs" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} deliverables={service.deliverables} />)}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Process" subtitle="A strategic approach to creating effective tech content" centered={true} />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#61DAFB]/30"></div>
              {/* Process Steps */}
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right">
                    <h3 className="text-2xl font-bold mb-3">
                      Discovery & Analysis
                    </h3>
                    <p className="text-gray-300">
                      Understanding your tech products, target audience, and
                      business goals to create a strategic foundation.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-[#61DAFB] text-[#0F1112] rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>Stakeholder interviews</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>User research review</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>Competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>Content audit</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right md:order-1">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">
                          Content strategy development
                        </span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">Topic mapping</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">
                          Content calendar creation
                        </span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">Style guide development</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-[#61DAFB] text-[#0F1112] rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:order-0">
                    <h3 className="text-2xl font-bold mb-3">
                      Strategy & Planning
                    </h3>
                    <p className="text-gray-300">
                      Developing a comprehensive content strategy that aligns
                      with your tech products and user needs.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right">
                    <h3 className="text-2xl font-bold mb-3">
                      Content Creation
                    </h3>
                    <p className="text-gray-300">
                      Crafting clear, engaging content that transforms complex
                      tech concepts into accessible information.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-[#61DAFB] text-[#0F1112] rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>Technical writing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>UX copy development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>SEO optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#61DAFB] mr-2">•</span>
                        <span>Editorial review</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-8 md:text-right md:order-1">
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">Performance tracking</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">User feedback analysis</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">Content optimization</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-[#61DAFB] mr-2 md:order-2"></span>
                        <span className="md:mr-2">Strategy refinement</span>
                        <span className="text-[#61DAFB] hidden md:inline">
                          •
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-[#61DAFB] text-[#0F1112] rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl z-10">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:order-0">
                    <h3 className="text-2xl font-bold mb-3">
                      Measurement & Optimization
                    </h3>
                    <p className="text-gray-300">
                      Analyzing performance and user feedback to continuously
                      improve content effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#181C1F] to-[#22272B] rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Tech Content?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's collaborate to create clear, compelling content that makes
              your technology accessible and engaging for your target audience.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ServicesPage;