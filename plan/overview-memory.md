# Overview Memory

This file is the single shared source of truth for cross-agent status. Every agent MUST read this file before starting work and update it immediately after completing or starting a task, to avoid conflicting or duplicated work.

## Vision Recap

We are prototyping the future of "agent-personalized software": a shared set of backend primitives (mock data for now) that different frontend experiences can be radically customized around (e.g., an email client that looks like a task list vs. one that looks like a calendar), while remaining visually cohesive and high quality. This repo (`cmose/Finance`) is the sandbox project used to explore this.

## Agent Swarm & Phase Order

| Phase | Agent | Plan File | Log File | Status |
|---|---|---|---|---|
| 1 | PM-Agent | `plan/pm-agent/plan.md` | `plan/pm-agent/log.md` | Not started |
| 2 | SWE-Agent | `plan/swe-agent/plan.md` | `plan/swe-agent/log.md` | Blocked on Phase 1 |
| 3 | Design-Agent | `plan/design-agent/plan.md` | `plan/design-agent/log.md` | Blocked on Phase 1 & 2 |
| 4 | QA-Agent | `plan/qa-agent/plan.md` | `plan/qa-agent/log.md` | Blocked on Phase 2 & 3 |

## Operating Protocol (all agents)

1. Read your `plan.md` in full before starting.
2. Read this `overview-memory.md` to check for updates/blockers from other agents.
3. Execute your assigned tasks.
4. Log every completed/in-progress task with an ISO-8601 timestamp in your `log.md`.
5. Update your row in the Status table above (and add a dated entry to the Cross-Agent Update Log below).
6. Flag any blockers or handoffs explicitly so downstream agents know what's ready.

## Cross-Agent Update Log

<!-- Newest entries at the top. Format: `- YYYY-MM-DDTHH:MM:SSZ | Agent | Update` -->

- 2026-09-20T00:00:00Z | PM-Agent (bootstrap) | Plan folder, per-agent plans, logs, and this overview file created. Ready for PM-Agent to begin Phase 1 (research & scoping).

## Known Risks / Open Questions

- How much of the "agent-modifiable middleware" concept should be prototyped vs. simulated with mock data in this early phase? (PM-Agent to scope.)
- Need a lightweight design system/token set before Design-Agent starts building UI variants, to guarantee cohesion across radically different layouts.
- QA-Agent should not begin full review until SWE-Agent's mock API contracts are stable, to avoid re-reviewing churn.
