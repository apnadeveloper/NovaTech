import React from 'react';
import { Lightbulb, Target, Code, Rocket, TrendingUp } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Discovery & Audit",
    description: "We dive deep into your business goals, analyze your current digital presence, and identify growth opportunities."
  },
  {
    icon: <Target className="w-8 h-8 text-red-400" />,
    title: "Strategy & Planning",
    description: "Our strategists craft a tailored roadmap, selecting the right channels and technologies to maximize ROI."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Execution & Development",
    description: "Our designers and developers bring the vision to life with clean code, stunning visuals, and SEO-optimized content."
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-400" />,
    title: "Launch & Go-Live",
    description: "We handle the technical deployment, ensuring a smooth transition with zero downtime and immediate impact."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    title: "Optimization & Scaling",
    description: "Post-launch, we continuously monitor performance, run A/B tests, and refine strategies for long-term growth."
  }
];

const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
              Our Work Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A transparent, agile, and data-driven approach to delivering digital excellence.
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-24 h-24 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 group-hover:bg-slate-800 transition-all duration-300 shadow-xl">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;