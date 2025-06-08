import { Button } from './ui/button'

import { GitHubLogoIcon } from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className='mt-2 flex items-center justify-between'>
      <small>
        Desenvolvido por <a href='https://github.com/galax1y'>galax1y</a>
      </small>

      <Button asChild size='icon' variant='ghost'>
        <a className='cursor-pointer' href='https://github.com/galax1y'>
          <GitHubLogoIcon className='h-5 w-5' />
        </a>
      </Button>
    </footer>
  )
}
