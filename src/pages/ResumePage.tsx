import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FileTextIcon, DownloadIcon, ArrowRightIcon } from 'lucide-react';
const ResumePage = () => {
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Access My Full Professional Resume
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download my comprehensive resume for a detailed overview of my
            experience, skills, and qualifications in tech content strategy and
            writing.
          </p>
        </div>
      </section>
      {/* Download Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#181C1F] rounded-lg p-12 text-center">
            <FileTextIcon size={64} className="text-[#61DAFB] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Alyssa Lavorata's Resume
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              My resume provides a comprehensive overview of my professional
              experience, skills, and educational background in the field of
              tech content strategy and writing.
            </p>
            <Button href="/alyssa-lavorata-resume.pdf" variant="primary" download={true} className="flex items-center justify-center mx-auto text-lg px-8 py-4">
              Download Resume (PDF) <DownloadIcon size={20} className="ml-2" />
            </Button>
            <p className="text-gray-400 mt-4">
              Note: This is a placeholder. In a real implementation, this would
              link to an actual PDF file.
            </p>
          </div>
        </div>
      </section>
      {/* Resume Highlights */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Resume Highlights" subtitle="Key points from my professional background" centered={true} />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#61DAFB]">
                  Professional Experience
                </h3>
                <ul className="space-y-6">
                  <li>
                    <h4 className="font-bold">
                      Content Strategist
                    </h4>
                    <p className="text-gray-400">Quarryline Digital  </p>
                    <p className="text-gray-300 mt-2">
                      Led content strategy for cloud storage, VPNs, and fintech
                      apps. Managed freelance teams and optimized content based
                      on performance metrics.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-bold">Technical Copywriter</h4>
                    <p className="text-gray-400">BlueGrid Innovations</p>
                    <p className="text-gray-300 mt-2">
                      Created user manuals, onboarding guides, and translated
                      developer notes into branded UX copy for software rollouts
                      and beta programs.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#61DAFB]">
                  Skills & Expertise
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>Consumer tech writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>CMS fluency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>SEO and metadata optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>Feature pitching & content flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>Digital lifestyle trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>Headline writing & cross-device formatting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>Technical documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#61DAFB] mr-2">•</span>
                    <span>UX writing and microcopy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Have Questions After Reviewing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't hesitate to reach out if you'd like to discuss my experience
              or how my skills can benefit your tech content needs.
            </p>
            <Button to="/contact" variant="primary" className="flex items-center mx-auto">
              Contact Me <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ResumePage;
