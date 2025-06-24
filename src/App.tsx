import { useEffect } from 'react'

import { useStore } from './lib/store'

import { Header } from './components/header'
import { H3 } from './components/typography'
import { Toaster } from './components/ui/sonner'
import { Container } from './components/container'
import { MusicList } from './components/music-list'
import { MusicForm } from './components/music-form'
import { Separator } from './components/ui/separator'
import { PageWrapper } from './components/page-wrapper'
import { MusicControl } from './components/music-control'

export function App() {
  const { fetchMusic } = useStore()

  useEffect(() => {
    fetchMusic()
  }, [])

  return (
    <>
      <PageWrapper>
        <Container>
          <Header />
          <Separator className='my-1' />
          <main className='flex w-full flex-col items-center justify-center rounded-xl px-4 py-4 pb-10'>
            <div className='grid w-full flex-1 grid-rows-1 space-y-4 sm:grid-cols-1 md:grid-cols-2 md:space-x-6'>
              <MusicForm />
              <div className='space-y-1.5'>
                <H3>Music list</H3>
                <MusicList />
              </div>
            </div>
          </main>
        </Container>

        <MusicControl />
      </PageWrapper>

      <Toaster richColors closeButton />
    </>
  )
}
