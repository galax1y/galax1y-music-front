import type { MusicDto } from '@/types/music.dto'

import { Button } from './ui/button'
import { Large, Small } from './typography'

import {
  PlayIcon,
  PersonIcon,
  TrackNextIcon,
  SpeakerLoudIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons'

type MusicControlProps = Partial<MusicDto>

export function MusicControl({ id, artist, title }: MusicControlProps) {
  return (
    <div className='bg-card sticky bottom-0 w-full px-6 py-2 shadow brightness-125'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='space-y-2'>
          <Large className='text-accent-foreground text-base leading-none'>
            {title ?? 'Select your music'}
          </Large>
          <Small className='text-muted-foreground flex items-center gap-1 text-sm leading-none'>
            {artist ?? 'galax1y-audio'}
          </Small>
        </div>

        {/* Player controller */}
        <div className='flex items-center justify-center gap-1.5'>
          <Button size='icon' variant='ghost' className='rounded-full'>
            <TrackPreviousIcon />
          </Button>

          <Button size='icon' variant='outline' className='rounded-full'>
            <PlayIcon />
          </Button>

          <Button size='icon' variant='ghost' className='rounded-full'>
            <TrackNextIcon />
          </Button>
        </div>

        <div className='flex items-center justify-center'>
          <SpeakerLoudIcon className='h-4 w-4' />
        </div>
      </div>
    </div>
  )
}
