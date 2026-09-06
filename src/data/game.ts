import type { Game } from '../types/simulation'

export function createGame(number: number): Game {
  return {
    id: `game-${Date.now()}-${number}`,
    number,
    name: `Game ${number}`,
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
    completed: false,
  }
}

export const initialGames: Game[] = [
  {
    id: 'game-1',
    number: 1,
    name: 'Game 1',
    type: 'NAP',
    numbers: ['05', '72', '81', '29'],
    stake: 100,
    status: 'active',
    completed: false,
  },
  {
    id: 'game-2',
    number: 2,
    name: 'Game 2',
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
    completed: false,
  },
  {
    id: 'game-3',
    number: 3,
    name: 'Game 3',
    type: 'NAP',
    numbers: [],
    stake: 100,
    status: 'active',
    completed: false,
  },
]