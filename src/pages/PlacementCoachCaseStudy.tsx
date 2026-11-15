import { ArrowUpRight, ExternalLink, GraduationCap, ShieldCheck } from 'lucide-react';
import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import Tag from '@/components/Tag';

const STUDENT_JOURNEY = [
  { label: 'Explore', sublabel: 'Discuss interests and compare 2–3 career paths' },
  { label: 'Choose', sublabel: 'Select one of five curated technology careers' },
  { label: 'Diagnose', sublabel: 'Week-0 assessment establishes a starting level' },
  { label: 'Weekly loop', sublabel: 'Plan, assess, score and coach' },
  { label: 'Build readiness', sublabel: 'Progress toward industry readiness by Semester 6' },
];

const AGENTS = [
  ['Discovery', 'Explores interests and strengths, then shortlists career options.'],
  ['Roadmap', 'Maps the chosen career to semester-wise and month-wise skills.'],
  ['Planner', 'Creates a weekly plan sized to the student’s available study hours.'],
  ['Assessment', 'Selects a quiz, written test or assignment suited to the skill.'],
  ['Evaluation', 'Scores demonstrated mastery on a 0–4 scale and updates readiness.'],
  ['Coaching', 'Targets the weakest skill with focused practice and feedback.'],
];

const WEEKLY_LOOP = [
  { label: 'Monday · Plan', sublabel: '3–5 hours of focused tasks and resources' },
  { label: 'Friday · Assess', sublabel: 'Quiz, written test or practical assignment' },
  { label: 'Friday · Evaluate', sublabel: 'Skill scores, evidence and readiness level' },
  { label: 'Weekend · Coach', sublabel: 'Practice focused on the weakest skill' },
  { label: 'Next week', sublabel: 'Rules-based orchestrator sets the next goal' },
];

