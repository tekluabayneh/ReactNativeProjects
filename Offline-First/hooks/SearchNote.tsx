import { useEffect, useState } from "react"

export const UseDebounce = <T,>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>()

  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])


  console.log(value)
  console.log(debouncedValue)
  return debouncedValue
}
