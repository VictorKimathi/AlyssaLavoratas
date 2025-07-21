import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FileTextIcon, BrainIcon, LightbulbIcon, CodeIcon, TrendingUpIcon, PenToolIcon } from 'lucide-react';
const AboutPage = () => {
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
                About Alyssa Lavorata
              </h1>
              <div className="h-1 w-20 bg-[#61DAFB] mb-6"></div>
              <p className="text-xl text-gray-300 mb-6">
                Tech-savvy digital writer with a passion for transforming
                complex tech topics into digestible, user-focused content.
              </p>
              <Button to="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#61DAFB]/20 rounded-lg transform rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" alt="Professional woman working" className="relative z-10 rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Professional Profile" subtitle="Decoding technical jargon and riding the edge of trend forecasting" />
          <div className="bg-[#181C1F] rounded-lg p-8 mb-12">
            <p className="text-xl leading-relaxed mb-6">
              I specialize in transforming complex tech topics into digestible,
              user-focused content. With expertise in consumer electronics,
              smart home tools, and app ecosystems, I bridge the gap between
              technical innovation and user understanding.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              My approach combines technical knowledge with clear, compelling
              storytelling that resonates with both tech enthusiasts and
              everyday users. I'm comfortable decoding technical jargon and
              riding the edge of trend forecasting to create content that's both
              informative and engaging.
            </p>
            <p className="text-xl leading-relaxed">
              Proficient with CMS tools, AP Style, and clean, compelling
              storytelling that bridges utility and curiosity. I'm passionate
              about making technology accessible and exciting for everyone.
            </p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Professional Experience" subtitle="A track record of excellence in tech content" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#22272B] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">
                Content Strategist – Tech Vertical
              </h3>
              <p className="text-[#61DAFB] mb-4">Digital North Collective</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Built content maps and topic clusters for cloud storage,
                    VPNs, and fintech apps
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Managed a team of freelance contributors across multiple
                    tech verticals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Led performance reviews via Google Analytics to optimize
                    content strategy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Developed cross-platform content distribution plans for
                    maximum engagement
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#22272B] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Technical Copywriter</h3>
              <p className="text-[#61DAFB] mb-4">BlueGrid Innovations</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Created user manuals, onboarding guides, and FAQ content for
                    software rollouts
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Worked closely with engineers to translate complex features
                    into user benefits
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Translated developer notes into scalable, branded UX copy
                    for beta programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#61DAFB] mr-2">•</span>
                  <span>
                    Optimized metadata and SEO for technical documentation and
                    knowledge bases
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Skills & Abilities" subtitle="Technical expertise meets creative communication" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <FileTextIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Consumer Tech Writing
                </h3>
                <p className="text-gray-300">
                  Expert in translating complex tech features into clear,
                  compelling user benefits.
                </p>
              </div>
            </div>
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <BrainIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">CMS Fluency</h3>
                <p className="text-gray-300">
                  Proficient with various content management systems for
                  efficient publishing workflows.
                </p>
              </div>
            </div>
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <LightbulbIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                <p className="text-gray-300">
                  Strategic approach to metadata and content structure for
                  maximum visibility.
                </p>
              </div>
            </div>
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <CodeIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Feature Pitching</h3>
                <p className="text-gray-300">
                  Skilled at developing content flow that engages and informs
                  tech audiences.
                </p>
              </div>
            </div>
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <TrendingUpIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Digital Lifestyle Trends
                </h3>
                <p className="text-gray-300">
                  Constantly monitoring and analyzing emerging tech trends and
                  user behaviors.
                </p>
              </div>
            </div>
            <div className="bg-[#181C1F] p-6 rounded-lg flex items-start">
              <PenToolIcon size={24} className="text-[#61DAFB] mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Headline Writing</h3>
                <p className="text-gray-300">
                  Crafting compelling headlines optimized for cross-device
                  formatting and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interests Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Activities & Interests" subtitle="Staying at the forefront of tech innovation" centered={true} />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              When I'm not crafting content, you'll find me engaged in various
              tech-related activities that keep me at the cutting edge of
              innovation:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-[#22272B] p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Gadget Testing</h3>
                <p className="text-gray-300">
                  Exploring the latest consumer tech devices
                </p>
              </div>
              <div className="bg-[#22272B] p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Tech Stack Tweaking</h3>
                <p className="text-gray-300">
                  Optimizing digital workflows and tools
                </p>
              </div>
              <div className="bg-[#22272B] p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Newsletter Curation</h3>
                <p className="text-gray-300">
                  Tracking and sharing emerging tech trends
                </p>
              </div>
              <div className="bg-[#22272B] p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Beta Program User</h3>
                <p className="text-gray-300">
                  Testing new software and providing feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutPage;