import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { QuoteIcon, ArrowRightIcon } from 'lucide-react';
const TestimonialsPage = () => {
  // Placeholder testimonials for future content
  const placeholderTestimonials = [{
    id: 1,
    quote: "Alyssa took our dense technical specs and turned them into user-friendly content that actually boosted engagement. Her ability to communicate complex ideas clearly is rare—and invaluable.",
    name: 'Jason Mehta',
    title: 'Product Manager, BlueGrid Innovations',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQGmetffhM5NiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1602505981624?e=2147483647&v=beta&t=lt_yGiFIGW4n6zzViwK_Ew2vVZOWBxIlRqJxFZhAYIk'
  }, {
    id: 2,
    quote: "Working with Alyssa on our fintech content strategy was a game-changer. From SEO optimization to managing freelancers, she handled it all with incredible professionalism and insight.",
    name: 'Lena Tran',
    title: 'Head of Content, Digital North Collective',
    image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80'
  }, {
    id: 3,
    quote: "We brought Alyssa on to revamp our knowledge base before a major product launch. The clarity and structure she brought to our documentation made a huge difference for our users and support team.",
    name: 'Marco Alvarez',
    title: 'Lead UX Designer, NovaStack',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdQVewWEKkMYW7Ym60RO4PYL2wqno5mEAFybkGR1-LzcokQktUW62sd58srI9Ivly6pkU&usqp=CAU'
  }];
  
  return <div className="w-full bg-[#0F1112] text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-[#181C1F]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
            Hear From My Collaborators
          </h1>
          <div className="h-1 w-20 bg-[#61DAFB] mx-auto mb-6"></div>
        
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <SectionTitle title="Future Testimonials" subtitle="This section will be populated with feedback from satisfied clients" centered={true} /> */}
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