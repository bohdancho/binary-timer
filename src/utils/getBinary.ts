import { Binary } from '@/App'

export function getBinary(decimal: number, minLength: number) {
  let binary: Binary[] = []

  while (true) {
    const rest = (decimal % 2) as Binary
    decimal = (decimal - rest) / 2

    console.log(decimal, rest)

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
