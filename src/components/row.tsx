import { Binary } from '@/App'
import { FunctionComponent } from 'react'

interface RowProps {
  values: Binary[]
  color: string
}

export const Row: FunctionComponent<RowProps> = ({ values, color }) => {
  return (
    <div className='flex gap-[2vw]'>
      {values.map((item, index) => (
        <div
          key={index}
          style={{ borderColor: color, backgroundColor: item ? color : undefined }}
          className='h-[10vw] w-[10vw] rounded-full border-[0.5vw]'
        ></div>
      ))}
    </div>
  )
}
