import { ModeToggle } from './mode-toggle'
import { H1 } from './typography'
import { Button } from './ui/button'

import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function Header() {
  return (
    <header className='flex items-center justify-between px-6 pt-6'>
      <H1 className='bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text leading-snug text-transparent'>
        galax1y-music
      </H1>

      <div className='space-x-2'>
        <ModeToggle />
        <Button asChild size='icon' variant='ghost' className='rounded-full'>
          <a href='https://github.com/galax1y'>
            <GitHubLogoIcon className='h-5 w-5' />
          </a>
        </Button>
      </div>
    </header>
  )
}
