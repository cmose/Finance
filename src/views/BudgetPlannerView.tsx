import { Badge, Body1, Card, ProgressBar, Subtitle2, makeStyles } from '@fluentui/react-components'
import { CalendarLtrRegular } from '@fluentui/react-icons'
import { BillsTimeline } from '../components/BillsTimeline'
import { InsightPanel } from '../components/InsightPanel'
import { MetricCard } from '../components/MetricCard'
import { SectionHeader } from '../components/SectionHeader'
import type { FinanceDataset } from '../types/finance'

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gap: '24px',
  },
  metrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  split: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
  budgets: {
    display: 'grid',
    gap: '14px',
  },
  budgetCard: {
    display: 'grid',
    gap: '10px',
    padding: '20px',
    borderRadius: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    alignItems: 'center',
  },
  text: {
    color: '#5c6a79',
  },
})

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function BudgetPlannerView({ data }: { data: FinanceDataset }) {
  const styles = useStyles()
  const totalBudget = data.budgets.reduce((sum, budget) => sum + budget.limit, 0)
  const totalSpent = data.budgets.reduce((sum, budget) => sum + budget.spent, 0)
  const budgetUtilization = totalBudget > 0 ? Math.round((totalSpent / totalBudget) * 100) : 0
  const upcomingBills = data.bills.filter((bill) => bill.status !== 'paid')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)
  const billsDueThisWeek = upcomingBills.filter((bill) => {
    const dueDate = new Date(`${bill.dueDate}T00:00:00`)
    return dueDate <= nextWeek
  })
  const reviewCount = upcomingBills.filter(
    (bill) => bill.status === 'due-soon' || bill.status === 'overdue',
  ).length
  const liquidBalance = data.accounts
    .filter((account) => account.type === 'checking' || account.type === 'savings')
    .reduce((sum, account) => sum + account.balance, 0)
  const projectedMonthlyOutflow =
    totalSpent + upcomingBills.reduce((sum, bill) => sum + bill.amount, 0)
  const runwayDays =
    projectedMonthlyOutflow > 0 ? Math.max(Math.floor(liquidBalance / (projectedMonthlyOutflow / 30)), 0) : 0
  const activeInsight = data.insights.find((insight) => insight.persona.includes('planner'))

  return (
    <div className={styles.grid}>
      <SectionHeader
        eyebrow="Persona 02 · finance planner"
        title="Cash-flow and calendar planning"
        description="A calmer orchestration layer for leaders who want upcoming obligations, budget burn, and runway translated into clear planning moves."
        actions={<Badge appearance="filled" color="informative" icon={<CalendarLtrRegular />}>Month-end mode</Badge>}
      />
      <div className={styles.metrics}>
        <MetricCard label="Budget utilization" value={`${budgetUtilization}%`} detail="Aggregated across the active operating envelopes." badge="On plan" tone="informative" />
        <MetricCard label="Bills due this week" value={String(billsDueThisWeek.length)} detail="Scheduled and risk-ranked from the same shared bills primitive." badge={`${reviewCount} require review`} tone="important" />
        <MetricCard label="Available runway" value={`${runwayDays} days`} detail="Liquidity estimate derived from liquid accounts and projected monthly outflow." badge="Data backed" tone="brand" />
      </div>
      <div className={styles.split}>
        <div className={styles.grid}>
          <SectionHeader
            eyebrow="Calendar of obligations"
            title="Upcoming payments"
            description="The planner view turns the shared bills primitive into a sequencing tool with visibility into autopay coverage."
          />
          <BillsTimeline bills={upcomingBills} />
          {activeInsight ? <InsightPanel insight={activeInsight} /> : null}
        </div>
        <div className={styles.grid}>
          <SectionHeader
            eyebrow="Budget health"
            title="Category envelopes"
            description="Budget owners can detect overspend risk without leaving the design system used by the trading and bills views."
          />
          <div className={styles.budgets}>
            {data.budgets.map((budget) => {
              const progress = budget.limit > 0 ? Math.min(budget.spent / budget.limit, 1) : 0
              const remaining = Math.max(budget.limit - budget.spent, 0)
              const overage = Math.max(budget.spent - budget.limit, 0)
              return (
                <Card key={budget.id} className={styles.budgetCard}>
                  <div className={styles.row}>
                    <Subtitle2>{budget.category}</Subtitle2>
                    <Badge appearance="tint" color={progress >= 0.9 ? 'warning' : 'success'}>
                      {budget.trend}
                    </Badge>
                  </div>
                  <ProgressBar value={progress} thickness="large" color={progress >= 0.9 ? 'warning' : 'brand'} />
                  <div className={styles.row}>
                    <Body1>{currency.format(budget.spent)} spent</Body1>
                    <Body1>{currency.format(budget.limit)} cap</Body1>
                  </div>
                  <Body1 className={styles.text}>
                    {overage > 0
                      ? `${currency.format(overage)} over plan and ready for review.`
                      : `${currency.format(remaining)} remaining before the next review checkpoint.`}
                  </Body1>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
