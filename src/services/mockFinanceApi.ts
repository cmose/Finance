import { financeDataset } from '../data/mockData'
import type { FinanceDataset } from '../types/finance'

const latency = 200

export async function getFinanceDataset(): Promise<FinanceDataset> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(financeDataset), latency)
  })
}
