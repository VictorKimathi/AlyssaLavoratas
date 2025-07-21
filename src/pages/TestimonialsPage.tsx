import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { QuoteIcon, ArrowRightIcon } from 'lucide-react';
const TestimonialsPage = () => {
  // Placeholder testimonials for future content
  const placeholderTestimonials = [{
    id: 1,
    quote: 'This section is reserved for future testimonials from satisfied clients and collaborators.',
    name: 'Future Client',
    title: 'Company Name',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }, {
    id: 2,
    quote: "This space will showcase feedback from tech companies and professionals who have benefited from Alyssa's content expertise.",
    name: 'Future Collaborator',
    title: 'Tech Company',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }, {
    id: 3,
    quote: "Future testimonials will highlight Alyssa's ability to transform complex technical concepts into clear, engaging content.",
    name: 'Future Tech Lead',
    title: 'Software Company',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }];
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Hear From My Collaborators
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This page is reserved for future testimonials from clients and
            collaborators who have experienced the value of clear, compelling
            tech content.
          </p>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Future Testimonials" subtitle="This section will be populated with feedback from satisfied clients" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {placeholderTestimonials.map(testimonial => <div key={testimonial.id} className="bg-[#181C1F] rounded-lg p-8 relative">
                <QuoteIcon size={48} className="text-[#61DAFB]/20 absolute top-4 right-4" />
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Future Content Notice */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Would You Like to Be Featured Here?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              After we've collaborated on a project, I'd be honored to feature
              your feedback in this section. Your testimonial helps showcase the
              value of clear, strategic tech content.
            </p>
            <Button to="/contact" variant="primary" className="flex items-center mx-auto">
              Let's Work Together <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default TestimonialsPage;