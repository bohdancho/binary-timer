import { Binary } from '@/App'

export const getBinary = (decimal: number, maxValue: number) => {
  let binary: Binary[] = []

  while (true) {
    const rest = (decimal % 2) as Binary
    decimal = (decimal - rest) / 2

    binary = [rest, ...binary]
    if (decimal === 0 || decimal === 1) {
      binary = [decimal, ...binary]
      break
    }
  }

  const length = getLength(maxValue)
  const missingLength = length - binary.length
  for (let i = 0; i < missingLength; i++) {
    binary = [0, ...binary]
  }
  return binary
}

function getLength(maxValue: number) {
  for (let position = 0; ; position++) {
    if (2 ** position > maxValue) {
      return position
    }
  }
}
