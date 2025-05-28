import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-focus text-primary-content relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Level Up Your Coding Skills?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of developers who are mastering algorithms, acing
          interviews, and building successful careers with HypeCoding.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/problems"
            className="btn btn-md btn-primary transition-all"
          >
            Start Coding Free
          </Link>
          <Link
            href="#features"
            className="btn btn-md btn-outline transition-all"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center btn rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>1,500+ Problems</span>
          </div>
          <div className="flex items-center btn rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <span>15+ Languages</span>
          </div>
          <div className="flex items-center btn rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>24/7 Access</span>
          </div>
          <div className="flex items-center btn rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>10K+ Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
