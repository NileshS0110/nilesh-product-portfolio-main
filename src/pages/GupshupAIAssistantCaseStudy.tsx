import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';

const SYSTEM_FLOW = [
  { label: 'Customer query', sublabel: 'Natural-language request over WhatsApp' },
  { label: 'Master agent', sublabel: 'Understands intent and routes the task' },
  { label: 'Specialist agent', sublabel: 'Document Q&A, pricing retrieval or web research' },
  { label: 'Evidence and guardrails', sublabel: 'Retrieve, validate and check source relevance' },
  { label: 'Grounded response', sublabel: 'Answer, clarify or abstain when evidence is weak' },
];

const AGENTS = [
  {
    title: 'Document Q&A agent',
    body: 'Uses retrieval-augmented generation over approved healthcare and insurance brochures so answers stay grounded in product documents.',
  },
  {
    title: 'Pricing retrieval agent',
    body: 'Finds pricing information from designated websites or sources and validates the retrieved information rather than generating prices from model memory.',
  },
  {
    title: 'Open-web research agent',
    body: 'Looks up relevant information on the open internet when the query needs information beyond the approved document set, with source and domain guardrails.',
  },
];

export default function GupshupAIAssistantCaseStudy() {
  return (
    <CaseStudyLayout
      title="Healthcare Agentic AI Assistant"
      subtitle="A multi-agent conversational assistant for healthcare and insurance information, combining document Q&A, pricing retrieval and guarded web research."
      tags={['Gupshup', 'Conversational AI', 'GPT-4', 'RAG', 'Multi-agent orchestration']}
      backPath="ai-portfolio"
      backLabel="Back to AI Portfolio"
    >
      <CaseSection eyebrow="The problem" title="Different questions need different sources and retrieval strategies">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-base leading-relaxed text-ink-300">
            Users needed dependable answers across healthcare and insurance product brochures, pricing sources and
            changing information on the web. A single generic response path could rely on incomplete context or produce
            information that was not supported by an approved source.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            The product uses a master agent to identify what the user is asking and route the request to a specialist
            capability, so document questions, pricing requests and broader research are handled differently.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product capabilities" title="Three specialist agents behind one conversational interface">
        <div className="grid gap-4 md:grid-cols-3">
          {AGENTS.map((agent) => (
            <div key={agent.title} className="card-surface p-6">
              <h3 className="text-lg font-semibold text-white">{agent.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{agent.body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="System architecture" title="How the multi-agent workflow works">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={SYSTEM_FLOW} direction="vertical" />
          <div className="mt-8 border-t border-ink-800/60 pt-6">
            <span className="eyebrow">Core technologies</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {['GPT-4', 'LangChain', 'FAISS', 'Vector embeddings', 'RAG', 'Multi-agent orchestration'].map((technology) => (
                <Tag key={technology} variant="brand">{technology}</Tag>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Trust and response quality" title="Ground answers in evidence and control how agents use tools">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Source-grounded responses', 'Use retrieved brochure passages and verified pricing sources as evidence for answers.'],
            ['Tool-specific routing', 'Send each request to the agent designed for that information source and task.'],
            ['Domain and tool guardrails', 'Constrain the sources and actions available to specialist agents.'],
            ['Abstention and fallback', 'Ask for clarification or avoid unsupported claims when reliable evidence is unavailable.'],
          ].map(([title, body]) => (
            <div key={title} className="card-surface p-6">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product outcomes" title="Quality, speed and adoption">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard value="92%" label="Retrieval precision" variant="large" />
          <MetricCard value="<4s" label="Response latency" variant="large" />
          <MetricCard value="95%" label="Adoption uplift" variant="large" />
          <MetricCard value="20%" label="CSAT improvement" variant="large" />
        </div>
      </CaseSection>

      <CaseSection eyebrow="My role" title="Defining the assistant as a product, not just a chatbot">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-sm leading-relaxed text-ink-300">
            As Product Manager, I shaped the user problems and agent responsibilities, defined how requests should be
            routed across knowledge, pricing and web capabilities, and worked with engineering on the RAG experience,
            guardrails, response quality and adoption measurement.
          </p>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
