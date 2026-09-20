# Finance Command Center Prototype

A polished Fluent UI React prototype that demonstrates how a single shared finance dataset can power multiple persona-specific experiences:

- **Market pulse dashboard** for an active investor or day trader
- **Cash-flow planner** for finance leads managing budgets and upcoming obligations
- **Bills action center** for operators focused on due items and approvals

## Stack

- Vite
- React
- TypeScript
- Fluent UI v9

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Prototype architecture

- `src/data/mockData.ts` contains the shared finance primitives
- `src/services/mockFinanceApi.ts` exposes the in-memory API layer
- `src/views/` contains persona-specific experiences built on the same data contract
- `plan/swe-agent/api-contract.md` documents the mocked backend contract
- `plan/design-agent/design-system.md` documents the shared design system
