import type { Game } from '../types/simulation'

export function createGame(number: number): Game {
  return {
    id: `game-${Date.now()}-${number}`,
    number,
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
  }
}

export const initialGames: Game[] = [
  {
    id: 'game-1',
    number: 1,
    type: 'NAP',
    numbers: ['05', '72', '81', '29'],
    stake: 100,
    status: 'active',
  },
  {
    id: 'game-2',
    number: 2,
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
  },
  {
    id: 'game-3',
    number: 3,
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
  },
]