import { Badge, Body1, Card, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, makeStyles } from '@fluentui/react-components'
import type { Account } from '../types/finance'

const useStyles = makeStyles({
  card: {
    padding: '8px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  institution: {
    color: '#5c6a79',
  },
})

const statusTone: Record<Account['status'], 'success' | 'warning' | 'danger'> = {
  healthy: 'success',
  watch: 'warning',
  urgent: 'danger',
}

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function AccountList({ accounts }: { accounts: Account[] }) {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <Table aria-label="Accounts overview">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Account</TableHeaderCell>
            <TableHeaderCell>Institution</TableHeaderCell>
            <TableHeaderCell>Balance</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell>{account.name}</TableCell>
              <TableCell>
                <Body1 className={styles.institution}>{account.institution}</Body1>
              </TableCell>
              <TableCell>{moneyFormatter.format(account.balance)}</TableCell>
              <TableCell>
                <Badge appearance="tint" color={statusTone[account.status]}>
                  {account.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
