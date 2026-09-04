import {
  CircleDollarSign,
  Monitor,
} from 'lucide-react'

import { useSimulationStore } from '../../src/store/simulationStore'

export function Header() {
  const balance =
    useSimulationStore(
      (state) =>
        state.balance,
    )

  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950 px-4 py-3 text-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-green-600">
            <Monitor size={22} />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500">
              Interactive terminal
            </p>

            <h1 className="text-lg font-black">
              B.I RED BOX
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 border border-gray-700 bg-gray-900 px-3 py-2">
          <CircleDollarSign
            size={18}
            className="text-green-400"
          />

          <span className="text-sm font-black">
            ₦
            {balance.toLocaleString()}
          </span>
        </div>
      </div>
    </header>
  )
}