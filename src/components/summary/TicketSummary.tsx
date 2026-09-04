import {
  Receipt,
  RotateCcw,
  Volume2,
  VolumeX,
} from 'lucide-react'

import { useSimulationStore } from '../../store/simulationStore'

export function TicketSummary() {
  const games =
    useSimulationStore(
      (state) => state.games,
    )

  const soundEnabled =
    useSimulationStore(
      (state) =>
        state.soundEnabled,
    )

  const toggleSound =
    useSimulationStore(
      (state) =>
        state.toggleSound,
    )

  const openConfirm =
    useSimulationStore(
      (state) =>
        state.openConfirm,
    )

  const selections =
    games.reduce(
      (
        total,
        game,
      ) =>
        total +
        game.numbers.length,
      0,
    )

  const total =
    games.reduce(
      (
        total,
        game,
      ) =>
        total +
        game.stake,
      0,
    )

  return (
    <aside className="h-fit overflow-hidden bg-white shadow-2xl">
      <div className="flex items-center gap-2 border-b border-gray-200 p-4">
        <Receipt size={20} />

        <h2 className="font-black">
          Ticket Summary
        </h2>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">
            Games
          </span>

          <strong>
            {games.length}
          </strong>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">
            Selections
          </span>

          <strong>
            {selections}
          </strong>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="font-bold">
              Total
            </span>

            <strong className="text-lg text-green-600">
              ₦{total.toLocaleString()}
            </strong>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={
              toggleSound
            }
            className="flex items-center justify-center gap-2 border border-gray-200 px-3 py-3 text-xs font-bold hover:bg-gray-100"
          >
            {soundEnabled ? (
              <Volume2 size={16} />
            ) : (
              <VolumeX size={16} />
            )}

            Sound
          </button>

          <button
            type="button"
            onClick={
              openConfirm
            }
            className="flex items-center justify-center gap-2 bg-red-600 px-3 py-3 text-xs font-bold text-white hover:bg-red-500"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </aside>
  )
}