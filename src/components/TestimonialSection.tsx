
export function TestimonialSection() {
  const testimonials = [
    {
      quote: "CollabQuest helped me find the perfect teammates for my senior project. Our complementary skills made the project a huge success!",
      author: "Jamie Chen",
      role: "Computer Science Major",
      university: "Stanford University",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      quote: "I connected with amazing designers through CollabQuest for our hackathon team. We ended up winning first place!",
      author: "Michael Rodriguez",
      role: "Software Engineering Student",
      university: "MIT",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      quote: "As a business student, I wanted technical co-founders for my startup idea. CollabQuest made it happen in less than a week.",
      author: "Aisha Johnson",
      role: "MBA Candidate",
      university: "Harvard University",
      avatar: "https://i.pravatar.cc/150?img=9"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how students like you are building successful teams
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-24 flex items-start">
                <svg className="h-10 w-10 text-brand-blue-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
