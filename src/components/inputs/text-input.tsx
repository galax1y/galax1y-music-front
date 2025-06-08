import { Textarea } from '../ui/textarea'

type TextInputProps = React.ComponentProps<typeof Textarea>

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <Textarea
      required
      placeholder='Write the music structure here or interact below...'
      className='hover:border-primary aspect-video h-full max-h-60 w-full rounded-2xl border-2 transition-all duration-300'
      {...props}
    />
  )
}
