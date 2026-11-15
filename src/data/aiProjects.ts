export type AIProjectMetric = { value: string; label: string; note?: string };

export type AIProject = {
  slug: 'cimet' | 'gupshup' | 'sprinklr' | 'employee-assistant' | 'placement-career-coach';
  number: string;
  title: string;
  organization: string;
  kind: 'professional' | 'independent';
  summary: string;
  why: string;
  what: string;
  how: string;
  role: string;
  tags: string[];
  metrics?: AIProjectMetric[];
  detailPath: string;
  externalLink?: { label: string; url: string };
  stage?: string;
};

/**
 * AI portfolio content is data-driven. Add new projects here and the listing page
 * will render them under Professional work or Independent builds.
 */
export const AI_PROJECTS: AIProject[] = [
  {
    slug: 'cimet',
    number: '01',
    title: 'AI-Powered Policy Intake & Personalised Recommendations',
    organization: 'CIMET · InsurTech',
    kind: 'professional',
    summary:
      'An AI-led policy-upload journey that automates quote inputs and recommends health insurance plans tailored to a customer’s existing cover and needs.',
    why:
      'The current quote journey relies on customers manually entering details from complex policy documents, adding time and friction. After entering those details, customers can still face a long list of unfamiliar plans and are left to interpret policy differences themselves. The product aims to simplify both steps: capture policy information from an upload and guide customers towards relevant options with clear reasons.',
    what:
      'Customers upload their current health insurance policy instead of manually keying in its details. The system extracts and validates key fields, maps the policy to structured product data, applies eligibility and comparison rules, and presents a ranked set of personalised recommendations with plain-English explanations of why each plan may fit.',
    how:
      'A hybrid workflow uses deterministic checks for file intake, image quality, text extraction, field validation, product matching and eligibility/ranking. OCR handles scanned documents, with a vision-model fallback for difficult inputs. A language model classifies ambiguous insurance documents, extracts variable policy fields into a strict schema, and explains recommendations using only the structured comparison data. Low-confidence extraction can be escalated to a stronger model; the rules engine, not the LLM, determines eligibility and ranking.',
    role:
      'Product Manager — leading the AI journey from problem framing and workflow definition through requirements, experience design and cross-functional delivery with engineering and business teams.',
    tags: ['Policy upload', 'Document AI', 'Structured extraction', 'Rules engine', 'Personalised recommendations'],
    metrics: [
      { value: '25%', label: 'Quote-comparison time reduction — target' },
      { value: '95%+', label: 'Field extraction precision — target' },
      { value: '92%+', label: 'Field extraction recall — target' },
    ],
    detailPath: 'ai/cimet',
    stage: 'Professional work',
  },
  {
    slug: 'gupshup',
    number: '02',
    title: 'Healthcare Agentic AI Assistant',
    organization: 'Gupshup · Conversational AI',
    kind: 'professional',
    summary:
      'A WhatsApp-based AI assistant for healthcare and insurance product information, pricing and related web research.',
    why:
      'Users needed quick, dependable answers across product brochures, pricing sources and changing web information. A single generic response path risked using incomplete or unverified information.',
    what:
      'A master agent routes each query to the appropriate capability: document Q&A, pricing retrieval or open-internet research. The assistant returns source-backed answers and falls back or abstains when reliable evidence is unavailable.',
    how:
      'GPT-4 powers the conversational experience. A RAG agent searches approved brochures and documents; a pricing agent retrieves and validates prices from designated websites or APIs rather than guessing; an open-internet agent is used when additional current information is needed. Input, domain, tool-access and answer-validation guardrails keep the workflow in scope.',
    role:
      'Product Manager, Growth — defining use cases and agent responsibilities, shaping the conversational workflow and guardrails, and partnering with engineering on quality, adoption and experience outcomes.',
    tags: ['GPT-4', 'Multi-agent orchestration', 'RAG', 'Pricing retrieval', 'Guardrails'],
    metrics: [
      { value: '92%', label: 'Retrieval precision' },
      { value: '<4s', label: 'Response latency' },
      { value: '95%', label: 'Adoption uplift' },
      { value: '+20%', label: 'CSAT improvement' },
    ],
    detailPath: 'ai/gupshup',
    stage: 'Professional work',
  },
  {
    slug: 'sprinklr',
    number: '03',
    title: 'AI Agent Assist for Customer Support',
    organization: 'Sprinklr · Enterprise CX',
    kind: 'professional',
    summary:
      'An agent-assist capability that reads incoming customer emails, identifies the intent and suggests relevant responses inside the agent workflow.',
    why:
      'Support agents handled a high volume of repetitive questions and often searched manually for approved responses. This increased average handling time and created inconsistency across answers.',
    what:
      'The experience predicts the customer intent and presents the agent with the top three to five relevant, pre-defined response suggestions. Agents remain in control: they can review, edit and send the response.',
    how:
      'Incoming email text is cleaned and pre-processed. A fine-tuned BERT model classifies intent; a LightGBM model ranks the response library using intent, message similarity, customer segment and product context. Historical agent-handled emails and labelled intents support training and continuous improvement.',
    role:
      'Product Success Manager — shaping the agent workflow and use cases with customer and engineering teams, and tracking model quality, response usefulness and operational impact.',
    tags: ['BERT', 'Intent detection', 'LightGBM', 'Response ranking', 'Agent experience'],
    metrics: [
      { value: '20%', label: 'Intent F1 score improvement' },
    ],
    detailPath: 'ai/sprinklr',
    stage: 'Professional work',
  },
  {
    slug: 'employee-assistant',
    number: '04',
    title: 'Employee AI Assistant',
    organization: 'Personal project · Enterprise AI',
    kind: 'independent',
    summary:
      'A hands-on prototype for employees to ask policy questions, retrieve their own HR information and initiate workplace actions through one conversational interface.',
    why:
      'Employee requests are split across policy documents, internal records and service workflows. The prototype explores how to make these tasks easier without letting a language model bypass permissions or approval processes.',
    what:
      'It supports three request types: cited answers from policy documents; employee-specific lookups such as leave, reimbursement and asset details; and actions such as ticket creation. Sensitive requests are routed for human review.',
    how:
      'A deterministic Python router and orchestrator coordinate the workflow. Policy Q&A uses all-MiniLM embeddings, cosine-similarity retrieval and a local Qwen2.5 3B model via Ollama. Pydantic validates request/response structure; Python tools enforce the demo identity boundary and handle mock records and ticket actions. Human review is required for sensitive changes.',
    role:
      'Personal project — exploring how an employee-facing assistant can combine policy retrieval, employee-specific tools and controlled actions. I designed the workflows, architecture and safeguards, then built the local prototype.',
    tags: ['RAG', 'Tool use', 'Local LLM', 'Authorization checks', 'Human-in-the-loop'],
    detailPath: 'ai/employee-assistant',
    externalLink: {
      label: 'View GitHub repository',
      url: 'https://github.com/NileshS0110/raapid-agentic-assistant',
    },
    stage: 'Personal build',
  },
  {
    slug: 'placement-career-coach',
    number: '05',
    title: 'Placement Career Coach',
    organization: 'Independent build · EdTech',
    kind: 'independent',
    summary:
      'An AI coach that takes an engineering student from a career goal to a semester-wise roadmap, weekly learning plan, assessment and targeted coaching.',
    why:
      'Students can struggle to choose a career path and translate it into job-ready skills. Colleges cannot provide intensive one-to-one mentoring at scale, and readiness often becomes clear only near placement season.',
    what:
      'The product focuses on engineering students in Semesters 3–6 and five curated tech careers: DevOps, Cybersecurity, Data Analytics, Full-stack and VLSI. It combines career discovery, a roadmap, a Week-0 diagnostic, manageable weekly tasks, assessments and coaching on skill gaps.',
    how:
      'The design uses six focused agents — Discovery, Roadmap, Planner, Assessment, Evaluation and Coaching — coordinated by a rules-based orchestrator. A shared Student Profile stores skill mastery (0–4), current level, roadmap progress, evidence and available hours. The prototype demonstrates the Roadmap, Evaluation and Coaching flow end to end.',
    role:
      'Independent product concept and prototype — defining the initial scope, student journey, agent responsibilities, weekly orchestration rules, assessment approach and success metrics.',
    tags: ['Agentic workflow', 'Career roadmap', 'Personalized learning', 'Assessment', 'Human review'],
    detailPath: 'ai/placement-career-coach',
    externalLink: {
      label: 'Open AI Studio prototype',
      url: 'https://placement-career-coach.ai.studio/',
    },
    stage: 'Product prototype',
  },
];

export function getAIProject(slug: string) {
  return AI_PROJECTS.find((project) => project.slug === slug);
}
