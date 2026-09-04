import {
  Check,
  FilePlus,
  HandCoins,
  Printer,
  X,
} from 'lucide-react'

import { useSimulationStore } from '../../store/simulationStore'

interface Props {
  showAdd?: boolean
  showFinish?: boolean
}

export function GameAction({
  showAdd = true,
  showFinish = true,
}: Props) {
  const clearInput =
    useSimulationStore(
      (state) =>
        state.clearInput,
    )

  const stake =
    useSimulationStore(
      (state) => state.stake,
    )

  const addNewGame =
    useSimulationStore(
      (state) =>
        state.addNewGame,
    )

  const finishGame =
    useSimulationStore(
      (state) =>
        state.finishGame,
    )

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        type="button"
        onClick={clearInput}
        className="
          flex min-h-14
          items-center
          justify-center
          gap-2
          bg-red-600
          text-xs
          font-black
          text-white
          transition
          hover:bg-red-500
        "
      >
        <X size={22} />
        <span>Cancel</span>
      </button>

      <button
        type="button"
        onClick={stake}
        className="
          flex min-h-14
          items-center
          justify-center
          gap-2
          bg-green-600
          text-xs
          font-black
          text-white
          transition
          hover:bg-green-500
        "
      >
        <HandCoins size={20} />
        <span>Stake</span>
      </button>

      {showAdd && (
        <button
          type="button"
          onClick={
            addNewGame
          }
          className="
            flex min-h-14
            items-center
            justify-center
            gap-2
            bg-blue-600
            text-xs
            font-black
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <FilePlus size={20} />
          <span>Add new</span>
        </button>
      )}

      {showFinish && (
        <button
          type="button"
          onClick={
            finishGame
          }
          className="
            flex min-h-14
            items-center
            justify-center
            gap-2
            bg-green-700
            text-xs
            font-black
            text-white
            transition
            hover:bg-green-600
          "
        >
          <Check size={20} />
          <span>Finish</span>
        </button>
      )}

      <button
        type="button"
        onClick={() =>
          window.print()
        }
        className="
          col-span-2
          flex min-h-12
          items-center
          justify-center
          gap-2
          bg-emerald-800
          text-xs
          font-black
          text-white
          transition
          hover:bg-emerald-700
        "
      >
        <Printer size={18} />
        Print
      </button>
    </div>
  )
}