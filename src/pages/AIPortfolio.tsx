import { ArrowLeft, Briefcase, Sparkles } from 'lucide-react';
import { navigate } from '@/hooks/useHashRoute';
import { AI_PROJECTS } from '@/data/aiProjects';
import AIProjectCard from '@/components/AIProjectCard';
import SectionHeading from '@/components/SectionHeading';

export default function AIPortfolio() {
  const professionalProjects = AI_PROJECTS.filter((project) => project.kind === 'professional');
  const independentProjects = AI_PROJECTS.filter((project) => project.kind === 'independent');

  return (
    <article className="pt-28 pb-24">
      <div className="container-px mx-auto max-w-[1400px]">
        <button onClick={() => navigate('')} className="btn-ghost mb-12 reveal">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </button>

        <div className="max-w-4xl">
          <div className="eyebrow mb-5 flex items-center gap-2 reveal">
            <Sparkles className="h-4 w-4 text-brand-400" /> Product thinking meets applied AI
          </div>
          <h1 className="text-display-xl font-semibold tracking-tight text-gradient reveal reveal-delay-1">
            AI Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-300 reveal reveal-delay-2">
            A collection of AI products and prototypes I have helped shape and build — spanning insurance,
            healthcare, customer experience, enterprise workflows and personalized learning.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-500 reveal reveal-delay-3">
            The first three projects are from my professional product experience at CIMET, Gupshup and Sprinklr.
            The last two are independent builds exploring agentic workflows and practical LLM applications.
          </p>
        </div>

        <section className="mt-16">
          <SectionHeading
            eyebrow="01 / Professional experience"
            title="AI products built around real user and business problems"
            description="How I applied AI across document understanding, conversational assistance and agent productivity — from problem framing and product design to model workflows and measurable outcomes."
          />
          <div className="mt-9 flex flex-col gap-6">
            {professionalProjects.map((project) => (
              <div key={project.slug} className="reveal">
                <AIProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading
            eyebrow="02 / Independent builds"
            title="Hands-on experiments in agentic AI"
            description="Personal projects where I take the product problem further into a working prototype — making architecture, guardrails and evaluation part of the product experience."
          />
          <div className="mt-9 flex flex-col gap-6">
            {independentProjects.map((project) => (
              <div key={project.slug} className="reveal">
                <AIProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-ink-800/60 bg-ink-900/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 reveal">
          <div>
            <span className="eyebrow flex items-center gap-2"><Briefcase className="h-3.5 w-3.5" /> Beyond this portfolio</span>
            <p className="mt-2 text-base text-ink-300">Explore the broader product case studies, platform launches and growth work.</p>
          </div>
          <button onClick={() => { navigate(''); setTimeout(() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="btn-secondary shrink-0">
            <Briefcase className="h-4 w-4" /> View case studies
          </button>
        </div>
      </div>
    </article>
  );
}
