import type { MusicDto } from '@/types/music.dto'
import { create } from 'zustand'
import { client } from './api'
import { playBase64Wav, stopPlayback } from './tone'

interface MusicStore {
  volume: number
  music: MusicDto | undefined
  list: MusicDto[]

  select: (id: string) => void
  play: (fileInBase64: string) => void
  stop: () => void

  playing: boolean
  setPlaying: (state: boolean) => void

  fetchMusic: () => Promise<void>
}

export const useStore = create<MusicStore>((set, get) => ({
  volume: 0,
  music: undefined,
  list: [],

  select: (id) =>
    set((state) => ({ music: state.list.find((music) => music.id === id) })),

  play: (fileInBase64: string) => {
    playBase64Wav(fileInBase64)
    set({ playing: true })
  },

  stop: () => {
    stopPlayback()
    set({ playing: false })
  },

  playing: false,
  setPlaying: (state: boolean) => set({ playing: state }),

  fetchMusic: async () => {
    try {
      const response = await client.get('/music/all')
      console.log('Fetched music list:', response.data)
      set({ list: response.data })
    } catch (e) {
      console.error('Failed fetching music', e)
    }
  },
}))
