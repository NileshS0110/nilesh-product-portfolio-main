import { ArrowUpRight, ExternalLink, ShieldCheck } from 'lucide-react';
import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import Tag from '@/components/Tag';

const SYSTEM_FLOW = [
  { label: 'Employee request', sublabel: 'Natural-language question or action' },
  { label: 'Request router', sublabel: 'Classifies policy, record or action intent' },
  { label: 'Python orchestrator', sublabel: 'Coordinates routing, permissions and safeguards' },
  { label: 'Specialized capability', sublabel: 'Policy retrieval / record tools / action tools' },
  { label: 'Validated response', sublabel: 'Answer, citation, clarification or approval request' },
];

const CAPABILITIES = [
  { title: 'Policy and process Q&A', body: 'Retrieves relevant company policy passages, answers with document citations, and handles outdated or conflicting sources.' },
  { title: 'Employee record lookup', body: 'Reads employee-specific mock records such as leave balance, reimbursement status and assigned assets, with an authorization check.' },
  { title: 'Workplace actions', body: 'Creates support tickets and places sensitive requests into a human-review queue rather than silently executing them.' },
];

export default function EmployeeAssistantCaseStudy() {
  return (
    <CaseStudyLayout
      title="A Personal AI Assistant for Employee Workflows"
      subtitle="A hands-on prototype exploring how an enterprise assistant can combine trusted knowledge retrieval, employee-specific tools and guarded actions in one natural-language experience."
      tags={['Personal project', 'Enterprise AI', 'RAG', 'Tool calling', 'Human-in-the-loop']}
      backPath="ai-portfolio"
      backLabel="Back to AI Portfolio"
    >
      <CaseSection eyebrow="Project overview" title="One assistant, three kinds of employee requests">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-base leading-relaxed text-ink-300">
            Employees often need to search policy documents, check information held in internal systems, or ask another
            team to take action. This prototype brings those requests into a single conversational interface while
            treating each request type differently: retrieve evidence for policy questions, use permission-aware tools
            for personal records, and apply additional review for sensitive actions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Policy questions', 'Personal records', 'Ticket creation', 'Sensitive requests', 'Source citations', 'Safe abstention'].map((item) => (
              <Tag key={item} variant="brand">{item}</Tag>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3 border-t border-ink-800/60 pt-6">
            <a className="btn-primary" href="https://github.com/NileshS0110/raapid-agentic-assistant" target="_blank" rel="noreferrer">
              View source code <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-2 text-xs text-ink-500"><ShieldCheck className="h-4 w-4 text-accent-400" /> Prototype uses synthetic employee data</span>
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Personal build" title="Exploring a practical employee-facing AI assistant">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-sm leading-relaxed text-ink-300">
            I built this as a personal exploration of how an employee-facing assistant can bring policy knowledge,
            employee-specific information and workplace actions into one experience. I designed the request journeys,
            chose where to use retrieval versus deterministic tools, and implemented the local prototype with safeguards
            for permissions and sensitive actions.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Product exploration', 'Workflow design', 'Local prototype', 'RAG and tool use', 'Guardrail design'].map((item) => (
              <Tag key={item} variant="brand">{item}</Tag>
            ))}
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product capabilities" title="Designed around the work employees actually need to do">
        <div className="grid gap-4 md:grid-cols-3">
          {CAPABILITIES.map((item, index) => (
            <div key={item.title} className="card-surface p-6">
              <span className="eyebrow">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{item.body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="System design" title="A lightweight orchestration architecture">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={SYSTEM_FLOW} direction="vertical" />
          <div className="mt-8 grid gap-4 border-t border-ink-800/60 pt-6 sm:grid-cols-3">
            <div><span className="eyebrow">Knowledge layer</span><p className="mt-2 text-sm text-ink-300">Markdown policy documents, chunking, local embeddings and cosine-similarity retrieval.</p></div>
            <div><span className="eyebrow">Tools layer</span><p className="mt-2 text-sm text-ink-300">Python functions backed by local JSON mock data for employee records and ticket actions.</p></div>
            <div><span className="eyebrow">Control layer</span><p className="mt-2 text-sm text-ink-300">Deterministic routing, schema validation, authorization checks, guardrails and human review.</p></div>
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Trust and safety" title="Failure handling is part of the product experience">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Outdated policy', 'Prefer the current policy version and cite the active source.'],
            ['No reliable answer', 'Abstain rather than invent an answer when evidence is insufficient.'],
            ['Conflicting information', 'Surface the conflict rather than silently choosing one source.'],
            ['Access boundary', 'Refuse cross-employee data access without revealing protected information.'],
            ['Tool failure', 'Return a truthful fallback when a record or action tool is unavailable.'],
            ['Sensitive action', 'Route requests requiring additional authorization to human review.'],
          ].map(([title, body]) => (
            <div key={title} className="card-surface p-5">
              <h3 className="font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="Build approach" title="A local-first prototype with transparent technology choices">
        <div className="card-surface p-6 lg:p-8">
          <span className="eyebrow">Technology choices</span>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Python', 'Streamlit', 'Pydantic', 'Qwen 2.5 3B', 'Ollama', 'all-MiniLM', 'NumPy cosine similarity', 'JSON mock tools'].map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            The prototype runs locally with synthetic employee records and policy documents. It is a product and
            engineering exploration rather than a connected enterprise deployment.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Possible extensions" title="Where the prototype could go next">
        <div className="card-surface p-6 lg:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              'Replace JSON mock records with permission-aware enterprise APIs and a production data store.',
              'Expand evaluation with larger, representative datasets and human-reviewed answer quality checks.',
              'Add observability for retrieval, tool calls, authorization decisions, latency and failure reasons.',
              'Test concurrency, scale and model trade-offs before selecting production infrastructure.',
            ].map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="font-mono text-xs text-brand-400">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-ink-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-800/60 pt-8">
        <div><span className="eyebrow">Personal AI project</span><p className="mt-2 text-sm text-ink-400">An independent prototype exploring safer AI-assisted employee workflows.</p></div>
        <a className="btn-secondary" href="https://github.com/NileshS0110/raapid-agentic-assistant" target="_blank" rel="noreferrer">Repository <ExternalLink className="h-4 w-4" /></a>
      </div>
    </CaseStudyLayout>
  );
}
