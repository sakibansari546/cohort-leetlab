import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for beginners and casual coders",
      features: [
        "Access to 100+ coding problems",
        "Basic code editor",
        "Submit solutions in 3 languages",
        "Community forum access",
        "Personal progress tracking",
      ],
      buttonText: "Get Started",
      buttonVariant: "btn-outline",
      popular: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description: "For serious coders and job seekers",
      features: [
        "Access to all 1,500+ problems",
        "Advanced code editor with debugging",
        "Submit solutions in all languages",
        "Create unlimited problem playlists",
        "View all reference solutions",
        "Performance analytics dashboard",
        "Mock interview simulator",
      ],
      buttonText: "Go Pro",
      buttonVariant: "btn-primary",
      popular: true,
    },
    {
      name: "Team",
      price: "$49",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro plan",
        "Up to 10 team members",
        "Team progress dashboard",
        "Custom problem sets",
        "Collaborative coding sessions",
        "Admin controls and reporting",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "btn-outline",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core
            features to help you improve your coding skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-xl overflow-hidden hover:translate-y-[-5px] transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-primary"
                  : "border border-base-300"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-content text-center py-1 font-bold">
                  Most Popular
                </div>
              )}
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline mt-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="ml-1 text-sm opacity-70">{plan.period}</span>
                </div>
                <p className="mt-2 opacity-80">{plan.description}</p>

                <div className="divider"></div>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-actions mt-6">
                  <Link
                    href="/signup"
                    className={`btn ${plan.buttonVariant} w-full ${
                      plan.popular ? "btn-primary" : ""
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="alert bg-base-100 shadow-lg max-w-3xl mx-auto border border-base-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-info flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-bold">Need a custom plan?</h3>
              <div className="text-sm">
                We offer custom enterprise solutions for larger organizations
                and educational institutions.
                <Link to="/contact" className="ml-2 link link-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
