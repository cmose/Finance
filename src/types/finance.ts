export type PersonaId = 'trader' | 'planner' | 'focus'

export interface Account {
  id: string
  name: string
  type: 'brokerage' | 'checking' | 'credit' | 'savings'
  institution: string
  balance: number
  trend: number
  status: 'healthy' | 'watch' | 'urgent'
}

export interface Transaction {
  id: string
  accountId: string
  merchant: string
  category: string
  amount: number
  type: 'credit' | 'debit'
  postedOn: string
  channel: 'card' | 'transfer' | 'wire' | 'direct-deposit'
  status: 'posted' | 'pending'
}

export interface Bill {
  id: string
  name: string
  amount: number
  dueDate: string
  status: 'scheduled' | 'due-soon' | 'overdue' | 'paid'
  autopay: boolean
  accountId: string
  category: string
}

export interface Budget {
  id: string
  category: string
  spent: number
  limit: number
  trend: 'up' | 'flat' | 'down'
}

export interface Position {
  id: string
  symbol: string
  name: string
  quantity: number
  averageCost: number
  marketPrice: number
  dayChangePercent: number
}

export interface Insight {
  id: string
  title: string
  description: string
  tone: 'positive' | 'neutral' | 'warning'
  persona: PersonaId[]
}

export interface FinanceDataset {
  accounts: Account[]
  transactions: Transaction[]
  bills: Bill[]
  budgets: Budget[]
  positions: Position[]
  insights: Insight[]
}
