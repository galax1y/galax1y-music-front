export interface MusicDto {
  id: string
  title: string
  artist: string
}

export interface CreateMusicRequest {
  rawInput: string
  title: string
  artist: string
}
