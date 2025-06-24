import type {
  CreateMusicRequest,
  CreateMusicWithMidiRequest,
} from '@/types/music.dto'

import { useState } from 'react'

import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { client } from '@/lib/api'
import { useStore } from '@/lib/store'

import { H3 } from './typography'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { HelpDialog } from './help-dialog'
import { TextInput } from './inputs/text-input'
import { FileUpload } from './inputs/file-upload'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import { LoaderCircle } from 'lucide-react'

export function MusicForm() {
  const [activeTab, setActiveTab] = useState<string>('text')

  const [loading, setLoading] = useState<boolean>(false)
  const [rawInput, setRawInput] = useState<string>('')
  const [fileInBase64, setFileInBase64] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [artist, setArtist] = useState<string>('')

  const { fetchMusic } = useStore()

  const onTabChange = (value: string) => {
    setRawInput('')
    setFileInBase64('')
    setActiveTab(value)
  }

  const handleGenerateMusic = () => {
    if (activeTab === 'file') {
      return createMusicWithMidi()
    }

    if (activeTab === 'text') {
      return createMusic()
    }
  }

  async function createMusicWithMidi() {
    const data: CreateMusicWithMidiRequest = {
      title,
      artist,
      midiInBase64: fileInBase64,
    }

    try {
      setLoading(true)
      const response = await client.post('/music/midi', data)

      if (response.status === 201) {
        toast.success('Music created successfully.')
        await fetchMusic()
      }
    } catch (e: any) {
      if (e.status === 409) {
        return toast.error(
          `There is another music with the same name and artist.`,
        )
      }

      return toast.error('Could not create music.')
    } finally {
      setLoading(false)
    }
  }

  async function createMusic() {
    const data: CreateMusicRequest = {
      title,
      artist,
      rawText: rawInput,
    }

    try {
      setLoading(true)
      const response = await client.post('/music', data)

      if (response.status === 201) {
        toast.success('Music created successfully.')
        await fetchMusic()
      }
    } catch (e: any) {
      if (e.status === 409) {
        return toast.error(
          `There is another music with the same name and artist.`,
        )
      }

      return toast.error('Could not create music.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
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
          className='w-fit self-end rounded-xl'
          disabled={
            (!rawInput && fileInBase64.length <= 0) ||
            title.length < 2 ||
            artist.length < 2 ||
            loading
          }
          onClick={handleGenerateMusic}
        >
          <LoaderCircle
            className={cn(loading ? 'block animate-spin' : 'hidden')}
          />
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
        <FileUpload
          onFileParsed={(content: string) => setFileInBase64(content)}
        />
      </TabsContent>
    </Tabs>
  )
}
