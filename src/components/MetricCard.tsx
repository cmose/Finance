import { Badge, Body1, Card, Caption1, Subtitle2, makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  card: {
    display: 'grid',
    gap: '14px',
    minHeight: '152px',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 8px 30px rgba(15, 35, 95, 0.08)',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
  },
  value: {
    fontSize: '2rem',
    lineHeight: 1,
  },
  subtitle: {
    color: '#5c6a79',
  },
})

interface MetricCardProps {
  label: string
  value: string
  detail: string
  badge?: string
  tone?: 'brand' | 'important' | 'informative' | 'subtle'
}

export function MetricCard({ label, value, detail, badge, tone = 'subtle' }: MetricCardProps) {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <div className={styles.heading}>
        <div>
          <Caption1>{label}</Caption1>
          <div className={styles.value}>{value}</div>
        </div>
        {badge ? <Badge appearance="tint" color={tone}>{badge}</Badge> : null}
      </div>
      <div>
        <Subtitle2>{detail}</Subtitle2>
        <Body1 className={styles.subtitle}>Aligned to the shared finance primitive set.</Body1>
      </div>
    </Card>
  )
}
