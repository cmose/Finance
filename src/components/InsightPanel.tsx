import { Badge, Body1, Card, Subtitle2, Title3, makeStyles } from '@fluentui/react-components'
import type { Insight } from '../types/finance'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gap: '12px',
    padding: '20px',
    borderRadius: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    alignItems: 'center',
  },
  body: {
    color: '#425466',
  },
})

const toneMap: Record<Insight['tone'], 'success' | 'informative' | 'warning'> = {
  positive: 'success',
  neutral: 'informative',
  warning: 'warning',
}

export function InsightPanel({ insight }: { insight: Insight }) {
  const styles = useStyles()

  return (
    <Card className={styles.root}>
      <div className={styles.row}>
        <Title3>{insight.title}</Title3>
        <Badge appearance="tint" color={toneMap[insight.tone]}>
          {insight.tone}
        </Badge>
      </div>
      <Subtitle2>{insight.description}</Subtitle2>
      <Body1 className={styles.body}>Each insight is derived from the same mocked bills, budgets, accounts, and transaction signals.</Body1>
    </Card>
  )
}
