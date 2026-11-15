import CaseStudyLayout, { CaseSection } from '@/components/CaseStudyLayout';
import FlowDiagram from '@/components/FlowDiagram';
import MetricCard from '@/components/MetricCard';
import Tag from '@/components/Tag';

const POLICY_JOURNEY = [
  { label: 'Upload current policy', sublabel: 'Replace lengthy manual data entry' },
  { label: 'Validate & read document', sublabel: 'File checks, text extraction and OCR' },
  { label: 'Extract policy details', sublabel: 'Structured fields with confidence checks' },
  { label: 'Match eligible products', sublabel: 'Canonical product mapping and rules' },
  { label: 'Rank relevant plans', sublabel: 'Compare cover, price and switching needs' },
  { label: 'Explain recommendations', sublabel: 'Plain-English reasons for each match' },
];

const PIPELINE_STAGES = [
  {
    title: '1. File intake and quality checks',
    body: 'Validate file type, size, page count and whether the document is corrupt or password-protected. For scans and phone photos, assess blur, resolution, rotation and cropping before processing; ask for a clearer upload when quality is insufficient.',
    mode: 'Deterministic checks and computer vision — no LLM required',
  },
  {
    title: '2. Text extraction and document classification',
    body: 'Extract embedded text directly from digital PDFs and DOCX files. Use OCR for scanned documents, with a vision-model fallback reserved for difficult layouts or poor-quality images. Rules pre-filter likely insurance documents; Claude Haiku or a lightweight classifier handles ambiguous cases, distinguishing private health insurance from documents such as Medicare cards, ambulance-only cover, OVHC, life or income protection and travel policies. It also classifies the document subtype, such as a certificate, renewal notice, tax statement, member card or PHIS.',
    mode: 'Parsers and OCR first; model-assisted classification for ambiguous documents',
  },
  {
    title: '3. Structured policy-field extraction',
    body: 'Extract insurer, product name, hospital tier, excess, premium and payment frequency, cover scope, state, start date and extras details into a strict JSON schema. Use Claude Haiku for the standard extraction path and route low-confidence cases to Claude Sonnet for a stronger second pass.',
    mode: 'LLM-assisted extraction with schema-constrained output and confidence-based fallback',
  },
  {
    title: '4. Validation and product matching',
    body: 'Validate extracted values with allowed-value and range checks, date validation and a fuzzy match between the policyholder and logged-in customer. Map insurer and product names to the canonical product catalogue using deterministic matching first, with a model fallback only when the match is unclear.',
    mode: 'Deterministic validation and catalogue matching, with limited model fallback',
  },
  {
    title: '5. Eligibility, ranking and explanations',
    body: 'Apply business rules for state, household scope, equal-or-better cover, price, waiting-period continuity when switching and product/panel availability. The rules engine determines eligibility and ranking; an LLM then turns the structured comparison into a plain-English explanation grounded only in the data supplied to it.',
    mode: 'Rules engine for decisions; LLM for grounded explanations',
  },
];

