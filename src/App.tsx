import './App.tw.css'
import { useClock } from './hooks'
import { getBinary } from './utils'

export type Binary = 0 | 1

function App() {
  const { seconds, minutes, hours } = useClock()

  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center bg-slate-800 text-7xl text-white'>
      <div>{getBinary(hours, 5)}</div>
      <div>{getBinary(minutes, 6)}</div>
      <div>{getBinary(seconds, 6)}</div>
    </main>
  )
}

export default App
