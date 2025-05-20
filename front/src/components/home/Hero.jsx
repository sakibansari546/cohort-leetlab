import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero min-h-[90vh] bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="flex-1 relative min-h-[400px]">
            <div className="mockup-code bg-neutral text-neutral-content shadow-xl rounded-xl">
              <pre data-prefix="$" className="text-base-content opacity-70">
                <code>hypecoding solve fibonacci-sequence</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>Problem loaded: Fibonacci Sequence</code>
              </pre>
              <pre
                data-prefix="1"
                className="bg-primary bg-opacity-10 text-base-content"
              >
                <code>function fibonacci(n) {"{"}</code>
              </pre>
              <pre data-prefix="2" className="opacity-50">
                <code> if (n &lt;= 1) return n;</code>
              </pre>
              <pre data-prefix="3" className="opacity-50">
                <code> return fibonacci(n-1) + fibonacci(n-2);</code>
              </pre>
              <pre
                data-prefix="4"
                className="bg-primary bg-opacity-10 text-base-content"
              >
                <code>{"}"}</code>
              </pre>
              <pre data-prefix="$" className="opacity-50">
                <code>hypecoding test</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>All test cases passed! ✓</code>
              </pre>
              <pre data-prefix=">" className="text-info">
                <code>Runtime: 12ms | Memory: 8.2MB</code>
              </pre>
            </div>

            {/* Add decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-primary opacity-5 rounded-full"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-secondary opacity-5 rounded-full"></div>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <h1 className="font-bold leading-14">
                {" "}
                Master Coding Challenges with{" "}
              </h1>
              <h1 className="">
                <span className="text-primary logo">HYPE </span>
                <span className="logo">Coding</span>
              </h1>
            </h1>
            <p className="py-6 text-lg md:text-xl text-base-content opacity-80">
              The ultimate platform to practice, learn, and excel in coding
              interviews. Solve problems, track progress, and build your coding
              portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/problems"
                className="btn btn-primary btn-md shadow-lg hover:shadow-xl transition-all"
              >
                Start Coding Free
              </Link>
              <a
                href="#features"
                className="btn btn-outline btn-md hover:bg-base-200 transition-all"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <div className="avatar-group -space-x-2">
                <div className="avatar border-2 border-base-100">
                  <div className="w-8">
                    <img
                      src="https://avatar.iran.liara.run/public/32x32"
                      alt="User"
                    />
                  </div>
                </div>
                <div className="avatar border-2 border-base-100">
                  <div className="w-8">
                    <img
                      src="https://avatar.iran.liara.run/public/48"
                      alt="User"
                    />
                  </div>
                </div>
                <div className="avatar border-2 border-base-100/23">
                  <div className="w-8">
                    <img
                      src="https://avatar.iran.liara.run/public/girl"
                      alt="User"
                    />
                  </div>
                </div>
                <div className="avatar border-2 border-base-100">
                  <div className="w-8">
                    <img
                      src="https://avatar.iran.liara.run/public"
                      alt="User"
                    />
                  </div>
                </div>
              </div>
              <span className="text-sm opacity-75">
                Join 100+ developers improving their skills
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
