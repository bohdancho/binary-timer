import { useEffect, useState } from 'react'

export const useClock = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds())
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [hours, setHours] = useState(new Date().getHours())

  useEffect(() => {
    const clock = setInterval(() => {
      setSeconds(new Date().getSeconds())
    }, 1000)
    return () => clearInterval(clock)
  }, [])

  useEffect(() => {
    if (seconds === 0) {
      setMinutes(new Date().getMinutes())
    }
  }, [seconds])

  useEffect(() => {
    if (minutes === 0) {
      setHours(new Date().getHours())
    }
  }, [minutes])

  return { seconds, minutes, hours }
}
