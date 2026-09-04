import { create } from 'zustand'

import type {
  GameType,
  SimulationState,
} from '../types/simulation'

import { createGame, initialGames } from '../data/game'

interface SimulationActions {
  selectGame: (id: string) => void

  selectGameType: (
    type: GameType,
  ) => void

  pressNumber: (
    number: string,
  ) => void

  backspace: () => void

  clearInput: () => void

  stake: () => void

  addNewGame: () => void

  finishGame: () => void

  removeNumber: (
    index: number,
  ) => void

  openConfirm: () => void

  closeConfirm: () => void

  resetSimulation: () => void

  toggleSound: () => void
}

export type SimulationStore =
  SimulationState &
  SimulationActions

export const useSimulationStore =
  create<SimulationStore>((set, get) => ({
    games: initialGames,

    activeGameId: initialGames[0]?.id ?? null,

    input: '',

    balance: 50000,

    showConfirm: false,

    soundEnabled: false,

    selectGame: (id) => {
      const game = get().games.find(
        (item) => item.id === id,
      )

      if (!game) return

      set({
        activeGameId: id,
        input: '',
      })
    },

    selectGameType: (type) => {
      const activeGameId =
        get().activeGameId

      if (!activeGameId) return

      set((state) => ({
        games: state.games.map((game) =>
          game.id === activeGameId
            ? {
                ...game,
                type,
              }
            : game,
        ),
      }))
    },

    pressNumber: (number) => {
      set((state) => {
        if (state.input.length >= 2) {
          return state
        }

        return {
          input: `${state.input}${number}`,
        }
      })
    },

    backspace: () => {
      set((state) => ({
        input: state.input.slice(0, -1),
      }))
    },

    clearInput: () => {
      set({
        input: '',
      })
    },

    stake: () => {
      const {
        input,
        activeGameId,
      } = get()

      if (!activeGameId || !input) {
        return
      }

      const value =
        input.padStart(2, '0')

      set((state) => ({
        input: '',

        games: state.games.map((game) => {
          if (
            game.id !== activeGameId
          ) {
            return game
          }

          if (
            game.numbers.includes(value)
          ) {
            return game
          }

          return {
            ...game,
            numbers: [
              ...game.numbers,
              value,
            ],
          }
        }),
      }))
    },

    addNewGame: () => {
      set((state) => {
        const nextNumber =
          state.games.length + 1

        const newGame =
          createGame(nextNumber)

        return {
          games: [
            ...state.games,
            newGame,
          ],

          activeGameId:
            newGame.id,

          input: '',
        }
      })
    },

    finishGame: () => {
      const activeGameId =
        get().activeGameId

      if (!activeGameId) return

      set((state) => ({
        games: state.games.map((game) =>
          game.id === activeGameId
            ? {
                ...game,
                status: 'completed',
              }
            : game,
        ),
      }))
    },

    removeNumber: (index) => {
      const activeGameId =
        get().activeGameId

      if (!activeGameId) return

      set((state) => ({
        games: state.games.map((game) =>
          game.id === activeGameId
            ? {
                ...game,
                numbers:
                  game.numbers.filter(
                    (_, i) =>
                      i !== index,
                  ),
              }
            : game,
        ),
      }))
    },

    openConfirm: () => {
      set({
        showConfirm: true,
      })
    },

    closeConfirm: () => {
      set({
        showConfirm: false,
      })
    },

    resetSimulation: () => {
      const firstGame =
        initialGames[0]

      set({
        games: [firstGame],
        activeGameId:
          firstGame?.id ?? null,
        input: '',
        showConfirm: false,
      })
    },

    toggleSound: () => {
      set((state) => ({
        soundEnabled:
          !state.soundEnabled,
      }))
    },
  }))