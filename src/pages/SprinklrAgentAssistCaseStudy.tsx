import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';

const SYSTEM_FLOW = [
  { label: 'Incoming customer email', sublabel: 'Customer message and conversation context' },
  { label: 'Text preprocessing', sublabel: 'Clean and prepare message content' },
  { label: 'Intent detection', sublabel: 'BERT-based classification' },
  { label: 'Response relevance scoring', sublabel: 'LightGBM ranks candidate responses' },
  { label: 'Agent suggestions', sublabel: 'Relevant approved responses shown in the workflow' },
  { label: 'Agent review and send', sublabel: 'Human agent remains in control' },
];

export default function SprinklrAgentAssistCaseStudy() {
  return (
    <CaseStudyLayout
      title="AI Agent Assist for Enterprise Customer Experience"
      subtitle="An agent-facing AI capability that identifies customer intent and surfaces relevant response suggestions inside the support workflow."
      tags={['Sprinklr', 'Enterprise CX', 'BERT', 'LightGBM', 'Intent detection']}
      backPath="ai-portfolio"
      backLabel="Back to AI Portfolio"
    >
      <CaseSection eyebrow="The problem" title="Help support agents respond faster and more consistently">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-base leading-relaxed text-ink-300">
            Agents handle a high volume of customer emails and often need to interpret the intent, search for an approved
            response and adapt it to the conversation. The product goal was to bring relevant response suggestions into
            the agent workflow while keeping the agent in control of the final answer.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product experience" title="Predict intent, rank responses and keep the agent in control">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={SYSTEM_FLOW} direction="vertical" />
          <p className="mt-6 text-sm leading-relaxed text-ink-400">
            The assistant predicts the customer’s intent and presents the agent with a short list of relevant,
            pre-defined response suggestions. Agents can review, edit and send a response rather than handing the
            customer conversation over to an autonomous system.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="Model workflow" title="Separate intent classification from response ranking">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface p-6">
            <span className="eyebrow">Intent detection</span>
            <h3 className="mt-3 text-lg font-semibold text-white">Fine-tuned BERT model</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Processes the incoming email and predicts the customer intent from the message context.
            </p>
          </div>
          <div className="card-surface p-6">
            <span className="eyebrow">Response relevance</span>
            <h3 className="mt-3 text-lg font-semibold text-white">LightGBM ranking model</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Ranks candidate responses using signals such as predicted intent, message similarity, customer segment
              and product context.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {['BERT', 'LightGBM', 'Intent classification', 'Response ranking', 'Agent workflow'].map((item) => (
            <Tag key={item} variant="brand">{item}</Tag>
          ))}
        </div>
      </CaseSection>

      <CaseSection eyebrow="Product outcome" title="Improved intent detection quality">
        <div className="max-w-md">
          <MetricCard value="20%" label="Improvement in intent F1 score" description="Relative improvement in the model’s intent-classification F1 score." variant="large" />
        </div>
      </CaseSection>

      <CaseSection eyebrow="My role" title="Product Success across the AI-assisted agent journey">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-sm leading-relaxed text-ink-300">
            As Product Success Manager, I worked with customer and engineering teams to shape the agent use cases,
            understand workflow requirements, align on model-quality expectations and translate feedback from support
            teams into product improvements.
          </p>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
