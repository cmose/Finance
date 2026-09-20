import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider } from '@fluentui/react-components'
import App from './App'
import { financeTheme } from './theme'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={financeTheme}>
      <App />
    </FluentProvider>
  </StrictMode>,
)
