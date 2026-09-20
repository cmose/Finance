import { Badge, Body1, Card, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, makeStyles } from '@fluentui/react-components'
import { ArrowTrendingLinesRegular, WalletCreditCardRegular } from '@fluentui/react-icons'
import { AccountList } from '../components/AccountList'
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
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '24px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    display: 'grid',
    gap: '16px',
    padding: '20px',
    borderRadius: '20px',
  },
  note: {
    color: '#5c6a79',
  },
})

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function TraderDashboardView({ data }: { data: FinanceDataset }) {
  const styles = useStyles()
  const portfolioValue = data.positions.reduce((sum, position) => sum + position.marketPrice * position.quantity, 0)
  const dailyPnl = data.positions.reduce(
    (sum, position) => sum + (position.marketPrice - position.averageCost) * position.quantity,
    0,
  )
  const activeInsight = data.insights.find((insight) => insight.persona.includes('trader'))

  return (
    <div className={styles.grid}>
      <SectionHeader
        eyebrow="Persona 01 · day trader"
        title="Market pulse dashboard"
        description="A dense command center for users who want portfolio movement, account liquidity, and notable market activity in one scan-friendly frame."
        actions={<Badge appearance="filled" color="informative" icon={<ArrowTrendingLinesRegular />}>Live mock market pulse</Badge>}
      />
      <div className={styles.metrics}>
        <MetricCard label="Portfolio value" value={currency.format(portfolioValue)} detail="Across software, AI, and fixed-income positions." badge="+3 holdings" tone="brand" />
        <MetricCard label="Unrealized gain" value={currency.format(dailyPnl)} detail="Today's performance against weighted average cost." badge="Session high" tone="informative" />
        <MetricCard label="Available liquidity" value={currency.format(data.accounts[1].balance + data.accounts[2].balance)} detail="Cash accessible for rebalancing or bill coverage." badge="T+0 ready" tone="subtle" />
      </div>
      <div className={styles.split}>
        <div className={styles.grid}>
          <SectionHeader
            eyebrow="Holdings"
            title="Concentrated positions"
            description="Identical position primitives can be surfaced here for quick conviction checks and allocation calls."
          />
          <Card className={styles.card}>
            <Table aria-label="Portfolio positions">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Symbol</TableHeaderCell>
                  <TableHeaderCell>Position</TableHeaderCell>
                  <TableHeaderCell>Market value</TableHeaderCell>
                  <TableHeaderCell>Day move</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.positions.map((position) => {
                  const marketValue = position.marketPrice * position.quantity
                  return (
                    <TableRow key={position.id}>
                      <TableCell>
                        <strong>{position.symbol}</strong>
                      </TableCell>
                      <TableCell>{position.quantity} shares</TableCell>
                      <TableCell>{currency.format(marketValue)}</TableCell>
                      <TableCell>
                        <Badge appearance="tint" color={position.dayChangePercent >= 0 ? 'success' : 'danger'}>
                          {position.dayChangePercent >= 0 ? '+' : ''}
                          {position.dayChangePercent}%
                        </Badge>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
            <Body1 className={styles.note}>Portfolio detail intentionally shares the same account and transaction source data used elsewhere in the prototype.</Body1>
          </Card>
          <SectionHeader
            eyebrow="Accounts"
            title="Liquidity and exposure"
            description="Operational accounts remain visible so the trader view never loses connection to real cash constraints."
          />
          <AccountList accounts={data.accounts} />
        </div>
        <div className={styles.grid}>
          {activeInsight ? <InsightPanel insight={activeInsight} /> : null}
          <SectionHeader
            eyebrow="Recent activity"
            title="Trade-adjacent ledger"
            description="Transaction primitives surface both cash events and brokerage movements without a dedicated backend fork."
            actions={<Badge appearance="filled" color="subtle" icon={<WalletCreditCardRegular />}>Same dataset</Badge>}
          />
          <AccountList accounts={data.accounts.slice(0, 2)} />
        </div>
      </div>
    </div>
  )
}
