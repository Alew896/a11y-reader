import { useEffect, useState } from 'react'
import { getA11yText } from './utils/getA11yText'

export function useA11yReader() {
  const [current, setCurrent] = useState('')
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const handler = (e: FocusEvent) => {
      const el = e.target as HTMLElement
      const text = getA11yText(el)

      setCurrent(text)
      setLogs((prev) => [text, ...prev.slice(0, 20)])
    }

    document.addEventListener('focusin', handler)

    return () => {
      document.removeEventListener('focusin', handler)
    }
  }, [])

  return { current, logs }
}