import { Toaster } from 'sonner'
import { useKeyboard } from './hooks/useKeyboard'
import { Header } from './components/Header'
import { StatusBar } from './components/terminal/statusBar'
import { TicketSummary } from './components/summary/TicketSummary'
import { ConfirmModal } from './modal/ConfirmModal'
import { Terminal } from './components/terminal/terminal'




function App() {
  useKeyboard()

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="mx-auto max-w-[1600px] px-4 py-6">
        <div className="mb-6">
          {/* <p className="text-xs font-black uppercase tracking-[0.3em] text-green-500">
            Simulation environment
          </p> */}

          <h1 className="mt-1 text-2xl font-black text-white sm:text-3xl">
            B.I Red Box Simulator
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-gray-500">
            Interactive terminal interface
            based on the supplied reference
            design.
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[minmax(0,1fr)_280px]
          "
        >
        <Terminal />
          <TicketSummary />
        </div>
      </main>

      <StatusBar />

      <ConfirmModal />

      <Toaster
        position="top-right"
        theme="dark"
      />
    </div>
  )
}

export default App