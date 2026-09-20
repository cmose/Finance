import { Badge, Body1, Button, Card, Checkbox, Subtitle2, makeStyles } from '@fluentui/react-components'
import { CheckmarkCircleRegular } from '@fluentui/react-icons'
import { BillsTimeline } from '../components/BillsTimeline'
import { InsightPanel } from '../components/InsightPanel'
import { MetricCard } from '../components/MetricCard'
import { SectionHeader } from '../components/SectionHeader'
import { TransactionsTable } from '../components/TransactionsTable'
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
    gridTemplateColumns: '0.95fr 1.05fr',
    gap: '24px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
  checklist: {
    display: 'grid',
    gap: '12px',
    padding: '20px',
    borderRadius: '20px',
  },
  checklistRow: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid #e5ebf1',
    ':last-child': {
      borderBottom: 'none',
      paddingBottom: '0',
    },
  },
  muted: {
    color: '#5c6a79',
  },
})

const dueStatuses = new Set(['overdue', 'due-soon'])

export function BillsFocusView({ data }: { data: FinanceDataset }) {
  const styles = useStyles()
  const urgentBills = data.bills.filter((bill) => dueStatuses.has(bill.status))
  const activeInsight = data.insights.find((insight) => insight.persona.includes('focus'))

  return (
    <div className={styles.grid}>
      <SectionHeader
        eyebrow="Persona 03 · bills-first operator"
        title="Action center for due items"
        description="This layout reduces the same finance primitives into a crisp to-do flow for operators who care most about obligations, approvals, and cash safety."
        actions={
          <Button appearance="secondary" icon={<CheckmarkCircleRegular />}>
            Queue payment run
          </Button>
        }
      />
      <div className={styles.metrics}>
        <MetricCard label="Urgent bills" value={String(urgentBills.length)} detail="Items due soon or already past due." badge="Needs action" tone="important" />
        <MetricCard label="Manual approvals" value={String(data.bills.filter((bill) => !bill.autopay).length)} detail="Bills requiring explicit review before payment." badge="Ops owned" tone="subtle" />
        <MetricCard label="Pending charges" value={String(data.transactions.filter((transaction) => transaction.status === 'pending').length)} detail="Card or travel charges that may affect final cash position." badge="Monitor" tone="informative" />
      </div>
      <div className={styles.split}>
        <div className={styles.grid}>
          {activeInsight ? <InsightPanel insight={activeInsight} /> : null}
          <SectionHeader
            eyebrow="Today's work"
            title="Execution checklist"
            description="The same dataset becomes a focused operating queue with low cognitive overhead."
          />
          <Card className={styles.checklist}>
            {urgentBills.map((bill) => (
              <div key={bill.id} className={styles.checklistRow}>
                <div>
                  <Subtitle2>{bill.name}</Subtitle2>
                  <Body1 className={styles.muted}>Due {bill.dueDate} · {bill.category} · {bill.autopay ? 'Autopay' : 'Manual'}</Body1>
                </div>
                <div>
                  <Checkbox label="Ready to route" />
                </div>
              </div>
            ))}
          </Card>
          <BillsTimeline bills={data.bills} />
        </div>
        <div className={styles.grid}>
          <SectionHeader
            eyebrow="Cash movement"
            title="Recent ledger context"
            description="A supporting transaction view keeps the operator close to the latest money movement without leaving the streamlined layout."
          />
          <TransactionsTable transactions={data.transactions.slice(0, 5)} />
          <Badge appearance="filled" color="subtle">Shared mock API · no persona-specific backend fork</Badge>
        </div>
      </div>
    </div>
  )
}
