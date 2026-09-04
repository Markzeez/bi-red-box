import { Delete } from 'lucide-react'

import { useSimulationStore } from '../store/simulationStore'

const keypad = [
  ['9', '8', '7'],
  ['6', '5', '4'],
  ['3', '2', '1'],
  ['0'],
]

export function Keypad() {
  const pressNumber =
    useSimulationStore(
      (state) =>
        state.pressNumber,
    )

  const backspace =
    useSimulationStore(
      (state) =>
        state.backspace,
    )

  return (
    <div className="space-y-3 py-2">
      {keypad.map(
        (row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-3"
          >
            {row.map((number) => (
              <button
                key={number}
                type="button"
                onClick={() =>
                  pressNumber(
                    number,
                  )
                }
                className="
                  flex h-11 w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-700
                  text-sm font-black
                  text-white
                  shadow
                  transition
                  hover:scale-105
                  hover:bg-gray-800
                  active:scale-95
                "
              >
                {number}
              </button>
            ))}

            {rowIndex === 0 && (
              <button
                type="button"
                onClick={
                  backspace
                }
                aria-label="Backspace"
                className="
                  flex h-11 w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-700
                  text-white
                  shadow
                  transition
                  hover:bg-gray-800
                "
              >
                <Delete
                  size={18}
                />
              </button>
            )}
          </div>
        ),
      )}
    </div>
  )
}