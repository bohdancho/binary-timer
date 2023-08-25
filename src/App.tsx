import colors from 'tailwindcss/colors'
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
        <Row color={colors.blue[500]} values={getBinary(hours, 23)}></Row>
        <Row color={colors.green[500]} values={getBinary(minutes, 59)}></Row>
        <Row color={colors.red[500]} values={getBinary(seconds, 59)}></Row>
      </div>
    </main>
  )
}

export default App
