export function useSound() {
  function click() {
    const audio =
      new Audio(
        '/sounds/click.mp3',
      )

    audio.volume = 0.25

    audio.play().catch(() => {})
  }

  function success() {
    const audio =
      new Audio(
        '/sounds/success.mp3',
      )

    audio.volume = 0.35

    audio.play().catch(() => {})
  }

  return {
    click,
    success,
  }
}