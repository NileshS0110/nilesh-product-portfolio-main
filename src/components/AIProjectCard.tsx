import { ArrowUpRight, ExternalLink, Briefcase, Bot, GraduationCap } from 'lucide-react';
import { navigate } from '@/hooks/useHashRoute';
import type { AIProject } from '@/data/aiProjects';
import Tag from './Tag';

type AIProjectCardProps = {
  project: AIProject;
};

export default function AIProjectCard({ project }: AIProjectCardProps) {
  const Icon = project.kind === 'professional'
    ? Briefcase
    : project.slug === 'employee-assistant' ? Bot : GraduationCap;

  return (
    <article className="card-surface relative overflow-hidden p-6 lg:p-8">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/5 blur-3xl" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700/70 bg-ink-900 text-brand-300">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <span className="eyebrow">{project.number} / {project.organization}</span>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-500">
                {project.kind === 'professional' ? 'Professional experience' : 'Independent project'}
              </div>
            </div>
          </div>
          {project.stage && (
            <span className="rounded-full border border-ink-700/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-400">
              {project.stage}
            </span>
          )}
        </div>

        <div className="mt-6 max-w-4xl">
          <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.summary}</p>
        </div>

        <div className="mt-7 grid gap-5 border-t border-ink-800/60 pt-6 md:grid-cols-3">
          <div>
            <span className="eyebrow">Why it mattered</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.why}</p>
          </div>
          <div>
            <span className="eyebrow">What the product does</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.what}</p>
          </div>
          <div>
            <span className="eyebrow">How it works</span>
            <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.how}</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-ink-800/50 bg-ink-900/30 p-4">
          <span className="eyebrow">My role</span>
          <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.role}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-800/60 pt-5 sm:grid-cols-3 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-xl font-semibold tracking-tight text-white">{metric.value}</div>
                <div className="mt-1 text-xs leading-snug text-ink-500">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-ink-800/60 pt-5">
          <button onClick={() => navigate(project.detailPath)} className="btn-primary">
            View project details <ArrowUpRight className="h-4 w-4" />
          </button>
          {project.externalLink && (
            <a className="btn-secondary" href={project.externalLink.url} target="_blank" rel="noreferrer">
              {project.externalLink.label} <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
