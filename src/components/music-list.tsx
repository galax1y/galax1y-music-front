import type { MusicDto } from '@/types/music.dto'
import { MusicCard } from './music-card'

interface MusicListProps {
  items: MusicDto[]
}

export function MusicList({ items }: MusicListProps) {
  return (
    <ul className='flex w-full flex-col gap-2'>
      {items.map((item) => (
        <MusicCard key={item.id} {...item} />
      ))}
    </ul>
  )
}
