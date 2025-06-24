import { toast } from 'sonner'
import { useStore } from '@/lib/store'

import { Button } from './ui/button'
import { Large, Small } from './typography'

import {
  PlayIcon,
  StopIcon,
  TrackNextIcon,
  SpeakerLoudIcon,
  TrackPreviousIcon,
} from '@radix-ui/react-icons'

export function MusicControl() {
  const { music, playing, play, stop } = useStore()

  const handlePlayStop = () => {
    if (!music) {
      return toast.info('Please select a music track first.')
    }

    if (!playing) {
      play(music.wavInBase64)
      return toast.info(`Now playing: ${music.title} by ${music.artist}`)
    }

    stop()
    return toast.info('Music paused.')
  }

  return (
    <div className='bg-card sticky bottom-0 w-full px-6 py-2 shadow brightness-125'>
      <div className='container mx-auto'>
        {/* Player controller */}

        <div className='flex items-center justify-center gap-4'>
          <Button
            onClick={handlePlayStop}
            size='icon'
            variant='outline'
            className='rounded-full'
          >
            {playing ? <StopIcon /> : <PlayIcon />}
          </Button>
          <div className='space-y-2'>
            <Large className='text-accent-foreground text-base leading-none'>
              {music?.title ?? 'Select your music'}
            </Large>
            <Small className='text-muted-foreground flex items-center gap-1 text-sm leading-none'>
              {music?.artist ?? 'galax1y-audio'}
            </Small>
          </div>
        </div>
      </div>
    </div>
  )
}
