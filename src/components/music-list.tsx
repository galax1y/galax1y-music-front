import { useStore } from '@/lib/store'
import { MusicCard } from './music-card'
import { Muted } from './typography'

export function MusicList() {
  const { list } = useStore()

  return (
    <ul className='flex w-full flex-col gap-2'>
      {list.length > 0 ? (
        list.map((item) => <MusicCard key={item.id} {...item} />)
      ) : (
        <div className='bg-muted/50 w-full rounded-xl border px-2 py-6 text-center'>
          <Muted>Upload your first music to get started!</Muted>
        </div>
      )}
    </ul>
  )
}
