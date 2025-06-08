import { Button } from './ui/button'

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
} from './ui/alert-dialog'

import { TrashIcon } from '@radix-ui/react-icons'

export function DeleteMusicAction() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size='icon'
          variant='ghost'
          className='hover:text-destructive hover:border-destructive rounded-full hover:border'
        >
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='rounded-2xl'>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this music?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the music
            from our servers. Only click continue if you are completely sure.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
