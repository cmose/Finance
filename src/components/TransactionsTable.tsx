import { Badge, Card, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, makeStyles } from '@fluentui/react-components'
import type { Transaction } from '../types/finance'

const useStyles = makeStyles({
  card: {
    padding: '8px',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  debit: {
    color: '#a4262c',
  },
  credit: {
    color: '#0f6cbd',
  },
})

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function TransactionsTable({ transactions }: { transactions: Transaction[] }) {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <Table aria-label="Recent transactions">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Merchant</TableHeaderCell>
            <TableHeaderCell>Category</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.merchant}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.postedOn}</TableCell>
              <TableCell className={transaction.type === 'debit' ? styles.debit : styles.credit}>
                {transaction.type === 'debit' ? '-' : '+'}
                {moneyFormatter.format(transaction.amount)}
              </TableCell>
              <TableCell>
                <Badge appearance="tint" color={transaction.status === 'posted' ? 'success' : 'warning'}>
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
