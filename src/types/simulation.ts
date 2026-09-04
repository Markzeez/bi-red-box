export type GameType =
  | 'NAP'
  | 'PERM'
  | 'BANKER'
  | 'AGAINST'

export type GameStatus =
  | 'idle'
  | 'active'
  | 'completed'

export interface Game {
  completed: any
  name: ReactNode
  id: string
  number: number
  type: GameType
  numbers: string[]
  stake: number
  status: GameStatus
}

export interface SimulationState {
  games: Game[]
  activeGameId: string | null
  input: string
  balance: number
  showConfirm: boolean
  soundEnabled: boolean
}