export default function CimetPolicyJourneyCaseStudy() {
  return (
    <CaseStudyLayout
      title="AI-Powered Policy Intake & Personalised Recommendations"
      subtitle="A document-led health insurance journey that automates policy data capture and helps customers understand which plans fit their needs — and why."
      tags={['CIMET', 'InsurTech', 'Document AI', 'LLM extraction', 'Personalised recommendations']}
      backPath="ai-portfolio"
      backLabel="Back to AI Portfolio"
    >
      <CaseSection eyebrow="The opportunity" title="Remove friction from quote creation and make plan choice easier">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-surface p-6 lg:p-8">
            <span className="eyebrow">Problem 01</span>
            <h3 className="mt-3 text-lg font-semibold text-white">Manual policy inputs slow the quote journey</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Customers currently need to read their existing policy and enter details themselves. That creates effort,
              slows quote generation and introduces friction before they can even compare alternatives.
            </p>
          </div>
          <div className="card-surface p-6 lg:p-8">
            <span className="eyebrow">Problem 02</span>
            <h3 className="mt-3 text-lg font-semibold text-white">A long list of complex plans is hard to evaluate</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              Health insurance terms and cover differences are difficult for many customers to interpret. Simply showing
              multiple plans leaves the customer to make a complex decision with limited context or confidence.
            </p>
          </div>
        </div>
        <div className="card-surface mt-4 p-6 lg:p-8">
          <span className="eyebrow">Product objective</span>
          <p className="mt-3 text-base leading-relaxed text-ink-200">
            Let customers upload their current policy instead of manually entering its details, then use those details
            to surface a focused set of personalised plan recommendations with clear explanations of why each option
            may be suitable.
          </p>
        </div>
      </CaseSection>

      <CaseSection eyebrow="What the product does" title="From a policy document to an explained recommendation">
        <div className="card-surface p-6 lg:p-8">
          <FlowDiagram steps={POLICY_JOURNEY} direction="vertical" />
          <p className="mt-6 text-sm leading-relaxed text-ink-400">
            The experience turns an unstructured policy document into validated product attributes, compares those
            attributes against available plans and presents recommendations with understandable reasons — rather than
            leaving the customer to interpret a catalogue of complex policies alone.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Policy upload', 'Automated data capture', 'Coverage comparison', 'Eligibility checks', 'Personalised ranking', 'Explainable recommendations'].map((item) => (
              <Tag key={item} variant="brand">{item}</Tag>
            ))}
          </div>
        </div>
      </CaseSection>

      <CaseSection eyebrow="AI and system design" title="Use models for ambiguity; keep critical decisions deterministic">
        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          <div className="card-surface p-6">
            <span className="eyebrow">Model-assisted tasks</span>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
              <li>• Classify ambiguous documents and identify the insurance document subtype.</li>
              <li>• Extract variable policy fields into a strict structured schema.</li>
              <li>• Explain plan recommendations in plain language, grounded in comparison data.</li>
            </ul>
          </div>
          <div className="card-surface p-6">
            <span className="eyebrow">Deterministic tasks</span>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-ink-300">
              <li>• File validation, image-quality checks, parsing and OCR orchestration.</li>
              <li>• Field validation, date/range checks and product-catalogue mapping.</li>
              <li>• Eligibility, cover comparison and recommendation ranking through business rules.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {PIPELINE_STAGES.map((stage) => (
            <div key={stage.title} className="card-surface p-6 lg:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-semibold text-white">{stage.title}</h3>
                <span className="text-xs leading-relaxed text-brand-300 sm:max-w-[44%] sm:text-right">{stage.mode}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-400">{stage.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-500">
          The LLM does not decide whether a customer is eligible or which plan ranks highest. Those decisions remain in
          deterministic product and business rules; model-generated explanations use the structured results as their source.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Success measures" title="Targets for the policy-upload journey">
        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard value="25%" label="Quote-comparison time reduction" description="Target through automated policy intake and fewer manual inputs" variant="large" />
          <MetricCard value="95%+" label="Field extraction precision" description="Target for reliable extraction of key policy fields" variant="large" />
          <MetricCard value="92%+" label="Field extraction recall" description="Target for capturing the required policy fields" variant="large" />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-500">
          These are target metrics for the initiative, not claimed production results.
        </p>
      </CaseSection>

      <CaseSection eyebrow="My role" title="Product ownership for this AI journey">
        <div className="card-surface p-6 lg:p-8">
          <p className="text-sm leading-relaxed text-ink-300">
            As Product Manager, I am leading the problem definition and end-to-end product journey: identifying where
            manual entry creates friction, shaping the policy-upload and recommendation experience, translating the
            workflow into requirements, aligning model-assisted and rules-based responsibilities, and partnering with
            engineering and business stakeholders on delivery and success measures.
          </p>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  );
}
