import { Badge, Body1, Card, Subtitle2, makeStyles } from '@fluentui/react-components'
import type { Bill } from '../types/finance'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gap: '12px',
    padding: '20px',
    borderRadius: '20px',
  },
  item: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gap: '12px',
    alignItems: 'center',
    paddingBottom: '12px',
    borderBottom: '1px solid #e5ebf1',
    ':last-child': {
      borderBottom: 'none',
      paddingBottom: '0',
    },
  },
  meta: {
    color: '#5c6a79',
  },
  amount: {
    textAlign: 'right',
  },
})

const toneMap: Record<Bill['status'], 'warning' | 'danger' | 'success' | 'informative'> = {
  scheduled: 'informative',
  'due-soon': 'warning',
  overdue: 'danger',
  paid: 'success',
}

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function BillsTimeline({ bills }: { bills: Bill[] }) {
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      {bills.map((bill) => (
        <div key={bill.id} className={styles.item}>
          <div>
            <Subtitle2>{bill.name}</Subtitle2>
            <Body1 className={styles.meta}>
              Due {bill.dueDate} · {bill.category} · {bill.autopay ? 'Autopay on' : 'Manual approval'}
            </Body1>
          </div>
          <div className={styles.amount}>
            <Subtitle2>{moneyFormatter.format(bill.amount)}</Subtitle2>
            <Badge appearance="tint" color={toneMap[bill.status]}>
              {bill.status}
            </Badge>
          </div>
        </div>
      ))}
    </Card>
  )
}
