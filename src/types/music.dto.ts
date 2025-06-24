export interface MusicDto {
  id: string
  title: string
  artist: string

  wavInBase64: string
}

export interface CreateMusicRequest {
  title: string
  artist: string
  rawText: string
}

export interface CreateMusicWithMidiRequest {
  title: string
  artist: string
  midiInBase64: string
}
