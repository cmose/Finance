import { Body1, Caption1, Title2, makeStyles } from '@fluentui/react-components'
import type { ReactNode } from 'react'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    marginBottom: '16px',
  },
  copy: {
    display: 'grid',
    gap: '6px',
  },
  eyebrow: {
    color: '#5c6a79',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  description: {
    color: '#425466',
    maxWidth: '68ch',
  },
})

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
}

export function SectionHeader({ eyebrow, title, description, actions }: SectionHeaderProps) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.copy}>
        <Caption1 className={styles.eyebrow}>{eyebrow}</Caption1>
        <Title2>{title}</Title2>
        <Body1 className={styles.description}>{description}</Body1>
      </div>
      {actions}
    </div>
  )
}
