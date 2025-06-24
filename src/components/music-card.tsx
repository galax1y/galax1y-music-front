import type { MusicDto } from '@/types/music.dto'

import { toast } from 'sonner'
import { client } from '@/lib/api'
import { useStore } from '@/lib/store'

import {
  DotsVerticalIcon,
  DownloadIcon,
  PlayIcon,
  TrashIcon,
} from '@radix-ui/react-icons'

import { Button } from './ui/button'
import { Card, CardTitle, CardContent, CardDescription } from './ui/card'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'

export function MusicCard(music: MusicDto) {
  const { select, fetchMusic } = useStore()

  const handleSelect = () => {
    select(music.id)
    return toast.info(`Selected music: ${music.title} by ${music.artist}`)
  }

  const handleDeleteMusic = async () => {
    await client.delete(`/music/${music.id}`)
    await fetchMusic()
    return toast.info('Music deleted successfully.')
  }

  return (
    <Card
      className='hover:bg-accent cursor-pointer flex-row items-center py-4 transition-all duration-200 hover:brightness-125'
      onClick={handleSelect}
    >
      <CardContent className='flex w-full flex-row items-center space-x-6'>
        <div className='flex w-full flex-col items-start space-y-1 select-none'>
          <CardTitle>{music.title}</CardTitle>
          <CardDescription>{music.artist}</CardDescription>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='rounded-full' size='icon' variant='ghost'>
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='rounded-xl' align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='flex justify-between rounded-md'>
              Download as MP3
              <DownloadIcon />
            </DropdownMenuItem>
            <DropdownMenuItem className='flex justify-between rounded-md'>
              Download as MIDI
              <DownloadIcon />
            </DropdownMenuItem>
            <DropdownMenuItem
              variant='destructive'
              className='flex justify-between rounded-md'
              onClick={handleDeleteMusic}
            >
              Delete
              <TrashIcon />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  )
}
