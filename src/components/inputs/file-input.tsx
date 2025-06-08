import { toast } from 'sonner'
import { Large, Small } from '../typography'

import { Cross1Icon, FileIcon, FilePlusIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

interface FileInputProps {
  file: File | null
  setFile: (file: File | null) => void
}

export function FileInput({ file, setFile }: FileInputProps) {
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const fileSizeInMb = file.size / 1000000

      if (file.type != 'audio/mid' && file.type != 'text/plain') {
        return toast.error('Invalid format. Files should be .txt or .mid')
      }

      if (fileSizeInMb > 5) {
        return toast.error(
          `You are only allowed to upload files up to 5MB. Current: ${file.size / 1000000} MB`,
        )
      }

      setFile(file)
      return toast.success('File is valid. You can now generate a music!')
    }

    return toast.error(
      'Error: Upload handler was triggered but there is no file being uploaded (hopefully...)',
    )
  }

  const handleRemoveFile = () => {
    setFile(null)
  }

  const formatFileSize = (size: number): string => {
    const units = ['KB', 'MB', 'GB', 'TB']
    let index = 0

    // Start from KB
    size = Math.max(size / 1024, 1)

    while (size >= 1024 && index < units.length - 1) {
      size /= 1024
      index++
    }

    return `${size.toFixed(2)} ${units[index]}`
  }

  return (
    <div className='bg-input/30 hover:border-primary hover:bg-input/50 aspect-video max-h-60 w-full rounded-2xl border-2 transition-all duration-300'>
      {!file && (
        <label className='group flex h-full w-full cursor-pointer items-center justify-center'>
          <input
            type='file'
            multiple={false}
            onChange={handleUpload}
            className='hidden'
          />
          <div className='flex flex-col items-center'>
            <FilePlusIcon className='h-12 w-12' />
            <Large className='mt-2 text-base'>Click here to add a file</Large>
            <Small className='mt-1 text-sm'>
              Only .txt and .mid formats are accepted
            </Small>
            <Small className='text-sm'>Max file size: 5MB</Small>
          </div>
        </label>
      )}

      {file && (
        <div className='flex h-full w-full flex-col items-center group-hover:bg-inherit'>
          <Card className='w-full flex-1 rounded-2xl'>
            <CardHeader>
              <CardTitle>{file.name}</CardTitle>
              <CardDescription className='flex items-center gap-2'>
                <FileIcon />
                {formatFileSize(file.size)}
              </CardDescription>
              <CardAction>
                <Cross1Icon />
              </CardAction>
            </CardHeader>

            <CardContent>Preview</CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
