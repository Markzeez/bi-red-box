import { GameCard } from '../game/GameCard'

import { useSimulationStore } from '../../store/simulationStore'

export function Terminal() {
  const games =
    useSimulationStore(
      (state) => state.games,
    )

  return (
    <section className="min-w-0">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
            Coupon workspace
          </p>

          <h2 className="text-xl font-black text-white">
            Active Games
          </h2>
        </div>

        <div className="bg-gray-800 px-3 py-2 text-xs font-bold text-gray-300">
          {games.length} Games
        </div>
      </div>

      <div
        className="
          grid
          items-start
          gap-5
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </section>
  )
}