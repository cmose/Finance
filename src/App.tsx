import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import {
  Badge,
  Body1,
  Card,
  Spinner,
  Tab,
  TabList,
  Title3,
} from '@fluentui/react-components'
import {
  ArrowTrendingLinesRegular,
  CalendarLtrRegular,
  CheckmarkCircleRegular,
} from '@fluentui/react-icons'
import { AppShell } from './components/AppShell'
import { SectionHeader } from './components/SectionHeader'
import { useFinanceData } from './hooks/useFinanceData'
import './styles/app.css'
import type { PersonaId } from './types/finance'
import { BillsFocusView } from './views/BillsFocusView'
import { BudgetPlannerView } from './views/BudgetPlannerView'
import { TraderDashboardView } from './views/TraderDashboardView'

const personaOptions: Array<{
  id: PersonaId
  label: string
  subtitle: string
  icon: ReactElement
}> = [
  {
    id: 'trader',
    label: 'Market pulse',
    subtitle: 'Dense dashboard for active portfolio management',
    icon: <ArrowTrendingLinesRegular />,
  },
  {
    id: 'planner',
    label: 'Cash-flow planner',
    subtitle: 'Calendar-aware view for budget and runway planning',
    icon: <CalendarLtrRegular />,
  },
  {
    id: 'focus',
    label: 'Bills action center',
    subtitle: 'Task-oriented view for due items and approvals',
    icon: <CheckmarkCircleRegular />,
  },
]

function App() {
  const { data, isLoading, error } = useFinanceData()
  const [selectedPersona, setSelectedPersona] = useState<PersonaId>('trader')

  const content = useMemo(() => {
    if (!data) {
      return null
    }

    if (selectedPersona === 'trader') {
      return <TraderDashboardView data={data} />
    }

    if (selectedPersona === 'planner') {
      return <BudgetPlannerView data={data} />
    }

    return <BillsFocusView data={data} />
  }, [data, selectedPersona])

  const currentPersona = personaOptions.find((persona) => persona.id === selectedPersona) ?? personaOptions[0]

  return (
    <main className="app-shell">
      <div className="app-frame">
        <AppShell>
          <div className="panel-grid">
            <div className="status-grid">
              <Card className="status-card">
                <Badge appearance="tint" color="brand">
                  Shared primitive set
                </Badge>
                <Title3>Accounts, bills, budgets, positions, and transactions</Title3>
                <p>Every persona consumes the same finance dataset through one mocked API module.</p>
              </Card>
              <Card className="status-card">
                <Badge appearance="tint" color="informative">
                  Fluent design language
                </Badge>
                <Title3>Consistent type, spacing, elevation, and interaction patterns</Title3>
                <p>Each layout changes the framing, not the core tokens or component primitives.</p>
              </Card>
              <Card className="status-card">
                <Badge appearance="tint" color="success">
                  QA-ready prototype
                </Badge>
                <Title3>Loading, empty, and focus states included</Title3>
                <p>The prototype is ready for build validation and artifact review against the plan outputs.</p>
              </Card>
            </div>
            <Card className="tabs-card">
              <SectionHeader
                eyebrow="Persona switcher"
                title={currentPersona.label}
                description={currentPersona.subtitle}
                actions={<Badge appearance="filled" color="subtle">Fluent UI React v9</Badge>}
              />
              <TabList
                appearance="subtle-circular"
                selectedValue={selectedPersona}
                onTabSelect={(_, data) => setSelectedPersona(data.value as PersonaId)}
              >
                {personaOptions.map((persona) => (
                  <Tab key={persona.id} value={persona.id} icon={persona.icon}>
                    {persona.label}
                  </Tab>
                ))}
              </TabList>
              <Body1 className="tab-copy">
                Switch personas to see the same mock finance primitives reshaped for different priorities without diverging from the shared design system.
              </Body1>
            </Card>
            {isLoading ? (
              <Card className="empty-state">
                <Spinner label="Loading finance prototype" size="large" />
                <Body1>Booting the shared mock API and aligning personas.</Body1>
              </Card>
            ) : error ? (
              <Card className="empty-state">
                <Title3>Dataset unavailable</Title3>
                <Body1>{error}</Body1>
              </Card>
            ) : (
              content
            )}
          </div>
        </AppShell>
      </div>
    </main>
  )
}

export default App
