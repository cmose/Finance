import { createLightTheme } from '@fluentui/react-components'

const brand = {
  10: '#061724',
  20: '#0a2740',
  30: '#0d3b62',
  40: '#0f4f84',
  50: '#1467ab',
  60: '#1d7fd0',
  70: '#3b96e1',
  80: '#62acec',
  90: '#8ec2f3',
  100: '#b9d8f8',
  110: '#d7eafa',
  120: '#edf6fd',
  130: '#f6fbff',
  140: '#fbfdff',
  150: '#ffffff',
  160: '#ffffff',
} as const

export const financeTheme = createLightTheme(brand)
financeTheme.colorNeutralBackground1 = '#f5f7fb'
financeTheme.colorNeutralBackground2 = '#ffffff'
financeTheme.colorNeutralBackground3 = '#eef3f8'
financeTheme.colorNeutralForeground1 = '#18212f'
financeTheme.colorBrandForeground1 = '#0f6cbd'
financeTheme.colorBrandBackground = '#0f6cbd'
financeTheme.colorBrandBackgroundHover = '#115ea3'
financeTheme.colorPaletteDarkOrangeForeground1 = '#8a3707'
financeTheme.colorStatusWarningBackground3 = '#fff4ce'
financeTheme.shadow16 = '0 18px 48px rgba(15, 35, 95, 0.12)'
financeTheme.shadow4 = '0 2px 10px rgba(15, 35, 95, 0.08)'
