import { ThemeProvider } from './theme-provider'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='font-dm antialiased'>{children}</div>
    </ThemeProvider>
  )
}
