import SectionHeading from '@/components/SectionHeading';

const METRICS = [
  { value: '25%', label: 'Quote-page drop-off reduction', description: 'CIMET acquisition-to-purchase funnel' },
  { value: '10%', label: 'Overall funnel conversion improvement', description: 'CIMET acquisition-to-purchase funnel' },
  { value: '92%', label: 'Retrieval Precision', description: 'Healthcare Agentic AI' },
  { value: '25%', label: 'Average Handle Time reduction', description: 'Sprinklr AI Agent Assist' },
  { value: '2,000+', label: 'Agent hours saved / month', description: 'Sprinklr enterprise support operations' },
  { value: '$400K', label: 'Revenue Growth', description: 'Product-led upselling and cross-selling' },
];

export default function Impact() {
  return (
    <section id="impact" className="section-pad relative">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Impact"
          title="Measurable product outcomes"
          description="Verified results from products I've owned end-to-end — from 0-to-1 launches to AI-powered growth initiatives."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="card-surface card-hover p-6 lg:p-8 flex flex-col gap-3 reveal group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-ink-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 h-px bg-ink-800/60" />
              </div>
              <span className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white tracking-tight group-hover:text-brand-300 transition-colors duration-300">
                {m.value}
              </span>
              <span className="text-sm font-medium text-ink-200">{m.label}</span>
              <span className="text-xs text-ink-500 leading-relaxed">{m.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
