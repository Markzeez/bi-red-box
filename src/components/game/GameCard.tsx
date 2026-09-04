import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

import type { Game } from '../../types/simulation'

import { useSimulationStore } from '../../store/simulationStore'

import { GameTabs } from './GameTabs'
import { NumberDisplay } from './NumberDisplay'
import { Keypad } from './Keypad'
import { GameAction } from './GameAction'

interface GameCardProps {
  game: Game
}

export function GameCard({
  game,
}: GameCardProps) {
  const activeGameId =
    useSimulationStore(
      (state) =>
        state.activeGameId,
    )

  const selectGame =
    useSimulationStore(
      (state) =>
        state.selectGame,
    )

  const active =
    game.id === activeGameId

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={() =>
        selectGame(game.id)
      }
      className={`
        relative
        overflow-hidden
        bg-white
        shadow-2xl
        transition
        ${
          active
            ? 'ring-4 ring-blue-500/30'
            : ''
        }
      `}
    >
      {/* Header */}

      <div className="border-b border-gray-200 px-4 py-3 text-center">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
            Input numbers
          </span>

          {game.status ===
            'completed' && (
            <CheckCircle2
              size={16}
              className="text-green-600"
            />
          )}
        </div>

        <h3 className="mt-1 text-sm font-black text-gray-700">
          GAME{' '}
          {String(
            game.number,
          ).padStart(2, '0')}
        </h3>
      </div>

      <div className="p-4">
        <GameTabs />

        <NumberDisplay
          numbers={
            game.numbers
          }
        />

        <Keypad />

        <GameAction
          showAdd={
            game.number ===
            1
          }
          showFinish
        />
      </div>

      {/* Footer */}

      <div className="flex justify-between border-t border-gray-200 bg-gray-50 px-4 py-2">
        <span
          className={`
            text-[9px]
            font-black
            ${
              game.status ===
              'completed'
                ? 'text-green-600'
                : 'text-gray-400'
            }
          `}
        >
          {game.status.toUpperCase()}
        </span>

        <span className="text-[9px] font-bold text-gray-400">
          ₦{game.stake.toLocaleString()}
        </span>
      </div>
    </motion.article>
  )
}