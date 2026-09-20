# Mock API Contract

## Surface

The prototype uses a single in-memory API module: `src/services/mockFinanceApi.ts`.

### `getFinanceDataset(): Promise<FinanceDataset>`

Returns the full shared dataset consumed by every persona view.

## Entity shapes

### `Account`
- `id`
- `name`
- `type`: `brokerage | checking | credit | savings`
- `institution`
- `balance`
- `trend`
- `status`: `healthy | watch | urgent`

### `Transaction`
- `id`
- `accountId`
- `merchant`
- `category`
- `amount`
- `type`: `credit | debit`
- `postedOn`
- `channel`: `card | transfer | wire | direct-deposit`
- `status`: `posted | pending`

### `Bill`
- `id`
- `name`
- `amount`
- `dueDate`
- `status`: `scheduled | due-soon | overdue | paid`
- `autopay`
- `accountId`
- `category`

### `Budget`
- `id`
- `category`
- `spent`
- `limit`
- `trend`: `up | flat | down`

### `Position`
- `id`
- `symbol`
- `name`
- `quantity`
- `averageCost`
- `marketPrice`
- `dayChangePercent`

### `Insight`
- `id`
- `title`
- `description`
- `tone`: `positive | neutral | warning`
- `persona`: array of `trader | planner | focus`

## Persona mapping

- **Trader dashboard**: positions, accounts, recent market-related transactions, trader insight
- **Cash-flow planner**: budgets, bills, accounts, planner insight
- **Bills action center**: urgent bills, pending transactions, focus insight
