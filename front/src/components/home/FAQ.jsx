import { Link } from "react-router-dom";

export default function FAQ() {
  const faqs = [
    {
      question: "What makes HypeCoding different from LeetCode?",
      answer:
        "HypeCoding offers a more intuitive user interface, better problem organization with custom playlists, comprehensive reference solutions in multiple languages, and a more supportive community. Our platform is designed to make the learning experience more enjoyable and effective.",
    },
    {
      question: "Can I use HypeCoding to prepare for technical interviews?",
      answer:
        "HypeCoding is specifically designed to help you prepare for technical interviews. Our problems are categorized by company and topic, allowing you to focus on the specific areas that matter most for your target companies.",
    },
    {
      question: "Which programming languages are supported?",
      answer:
        "HypeCoding supports all major programming languages including JavaScript, Python, Java, C++, C#, Ruby, Go, Swift, Kotlin, TypeScript, PHP, and more. You can switch between languages seamlessly for any problem.",
    },
    {
      question: "How often are new problems added?",
      answer:
        "We add new problems weekly, including both classic algorithm challenges and recent interview questions from top tech companies. Pro subscribers get immediate access to all new problems.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. We don't offer refunds for partial months.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, HypeCoding offers mobile apps for both iOS and Android, allowing you to practice coding problems on the go. The mobile apps sync with your web account for a seamless experience.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Find answers to common questions about {" "}
            <span className="logo text-primary">HYPE</span>
            <span className="logo">Coding</span>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="join join-vertical w-full shadow-lg rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow join-item border-b border-base-300 bg-base-100"
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-lg font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content bg-base-100">
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="btn btn-outline hover:btn-primary transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
