# SWE-Agent Plan

## Role

You are the **SWE-Agent**. You own backend work for this prototype, using **mock data only** (no real external integrations/auth in this phase). You run in Phase 2, after PM-Agent has scoped the project.

## Context

Read `plan/pm-agent/plan.md` and its log/output first to get the finalized personas, scope, and "shared primitives" contract. Do not start building until Phase 1 is marked complete in `plan/overview-memory.md`.

## Tasks (to be refined by PM-Agent's scoping, execute once unblocked)

1. Define the shared data model / primitives (e.g., accounts, transactions, categories, bills, budgets — adjust based on PM-Agent's persona research) as simple, well-typed mock data (JSON fixtures or an in-memory mock API layer).
2. Stand up a minimal local API/server (or mock API module) exposing these primitives via clear, documented endpoints/functions that multiple, differently-shaped frontends can consume identically.
3. Ensure the API surface is generic enough to support at least the personas/use-cases PM-Agent defines (e.g., same transaction data usable by both a "list" view and a "calendar" view).
4. Write a short `plan/swe-agent/api-contract.md` documenting endpoints/shape of mock data so Design-Agent can build against it without asking questions.
5. Include basic local run instructions (how to start the mock server) in the repo README or a `SETUP.md`.

## Handoff Criteria (Definition of Done for Phase 2)

- Mock backend runs locally without errors.
- API contract is documented and stable enough for Design-Agent to build against.
- `plan/overview-memory.md` updated: Phase 2 complete, Phase 3 unblocked.

## Logging

Log every task in `plan/swe-agent/log.md` with an ISO-8601 timestamp. Flag any breaking API changes clearly so Design-Agent and QA-Agent see them.
