import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="footer py-10">
          <div>
            <Link href="/" className="text-2xl font-bold mb-2 logo">
              <span className="text-primary">Hype</span>Coding
            </Link>
            <p className="max-w-xs opacity-70">
              The ultimate platform for mastering coding challenges and acing
              technical interviews.
            </p>
          </div>
          <div className="flex justify-between w-full text-lg">
            <div className="flex flex-col">
              <span className="footer-title">Product</span>
              <Link href="/problems" className="link link-hover">
                Problems
              </Link>
              <Link href="/explore" className="link link-hover">
                Explore
              </Link>
              <Link href="/contests" className="link link-hover">
                Contests
              </Link>
              <Link href="/interview" className="link link-hover">
                Interview Prep
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Company</span>
              <Link href="/about" className="link link-hover">
                About us
              </Link>
              <Link href="/contact" className="link link-hover">
                Contact
              </Link>
              <Link href="/jobs" className="link link-hover">
                Jobs
              </Link>
              <Link href="/press" className="link link-hover">
                Press kit
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Legal</span>
              <Link href="/terms" className="link link-hover">
                Terms of use
              </Link>
              <Link href="/privacy" className="link link-hover">
                Privacy policy
              </Link>
              <Link href="/cookies" className="link link-hover">
                Cookie policy
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a
                  href="https://github.com/sakibansari546/cohort-leetlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github size="30" />
                </a>
                <a
                  href="https://x.com/Sakib_654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter size="30" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sakib-ansari-61388326b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin size="30" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer footer-center p-4 border-t border-base-300 opacity-60">
          <div>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              HypeCoding
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
