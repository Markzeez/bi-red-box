import {
  FilePlus2,
  Printer,
  X,
  Check,
  HandCoins,
} from 'lucide-react'

import { useSimulationStore } from '../../store/simulationStore'

export function ActionButtons() {
  const cancelInput = useSimulationStore(
    (state) => state.cancel ?? (() => undefined),
  )

  const stakeGame = useSimulationStore(
    (state) => state.stakeGame,
  )

  const addGame = useSimulationStore(
    (state) => state.addGame,
  )

  const finish = useSimulationStore(
    (state) => state.finish,
  )

  const print = useSimulationStore(
    (state) => state.print,
  )

  return (
    <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">
      <button
        onClick={cancelInput}
        className="
          flex min-h-14 items-center justify-center gap-2
          bg-red-600 px-3 py-2
          text-xs font-black text-white
          transition hover:bg-red-500
        "
      >
        <X size={21} />
        <span>Cancel</span>
      </button>

      <button
        onClick={stakeGame}
        className="
          flex min-h-14 items-center justify-center gap-2
          bg-green-600 px-3 py-2
          text-xs font-black text-white
          transition hover:bg-green-500
        "
      >
        <HandCoins size={21} />
        <span>Stake</span>
      </button>

      <button
        onClick={addGame}
        className="
          flex min-h-14 items-center justify-center gap-2
          bg-blue-600 px-3 py-2
          text-xs font-black text-white
          transition hover:bg-blue-500
        "
      >
        <FilePlus2 size={21} />
        <span>Add new</span>
      </button>

      <button
        onClick={finish}
        className="
          flex min-h-14 items-center justify-center gap-2
          bg-green-700 px-3 py-2
          text-xs font-black text-white
          transition hover:bg-green-600
        "
      >
        <Check size={21} />
        <span>Finish</span>
      </button>

      <button
        onClick={print}
        className="
          col-span-2 flex min-h-12 items-center justify-center gap-2
          bg-emerald-700 px-3 py-2
          text-xs font-black text-white
          transition hover:bg-emerald-600
          sm:col-span-4
        "
      >
        <Printer size={18} />
        Print
      </button>
    </div>
  )
}