# Overview Memory

This file is the single shared source of truth for cross-agent status. Every agent MUST read this file before starting work and update it immediately after completing or starting a task, to avoid conflicting or duplicated work.

## Vision Recap

We are prototyping the future of "agent-personalized software": a shared set of backend primitives (mock data for now) that different frontend experiences can be radically customized around (e.g., an email client that looks like a task list vs. one that looks like a calendar), while remaining visually cohesive and high quality. This repo (`cmose/Finance`) is the sandbox project used to explore this.

## Agent Swarm & Phase Order

| Phase | Agent | Plan File | Log File | Status |
|---|---|---|---|---|
| 1 | PM-Agent | `plan/pm-agent/plan.md` | `plan/pm-agent/log.md` | Complete |
| 2 | SWE-Agent | `plan/swe-agent/plan.md` | `plan/swe-agent/log.md` | Complete |
| 3 | Design-Agent | `plan/design-agent/plan.md` | `plan/design-agent/log.md` | Complete |
| 4 | QA-Agent | `plan/qa-agent/plan.md` | `plan/qa-agent/log.md` | Complete |

## Operating Protocol (all agents)

1. Read your `plan.md` in full before starting.
2. Read this `overview-memory.md` to check for updates/blockers from other agents.
3. Execute your assigned tasks.
4. Log every completed/in-progress task with an ISO-8601 timestamp in your `log.md`.
5. Update your row in the Status table above (and add a dated entry to the Cross-Agent Update Log below).
6. Flag any blockers or handoffs explicitly so downstream agents know what's ready.

## Cross-Agent Update Log

<!-- Newest entries at the top. Format: `- YYYY-MM-DDTHH:MM:SSZ | Agent | Update` -->

- 2026-09-20T23:16:52Z | QA-Agent | Prototype reviewed against scope: shared mock data, Fluent UI design cohesion, and persona coverage documented for validation handoff.
- 2026-09-20T23:16:51Z | Design-Agent | Delivered Fluent UI v9 finance prototype with three persona-driven experiences sharing one design language and dataset.
- 2026-09-20T23:16:50Z | SWE-Agent | Added typed finance primitives, mock API module, and local Vite app setup documentation.
- 2026-09-20T22:27:30Z | PM-Agent | Completed initial repository review and confirmed repo starting state.
- 2026-09-20T00:00:00Z | PM-Agent (bootstrap) | Plan folder, per-agent plans, logs, and this overview file created. Ready for PM-Agent to begin Phase 1 (research & scoping).

## Known Risks / Open Questions

- The prototype intentionally uses a single in-memory API call; future iterations may split data fetching by feature while preserving the shared contract.
- If higher-fidelity planning or trading workflows are needed, the dataset will need additional time-series and calendar primitives.
