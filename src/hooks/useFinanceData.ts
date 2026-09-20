import { useEffect, useMemo, useState } from 'react'
import { getFinanceDataset } from '../services/mockFinanceApi'
import type { FinanceDataset } from '../types/finance'

interface FinanceState {
  data: FinanceDataset | null
  isLoading: boolean
  error: string | null
}

export function useFinanceData() {
  const [state, setState] = useState<FinanceState>({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    let isMounted = true

    getFinanceDataset()
      .then((data) => {
        if (isMounted) {
          setState({ data, isLoading: false, error: null })
        }
      })
      .catch(() => {
        if (isMounted) {
          setState({ data: null, isLoading: false, error: 'Unable to load the finance dataset.' })
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return useMemo(() => state, [state])
}
