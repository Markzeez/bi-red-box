import {
  AnimatePresence,
  motion,
} from 'motion/react'

import {
  ArrowLeft,
  Trash2,
} from 'lucide-react'

import { useSimulationStore } from '../store/simulationStore'

export function ConfirmModal() {
  const showConfirm =
    useSimulationStore(
      (state) =>
        state.showConfirm,
    )

  const closeConfirm =
    useSimulationStore(
      (state) =>
        state.closeConfirm,
    )

  const resetSimulation =
    useSimulationStore(
      (state) =>
        state.resetSimulation,
    )

  return (
    <AnimatePresence>
      {showConfirm && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-100
            flex
            items-center
            justify-center
            bg-black/70
            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="w-full max-w-sm bg-white p-6 shadow-2xl"
          >
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <Trash2
                  size={25}
                  className="text-red-600"
                />
              </div>

              <h2 className="text-xl font-black text-gray-800">
                ARE YOU SURE?
              </h2>

              <p className="mt-3 text-xs leading-5 text-gray-500">
                ALL GAMES COUPONS WILL
                BE DELETED AND THE
                SIMULATION WILL RETURN
                TO HOME.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={
                  resetSimulation
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-red-600
                  px-4
                  py-3
                  text-xs
                  font-black
                  text-white
                  hover:bg-red-500
                "
              >
                <Trash2
                  size={18}
                />
                Delete
              </button>

              <button
                type="button"
                onClick={
                  closeConfirm
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-blue-600
                  px-4
                  py-3
                  text-xs
                  font-black
                  text-white
                  hover:bg-blue-500
                "
              >
                <ArrowLeft
                  size={18}
                />
                Go back
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}