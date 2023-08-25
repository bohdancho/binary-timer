import './App.tw.css'
import { Row } from './components/row'
import { useClock } from './hooks'
import { getBinary } from './utils'

export type Binary = 0 | 1

const App = () => {
  const { seconds, minutes, hours } = useClock()

  return (
    <main className='flex h-screen w-screen items-center justify-center text-7xl text-white'>
      <div className='flex flex-col items-end gap-[2vw]'>
        <Row color='#3b82f6' values={getBinary(hours, 5)}></Row>
        <Row color='#22c55e' values={getBinary(minutes, 6)}></Row>
        <Row color='#ef4444' values={getBinary(seconds, 6)}></Row>
      </div>
    </main>
  )
}

export default App
