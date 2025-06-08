import type { MusicDto } from '@/types/music.dto'

import { PlayIcon } from '@radix-ui/react-icons'

import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

import { DeleteMusicAction } from './delete-music-action'

export function MusicCard(music: MusicDto) {
  return (
    <Card className='flex-row items-center py-4'>
      <CardContent className='flex w-full flex-row items-center space-x-6'>
        <Button size='icon' variant='ghost' className='rounded-full'>
          <PlayIcon />
        </Button>

        <div className='flex w-full flex-col items-start space-y-1 select-none'>
          <CardTitle>{music.title}</CardTitle>
          <CardDescription>{music.artist}</CardDescription>
        </div>

        <DeleteMusicAction />
      </CardContent>
    </Card>
  )
}
