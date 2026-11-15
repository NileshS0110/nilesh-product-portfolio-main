# Nilesh Singh — Product & AI Portfolio

A personal product management portfolio built with React, TypeScript, Vite and Tailwind CSS.

## Run locally

On Windows PowerShell, use `npm.cmd` to avoid PowerShell's script-execution restriction:

```bash
npm.cmd install
npm.cmd run dev
```

To validate before deployment:

```bash
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

## AI Portfolio

The `#ai-portfolio` route brings together five AI projects in two groups:

- **Professional experience:** CIMET, Gupshup and Sprinklr.
- **Independent builds:** Employee AI Assistant and Placement Career Coach.

The listing is data-driven:

- `src/data/aiProjects.ts` — project descriptions, why/what/how narratives, role, tags, metrics and links.
- `src/pages/AIPortfolio.tsx` — grouped AI Portfolio page.
- `src/components/AIProjectCard.tsx` — reusable project card.
- `src/pages/CimetPolicyJourneyCaseStudy.tsx` — AI-powered policy intake and personalised recommendations.
- `src/pages/GupshupAIAssistantCaseStudy.tsx` — healthcare agentic AI assistant.
- `src/pages/SprinklrAgentAssistCaseStudy.tsx` — AI Agent Assist for customer experience.
- `src/pages/EmployeeAssistantCaseStudy.tsx` and `src/pages/PlacementCoachCaseStudy.tsx` — independent-project detail pages.

The original **Projects at Work** case studies remain available through their existing `case/*` routes. AI Portfolio project details use separate `ai/*` routes so project-specific narratives do not overwrite the broader work case studies.

To add a project, add an entry to `src/data/aiProjects.ts`, create a detail page, then register its route in `src/hooks/useHashRoute.ts` and `src/App.tsx`. Publish only metrics, technical details and ownership claims that can be substantiated; identify targets as targets.
