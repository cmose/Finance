import {
  Body1,
  Button,
  Caption1,
  Subtitle2,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components'
import { ArrowSyncRegular, FilterRegular, PersonCircleRegular } from '@fluentui/react-icons'
import type { PropsWithChildren } from 'react'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gap: '24px',
  },
  masthead: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '28px',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, rgba(15,108,189,0.98), rgba(7,56,107,0.92))',
    color: '#ffffff',
    boxShadow: '0 18px 48px rgba(15, 35, 95, 0.22)',
  },
  titleBlock: {
    display: 'grid',
    gap: '10px',
    maxWidth: '760px',
  },
  eyebrow: {
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  headline: {
    color: '#ffffff',
    margin: 0,
    fontSize: 'clamp(2rem, 3vw, 3.25rem)',
    lineHeight: 1.08,
  },
  summary: {
    color: 'rgba(255,255,255,0.88)',
    maxWidth: '68ch',
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'flex-start',
  },
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: '#ffffff',
  },
  actionSecondary: {
    backgroundColor: '#ffffff',
    color: '#0f4f84',
  },
})

export function AppShell({ children }: PropsWithChildren) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <section className={styles.masthead}>
        <div className={styles.titleBlock}>
          <Caption1 className={styles.eyebrow}>Finance prototype · Fluent UI v9</Caption1>
          <h1 className={styles.headline}>One shared dataset, three radically different finance workstyles.</h1>
          <Body1 className={styles.summary}>
            This enterprise prototype demonstrates how the same finance primitives can power a trading dashboard, a cash-flow planner, and a bills-first action center without breaking visual cohesion.
          </Body1>
        </div>
        <div className={styles.actions}>
          <Button appearance="secondary" icon={<ArrowSyncRegular />} className={styles.actionSecondary}>
            Synced 2 minutes ago
          </Button>
          <Button appearance="outline" icon={<FilterRegular />} className={styles.actionButton}>
            Shared filters
          </Button>
          <Button appearance="outline" icon={<PersonCircleRegular />} className={mergeClasses(styles.actionButton)}>
            Persona aware
          </Button>
        </div>
      </section>
      <section>
        <Subtitle2>Finance Command Center</Subtitle2>
        {children}
      </section>
    </div>
  )
}
