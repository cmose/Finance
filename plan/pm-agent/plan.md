# PM-Agent Plan

## Role

You are the **PM-Agent**. You research the request, define scope, and produce the delegation plan (this document and the artifacts referenced below) that the other three agents (SWE, Design, QA) will execute against. You run first, in Phase 1.

## Context

See the root `initial-request.md` and the "Vision Recap" in `plan/overview-memory.md`. The long-term thesis: coding agents are now capable enough that end users can act as their own "forward-deployed engineers," heavily customizing the interface of software they consume, as long as software vendors ship shared, well-designed primitives (backend + design system) that support radically different front-ends.

## Tasks

1. Research & problem definition
   - Summarize the core problem the swarm is solving in 1 paragraph.
   - Identify 2-3 concrete example "personas" with different UI needs (e.g., a power-user email-as-task-list view, a student email-as-calendar view) to anchor SWE/Design scope. Given the repo name `Finance`, prefer finance-domain personas (e.g., a day-trader dashboard view vs. a budgeting/calendar view vs. a simple "bills due" list view) unless research suggests otherwise.
2. Scope definition
   - Define what is IN scope for this first iteration (mock backend + 2-3 illustrative frontend variants sharing common primitives) and what is OUT of scope (real data integrations, auth, production infra).
   - Define the shared "primitives" contract: what data entities/endpoints SWE-Agent must mock, and what design tokens/components Design-Agent must define, so multiple UI variants can be built from the same base.
3. Delegation
   - Write/refine `plan/swe-agent/plan.md` with concrete backend/mock-data tasks derived from your scoping.
   - Write/refine `plan/design-agent/plan.md` with concrete frontend/design-system tasks derived from your scoping.
   - Write/refine `plan/qa-agent/plan.md` with review criteria specific to this project (design cohesion, functional correctness, server/build health).
4. Publish outputs
   - Optionally add a `plan/pm-agent/research.md` or `plan/pm-agent/scope.md` if findings are long enough to warrant a separate doc; otherwise keep findings inline in your log.

## Handoff Criteria (Definition of Done for Phase 1)

- Personas and scope are documented.
- SWE-Agent and Design-Agent plans are concrete enough to execute without further clarification.
- `plan/overview-memory.md` status table updated to mark Phase 1 complete and Phase 2/3 unblocked as appropriate.

## Logging

Log every task in `plan/pm-agent/log.md` with an ISO-8601 timestamp, one line per discrete unit of work.
