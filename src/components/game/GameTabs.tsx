import type { GameType } from '../../types/simulation'

import { useSimulationStore } from '../../store/simulationStore'

const tabs: GameType[] = [
  'NAP',
  'PERM',
  'BANKER',
  'AGAINST',
]

export function GameTabs() {
  const activeGameId =
    useSimulationStore(
      (state) =>
        state.activeGameId,
    )

  const games =
    useSimulationStore(
      (state) => state.games,
    )

  const selectGameType =
    useSimulationStore(
      (state) =>
        state.selectGameType,
    )

  const activeGame = games.find(
    (game) =>
      game.id === activeGameId,
  )

  return (
    <div className="grid grid-cols-4 gap-1">
      {tabs.map((tab) => {
        const active =
          activeGame?.type === tab

        return (
          <button
            key={tab}
            type="button"
            onClick={() =>
              selectGameType(tab)
            }
            className={`
              border px-1 py-2
              text-[9px] font-black
              transition sm:text-[10px]
              ${
                active
                  ? 'border-gray-700 bg-gray-700 text-white'
                  : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-100'
              }
            `}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}