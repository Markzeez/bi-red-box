import { useEffect } from 'react'

import { useSimulationStore } from '../store/simulationStore'

export function useKeyboard() {
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

  const stake =
    useSimulationStore(
      (state) =>
        state.stake,
    )

  const clearInput =
    useSimulationStore(
      (state) =>
        state.clearInput,
    )

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        /^[0-9]$/.test(event.key)
      ) {
        pressNumber(event.key)
        return
      }

      if (
        event.key === 'Backspace'
      ) {
        backspace()
        return
      }

      if (
        event.key === 'Enter'
      ) {
        stake()
        return
      }

      if (
        event.key === 'Escape'
      ) {
        clearInput()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    pressNumber,
    backspace,
    stake,
    clearInput,
  ])
}