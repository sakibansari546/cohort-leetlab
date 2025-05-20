export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer at Google",
      image: "https://avatar.iran.liara.run/public/boy",
      quote:
        "HypeCoding helped me prepare for my Google interview. The variety of problems and detailed solutions were invaluable.",
    },
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      image: "https://avatar.iran.liara.run/public/public",
      quote:
        "The playlist feature is amazing! I created custom sets for JavaScript algorithms and aced my technical interviews.",
    },
    {
      name: "Michael Rodriguez",
      role: "CS Student",
      image: "https://avatar.iran.liara.run/public/girl",
      quote:
        "As a student, HypeCoding has been the perfect companion to my algorithms course. The reference solutions teach me new approaches.",
    },
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Join thousands of developers who have improved their coding skills
            with <span className="logo text-primary">HYPE</span>
            <span className="logo">Coding</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <div className="avatar mr-4">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic opacity-80">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-warning"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats shadow-xl mt-16 w-full bg-base-100 border border-base-300">
          <div className="stat place-items-center">
            <div className="stat-title">Active Users</div>
            <div className="stat-value text-primary">10K+</div>
            <div className="stat-desc">From 100+ countries</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Problems Solved</div>
            <div className="stat-value text-secondary">2M+</div>
            <div className="stat-desc">Daily submissions</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Coding Problems</div>
            <div className="stat-value">1,500+</div>
            <div className="stat-desc">Across all difficulty levels</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Success Rate</div>
            <div className="stat-value text-accent">89%</div>
            <div className="stat-desc">Interview success</div>
          </div>
        </div>
      </div>
    </section>
  );
}
