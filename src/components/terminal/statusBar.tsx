import {
  Keyboard,
  Wifi,
} from 'lucide-react'

export function StatusBar() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 px-4 py-2 text-gray-500">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between text-[10px]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />

          <span>
            SYSTEM READY
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1 sm:flex">
            <Keyboard size={12} />
            Keyboard enabled
          </span>

          <span className="flex items-center gap-1">
            <Wifi size={12} />
            Simulation
          </span>
        </div>
      </div>
    </footer>
  )
}