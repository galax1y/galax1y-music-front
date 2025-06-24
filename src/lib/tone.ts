import * as Tone from 'tone'
import { useStore } from './store'

let player: Tone.Player | null = null
let stopTimeout: ReturnType<typeof setTimeout> | null = null

export const playBase64Wav = async (base64: string) => {
  const setPlaying = useStore.getState().setPlaying

  const cleanedBase64 = base64.replace(/^data:audio\/wav;base64,/, '')
  const byteCharacters = atob(cleanedBase64)
  const byteArray = new Uint8Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i)
  }

  const blob = new Blob([byteArray], { type: 'audio/wav' })
  const url = URL.createObjectURL(blob)

  if (player) {
    player.stop()
    player.dispose()
    player = null
    if (stopTimeout) {
      clearTimeout(stopTimeout)
      stopTimeout = null
    }
  }

  player = new Tone.Player(url).toDestination()
  await player.load(url)
  player.start()
  setPlaying(true)

  const duration = player.buffer.duration * 1000
  stopTimeout = setTimeout(() => {
    setPlaying(false)
    URL.revokeObjectURL(url)
  }, duration)
}

export const stopPlayback = () => {
  const setPlaying = useStore.getState().setPlaying

  if (player) {
    player.stop()
    player.dispose()
    player = null
  }
  if (stopTimeout) {
    clearTimeout(stopTimeout)
    stopTimeout = null
  }
  setPlaying(false)
}
