import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose a Problem",
      description:
        "Browse our extensive library of coding challenges filtered by difficulty, topic, or company.",
    },
    {
      number: "02",
      title: "Write Your Solution",
      description:
        "Code your solution in your preferred programming language with our feature-rich editor.",
    },
    {
      number: "03",
      title: "Test & Debug",
      description:
        "Run your code against sample test cases to identify and fix issues before submission.",
    },
    {
      number: "04",
      title: "Submit & Learn",
      description:
        "Submit your solution, see detailed performance metrics, and explore reference solutions.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="logo text-primary">HYPE</span>
            <span className="logo">Coding</span> Works
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A simple yet powerful workflow to help you become a better
            programmer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="card-body">
                <div className="text-5xl font-bold text-primary opacity-50 mb-4">
                  {step.number}
                </div>
                <h3 className="card-title text-xl font-bold">{step.title}</h3>
                <p className="opacity-80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-base-100 rounded-xl p-8 shadow-xl">
          <div className="mockup-browser border border-base-300">
            <div className="mockup-browser-toolbar">
              <div className="input border border-base-300">
                HypeCoding.com/problems/two-sum
              </div>
            </div>
            <div className="flex flex-col lg:flex-row bg-base-200 divide-y lg:divide-y-0 lg:divide-x divide-base-300">
              <div className="flex-1 p-6">
                <h4 className="font-bold mb-3 text-lg">Problem Description</h4>
                <p className="text-sm">
                  Given an array of integers nums and an integer target, return
                  indices of the two numbers such that they add up to target.
                </p>
                <div className="mt-4">
                  <h5 className="font-semibold text-sm">Example:</h5>
                  <pre className="bg-base-300 p-3 rounded-lg text-xs mt-2 overflow-x-auto">
                    Input: nums = [2,7,11,15], target = 9<br />
                    Output: [0,1]
                    <br />
                    Explanation: Because nums[0] + nums[1] == 9, we return [0,
                    1].
                  </pre>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between mb-3">
                  <h4 className="font-bold text-lg">Code Editor</h4>
                  <div className="tabs tabs-boxed bg-base-300">
                    <a className="tab tab-active tab-sm">JavaScript</a>
                    <a className="tab tab-sm">Python</a>
                    <a className="tab tab-sm">Java</a>
                  </div>
                </div>
                <pre className="bg-neutral text-neutral-content p-3 rounded-lg text-xs h-40 overflow-y-auto">
                  {`function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}`}
                </pre>
                <div className="flex justify-end gap-2 mt-3">
                  <Link to="problems" className="btn btn-sm btn-ghost">
                    Run
                  </Link>
                  <Link to="/problems" className="btn btn-sm btn-primary">
                    Submit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
