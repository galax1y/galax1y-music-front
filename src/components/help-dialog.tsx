import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { List, P, Small } from './typography'
import { ChevronRight } from 'lucide-react'

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <QuestionMarkCircledIcon className='aspect-square h-6 w-6 cursor-pointer' />
      </DialogTrigger>
      <DialogContent className='w-full max-w-2xl rounded-2xl'>
        <DialogHeader>
          <DialogTitle>This app generates music!</DialogTitle>
          <DialogDescription className='mt-3 space-y-2'>
            <Small>You just need to input either of these:</Small>

            <List className='my-0 py-1'>
              <li>
                <strong>Raw text: </strong>
                You can directly type the music structure you want to generate.
              </li>
              <li>
                <strong>File: </strong>
                Upload a TEXT or MIDI file, and the app will process and display
                the music. Make sure to follow the file size and format
                constraints.
              </li>
            </List>
            <Small className='pt-2 font-normal'>
              <strong>When you are done </strong>, you can{' '}
              <strong>click "Generate"</strong> button. If everything goes
              accordingly, the generated music will be added to the list.
            </Small>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