export default function PlacementCoachCaseStudy() {
  return (
    <CaseStudyLayout
      title="Placement Career Coach"
      subtitle="An AI coach that takes an engineering student from a career aspiration to a semester-wise roadmap, weekly learning plan, honest assessment and targeted coaching."
      tags={['Independent build', 'EdTech', 'Agentic workflow', 'Personalized learning']}
      backPath="ai-portfolio"
      backLabel="Back to AI Portfolio"
    >
      <CaseSection eyebrow="The problem" title="Students need a coach. Colleges cannot scale one-to-one guidance.">
        <div className="card-surface p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-white">For students</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-400">
                <li>Career choices are often made late or by guesswork.</li>
                <li>Lectures do not always map clearly to industry skills.</li>
                <li>Students lack an honest, ongoing view of job readiness.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">For colleges</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-400">
                <li>Placement teams and mentors cannot provide intensive one-to-one coaching at scale.</li>
                <li>Readiness gaps often surface only near placement season.</li>
                <li>Online courses provide content, but not a connected coaching loop.</li>
              </ul>
            </div>
          </div>
          <div className="mt-7 border-t border-ink-800/60 pt-6">
            <span className="eyebrow">V1 scope</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">Engineering students in Semesters 3–6, with five curated technology career paths: DevOps, Cybersecurity, Data Analytics, Full-stack and VLSI. Colleges are the intended buyer; students are the primary users.</p>
          </div>
          <a className="btn-primary mt-7" href="https://placement-career-coach.ai.studio/" target="_blank" rel="noreferrer">
            Explore the AI Studio prototype <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Student experience" title="From ‘no idea’ to job-ready, one week at a time">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={STUDENT_JOURNEY} direction="vertical" />
          <p className="mt-6 text-sm leading-relaxed text-ink-400">The first diagnostic matters: the weekly plan starts from the student’s current level rather than assuming everyone begins at zero. A typical week is intentionally manageable at around 3–5 hours, with lighter plans around exam periods.</p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product architecture" title="Six focused agents, one orchestrator and a shared student profile">
        <div className="card-surface p-6 lg:p-8">
          <div className="mb-6 rounded-xl border border-brand-500/30 bg-brand-500/5 p-4">
            <span className="eyebrow text-brand-300">Rules-based orchestrator</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">Decides which agent runs next, passes it the required context and escalates to a human mentor when repeated gaps or low-confidence grading require review. It is deliberately not a free-roaming AI agent.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map(([title, body], index) => (
              <div key={title} className="rounded-xl border border-ink-800/60 bg-ink-900/30 p-4">
                <span className="eyebrow">Agent 0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-ink-800/60 p-5">
            <span className="eyebrow">Shared Student Profile</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">Stores skill mastery (0–4), current readiness level, roadmap progress, assessment evidence and available study hours. Agents read and update this shared record instead of passing raw chat histories between each other.</p>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink-500">Prototype scope: the Roadmap, Evaluation and Coaching agents are demonstrated end to end. The other agent roles describe the wider product architecture.</p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Weekly orchestration" title="Plan, assess, score, coach and decide what comes next">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={WEEKLY_LOOP} direction="vertical" />
          <div className="mt-7 border-t border-ink-800/60 pt-6">
            <span className="eyebrow">Example decision rules</span>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['Student chooses a career', 'Run a Week-0 diagnostic and start with the weakest skill.'],
                ['Skill meets its target', 'Move to the next skill in the roadmap.'],
                ['Target missed once', 'Coach on the questions or tasks missed, then reassess.'],
                ['Target missed twice', 'Refresh prerequisite skills and notify a human mentor.'],
                ['Student falls two weeks behind', 'Re-plan the semester around the must-have skills.'],
                ['Grading confidence is low', 'Request another assessment or human review before the score counts.'],
              ].map(([trigger, action]) => (
                <div key={trigger} className="rounded-lg border border-ink-800/60 p-4">
                  <p className="text-sm font-medium text-white">{trigger}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Assessment design" title="Choose the assessment method that matches the skill">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Quiz', 'Concepts and recall', 'Examples: Linux and Git fundamentals.'],
            ['Written test', 'Apply knowledge', 'Examples: writing a shell script or solving a Python task.'],
            ['Assignment', 'Build and demonstrate', 'Example: containerize and deploy an application.'],
          ].map(([method, type, example]) => (
            <div key={method} className="card-surface p-5">
              <span className="eyebrow">Assessment method</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{method}</h3>
              <p className="mt-2 text-sm text-brand-300">{type}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{example}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-ink-800/60 bg-ink-900/30 p-5">
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent-400"/><span className="font-medium text-white">Fairness and confidence controls</span></div>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">Skills use a 0–4 rubric with defined anchors. AI grading should cite evidence, low-confidence or disputed scores go to human review, mastery requires two consistent results, and students can appeal. Voice interviews are part of the next planned phase rather than a claim about the current prototype.</p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product roadmap and measurement" title="Prove the weekly habit before expanding scope">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Now · MVP', 'Five curated careers, month-wise roadmaps, Week-0 diagnostic, weekly plan, assessment and coaching.'],
            ['Next', 'Voice interviews, adaptive re-planning, faculty dashboard, WhatsApp nudges and cohort benchmarks.'],
            ['Later', 'Open career catalogue, verified skill profiles, early-semester discovery and regional languages.'],
          ].map(([stage, body]) => (
            <div key={stage} className="card-surface p-5">
              <span className="eyebrow">Product roadmap</span>
              <h3 className="mt-2 font-semibold text-white">{stage}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-brand-500/25 bg-brand-500/5 p-5">
          <span className="eyebrow text-brand-300">Proposed north-star metric</span>
          <p className="mt-2 text-lg font-semibold text-white">Weekly active learners completing plan → assessment in 3 of every 4 weeks</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-400">Supporting measures include Week-4/Week-8 retention, students moving up a skill level, AI-to-faculty grading agreement and eventual relationship between readiness scores and placement outcomes. These are product success measures, not measured prototype results.</p>
        </div>
      </CaseSection>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-800/60 pt-8">
        <div><span className="eyebrow">Independent AI project</span><p className="mt-2 text-sm text-ink-400">Prototype demonstrates the roadmap, evaluation and coaching loop.</p></div>
        <a className="btn-secondary" href="https://placement-career-coach.ai.studio/" target="_blank" rel="noreferrer">Open AI Studio prototype <ExternalLink className="h-4 w-4" /></a>
      </div>
    </CaseStudyLayout>
  );
}
