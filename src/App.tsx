import { useEffect, useState } from 'react'

import type { CreateMusicRequest, MusicDto } from './types/music.dto'

import { toast } from 'sonner'
import { client } from './lib/api'

import { Header } from './components/header'
import { H3 } from './components/typography'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Container } from './components/container'
import { MusicList } from './components/music-list'
import { HelpDialog } from './components/help-dialog'
import { Separator } from './components/ui/separator'
import { PageWrapper } from './components/page-wrapper'
import { MusicControl } from './components/music-control'
import { FileInput } from './components/inputs/file-input'
import { TextInput } from './components/inputs/text-input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Toaster } from './components/ui/sonner'

export function App() {
  const [rawInput, setRawInput] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [artist, setArtist] = useState<string>('')

  const [file, setFile] = useState<File | null>(null)
  const [activeTab, setActiveTab] = useState<string>('text')

  const [activeMusic, setActiveMusic] = useState<MusicDto | undefined>()
  const [musics, setMusics] = useState<MusicDto[]>([])

  useEffect(() => {
    getMusics()
  }, [])

  useEffect(() => {
    setRawInput('')
  }, [activeTab])

  function generateMusic() {
    if (rawInput === null) {
      return toast.error('Please select a file or enter some text')
    }

    const data: CreateMusicRequest = {
      rawInput,
      title,
      artist,
    }

    client.post('/music', data).then((response) => {
      if (response.status === 201) {
        toast.success('Music generated successfully')
        setMusics((prev) => [...prev, response.data])
      } else {
        toast.error('An error occurred while generating the music')
      }
    })
  }

  function getMusics() {
    client.get('/music/all').then((response) => {
      setMusics([
        {
          id: '1',
          title: 'Throne',
          artist: 'Bring Me The Horizon',
        },
        {
          id: '2',
          title: 'Rise of the Phoenix',
          artist: 'Tenacious D',
        },
        {
          id: '3',
          title: 'Frontiers',
          artist: 'Awich',
        },
        {
          id: '4',
          title: 'Big Jet Plane',
          artist: 'Clubhouse',
        },
        {
          id: '5',
          title: 'Born Again',
          artist: 'Lisa',
        },
        {
          id: '6',
          title: 'Critical Acclaim',
          artist: 'Avenged Sevenfold',
        },
        {
          id: '7',
          title: 'Unsainted',
          artist: 'Slipknot',
        },
        {
          id: '8',
          title: 'ELEMENT.',
          artist: 'Kendrick Lamar',
        },
        {
          id: '9',
          title: 'Doomsday',
          artist: 'Architects',
        },
        {
          id: '10',
          title: 'Stricken',
          artist: 'Disturbed',
        },
      ])
    })
  }

  return (
    <>
      <PageWrapper>
        <Container>
          <Header />

          <Separator className='my-1' />

          <main className='flex w-full flex-col items-center justify-center rounded-xl px-4 py-4 pb-10'>
            <div className='grid w-full flex-1 grid-rows-1 space-y-4 sm:grid-cols-1 md:grid-cols-2 md:space-x-6'>
              <Tabs
                value={activeTab}
                onValueChange={(value) => setActiveTab(value)}
              >
                <div className='flex w-full items-center justify-between'>
                  <H3>Generate your own music!</H3>
                  <HelpDialog />
                </div>

                <div className='flex w-full items-center justify-between'>
                  <TabsList defaultValue='text'>
                    <TabsTrigger value='text'>Text</TabsTrigger>
                    <TabsTrigger value='file'>File</TabsTrigger>
                  </TabsList>
                  <Button
                    disabled={
                      !rawInput || title.length < 2 || artist.length < 2
                    }
                    className='w-fit self-end'
                    onClick={generateMusic}
                  >
                    Generate
                  </Button>
                </div>

                <div className='grid w-full grid-cols-2 items-center gap-1.5'>
                  <div className='grid w-full grid-cols-1 items-center gap-1.5'>
                    <Label htmlFor='title'>Title</Label>
                    <Input
                      id='title'
                      type='text'
                      placeholder='Insert music title...'
                      className='rounded-xl border-2'
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className='grid w-full grid-cols-1 items-center gap-1.5'>
                    <Label htmlFor='artist'>Artist</Label>
                    <Input
                      id='artist'
                      type='text'
                      placeholder='Insert artist name...'
                      className='rounded-xl border-2'
                      onChange={(e) => setArtist(e.target.value)}
                    />
                  </div>
                </div>

                <TabsContent value='text' className='w-full'>
                  <TextInput
                    value={rawInput}
                    onChange={(e) => {
                      setRawInput(e.target.value)
                    }}
                  />
                </TabsContent>

                <TabsContent value='file' className=''>
                  <FileInput file={file} setFile={setFile} />
                </TabsContent>
              </Tabs>

              <div>
                <H3>Music list</H3>
                <MusicList items={musics} />
              </div>
            </div>
          </main>
        </Container>

        <MusicControl {...activeMusic} />
      </PageWrapper>
      <Toaster richColors closeButton />
    </>
  )
}
