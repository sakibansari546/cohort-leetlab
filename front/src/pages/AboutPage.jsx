import React from "react";
import Footer from "../components/home/Footer";
import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <main className="relative">
        {/* Hero Section */}
        {/* Add decorative elements */}
        {/* <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary opacity-5 rounded-full"></div> */}
        {/* <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-secondary opacity-5 rounded-full"></div> */}

        <div className="hero min-h-[70vh] bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-7xl font-bold">About</h1>
              <h1 className="text-7xl font-bold">
                <span className=" logo">
                  <span className="text-primary">Hype</span> Coding
                </span>
              </h1>
              <p className="py-6 text-base-content/80 text-md">
                We're on a mission to make coding education accessible,
                engaging, and effective for developers worldwide.
              </p>
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-title">Developers</div>
                  <div className="stat-value text-primary">100+</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Problems</div>
                  <div className="stat-value text-secondary">50+</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Countries</div>
                  <div className="stat-value">10+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="card lg:card-side bg-base-200 shadow-xl flex items-center gap-18">
              <figure className="lg:w-1/2">
                <img
                  src="./LandingPage.png"
                  alt="Team collaborating on project"
                  className="rounded-lg h-full object-cover"
                />
              </figure>
              <div className="card-body lg:w-1/2">
                <h2 className="card-title text-3xl">Our Cohort Project</h2>
                <p className="my-4 text-base-content/80 text-lg">
                  Built during our intensive cohort, HypeCoding brings together
                  all the skills we've honed—API design, frontend frameworks,
                  and DevOps—into one real-world coding platform.
                </p>
                <p className="my-4 text-base-content/80 text-lg">
                  Over late-night sprints and collaborative debugging sessions,
                  our team tackled challenges from live code execution to
                  seamless OAuth integration, deploying a full-stack app that
                  helps users practice coding problems with instant feedback.
                </p>
                <div className="card bg-primary text-primary-content mt-6">
                  <div className="card-body">
                    <h3 className="card-title">Our Mission</h3>
                    <p>
                      To democratize coding education and empower every
                      developer to reach their full potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-base-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              <div className="card bg-base-200 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="card-title">Quality First</h3>
                  <p>
                    Every problem is carefully curated and tested to ensure the
                    best learning experience.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="card-title">Accessible Learning</h3>
                  <p>
                    High-quality coding education should be available to
                    everyone, everywhere.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="card-title">Community Driven</h3>
                  <p>
                    We believe in the power of community and learning together.
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 hover:shadow-xl transition-all">
                <div className="card-body items-center text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="card-title">Continuous Growth</h3>
                  <p>
                    We're committed to constantly improving and evolving our
                    platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-base-200">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <h2 className="card-title text-3xl text-center py-3 pb-5">
              Who Build it?
            </h2>
            <div className="card lg:card-side bg-base-200 shadow-xl flex items-center gap-18">
              <figure className="lg:w-1/3">
                <img
                  src="./sakib.jpg"
                  alt="Team working together"
                  className="rounded-lg h-full object-cover"
                />
              </figure>
              <div className="card-body lg:w-1/2">
                <p className="my-4 text-base-content/80 text-xl">
                  Hey! I’m Sakib Ansari, an 18-year-old self-taught full-stack
                  developer from Chandigarh. I’ve dedicated my time to mastering
                  the art of web development after completing my 12th grade.
                  While I’m skilled at working across both frontend and backend
                  technologies, my ultimate goal is to specialize in advanced
                  backend concepts like Redis, Kafka, AWS, and Docker. For me,
                  web development is not just a skill but a way to bring ideas
                  to life and create impactful solutions.
                </p>
                <p className="my-4 text-xl text-base-content/80">
                  I’m always eager to collaborate, share ideas, and work on
                  exciting projects. Whether it’s building a product, solving a
                  technical challenge, or exploring new technologies, I believe
                  in creating applications that are not only functional but also
                  user-friendly and visually appealing.
                </p>
                <div className="flex items-center gap-5 mt-6">
                  <a target="_balnk" href="https://sakibdev-swart.vercel.app/">
                    <Globe />
                  </a>
                  <a target="_balnk" href="https://github.com/sakibansari546">
                    <Github />
                  </a>
                  <a target="_balnk" href="https://x.com/Sakib_654">
                    <Twitter />
                  </a>
                  <a>
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                  <input type="radio" name="faq-accordion" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    What makes HypeCoding different?
                  </div>
                  <div className="collapse-content">
                    <p>
                      HypeCoding offers a more intuitive user interface, better
                      problem organization with custom playlists, comprehensive
                      reference solutions in multiple languages, and a more
                      supportive community.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    Which programming languages are supported?
                  </div>
                  <div className="collapse-content">
                    <p>
                      HypeCoding supports all major programming languages
                      including JavaScript, Python, Java, C++, C#, Ruby, Go,
                      Swift, Kotlin, TypeScript, PHP, and more.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300 bg-base-100">
                  <input type="radio" name="faq-accordion" />
                  <div className="collapse-title text-xl font-medium">
                    Is there a free tier available?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Yes! HypeCoding offers a generous free tier with access to
                      100+ coding problems, basic code editor features, and
                      community forum access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero min-h-[50vh] bg-primary text-primary-content">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="py-6">
                Join thousands of developers who are already improving their
                skills and advancing their careers with HypeCoding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/problems" className="btn btn-lg">
                  Start Coding Free
                </Link>
                <Link to="/problems" className="btn btn-lg btn-outline">
                  Browse Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
