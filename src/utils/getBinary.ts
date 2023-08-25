import { Binary } from '@/App'

export const getBinary = (decimal: number, minLength: number) => {
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

  const missingLength = minLength - binary.length
  for (let i = 0; i < missingLength; i++) {
    binary = [0, ...binary]
  }
  return binary
}
