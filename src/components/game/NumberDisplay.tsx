import { X } from 'lucide-react'

import { useSimulationStore } from '../../store/simulationStore'

interface NumberDisplayProps {
  numbers: string[]
}

export function NumberDisplay({
  numbers,
}: NumberDisplayProps) {
  const input =
    useSimulationStore(
      (state) => state.input,
    )

  const removeNumber =
    useSimulationStore(
      (state) =>
        state.removeNumber,
    )

  const values = [
    ...numbers,
  ]

  if (input) {
    values.push(
      input.padStart(2, '0'),
    )
  }

  while (values.length < 5) {
    values.push('-')
  }

  return (
    <div className="flex min-h-24 items-center justify-center gap-2 overflow-hidden">
      {values
        .slice(0, 5)
        .map((value, index) => {
          const realNumber =
            index <
            numbers.length

          return (
            <div
              key={`${value}-${index}`}
              className="relative"
            >
              <div
                className={`
                  flex h-9 min-w-9
                  items-center justify-center
                  rounded-full
                  px-2
                  text-xs font-black
                  ${
                    value === '-'
                      ? 'bg-gray-200 text-gray-400'
                      : 'bg-gray-700 text-white'
                  }
                `}
              >
                {value}
              </div>

              {realNumber && (
                <button
                  type="button"
                  onClick={() =>
                    removeNumber(
                      index,
                    )
                  }
                  className="
                    absolute -right-1 -top-1
                    flex h-4 w-4
                    items-center justify-center
                    rounded-full
                    bg-red-500
                    text-white
                  "
                >
                  <X size={9} />
                </button>
              )}
            </div>
          )
        })}
    </div>
  )
}