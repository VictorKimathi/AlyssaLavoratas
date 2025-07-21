import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Let's Connect & Innovate
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your tech content? Reach out to discuss how we
            can work together to make your innovation accessible and engaging.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="I'd love to hear about your project"
              />
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <Mail size={24} className="text-[#61DAFB] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:alyssalavorata883@gmail.com"
                      className="text-gray-300 hover:text-[#61DAFB] transition-colors"
                    >
                      alyssalavorata883@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="text-[#61DAFB] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:+12179852140"
                      className="text-gray-300 hover:text-[#61DAFB] transition-colors"
                    >
                      (217) 985-2140
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={24} className="text-[#61DAFB] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-300">
                      450 Warrenville Naperville Il 60532
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#181C1F] p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Common questions about working together"
            centered={true}
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  What is your typical process for new projects?
                </h3>
                <p className="text-gray-300">
                  I start with a discovery call to understand your needs,
                  followed by a proposal outlining scope, timeline, and
                  deliverables. Once approved, I'll conduct necessary research,
                  develop a content strategy, and create the content with
                  regular check-ins for feedback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  How quickly can you turn around content?
                </h3>
                <p className="text-gray-300">
                  Turnaround times vary based on project scope and complexity.
                  Small projects may take a few days, while comprehensive
                  content strategies might require several weeks. I'll provide a
                  detailed timeline during our initial consultation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Do you offer retainer packages for ongoing content needs?
                </h3>
                <p className="text-gray-300">
                  Yes, I offer flexible retainer packages for clients with
                  ongoing content requirements. These can include a set number
                  of deliverables per month or a dedicated number of hours for
                  various content tasks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  What tech industries do you specialize in?
                </h3>
                <p className="text-gray-300">
                  I specialize in consumer electronics, smart home technology,
                  app ecosystems, cloud services, and fintech. However, my
                  skills in translating complex concepts into user-friendly
                  content are transferable across many tech sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
