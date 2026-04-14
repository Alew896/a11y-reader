import React, { useRef, useEffect } from 'react'
import { useA11yReader } from './useA11yReader'

export function A11yOverlay() {
  const { current, logs } = useA11yReader()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isDragging = false

    el.onmousedown = () => (isDragging = true)
    document.onmouseup = () => (isDragging = false)

    document.onmousemove = (e) => {
      if (!isDragging) return
      el.style.left = e.pageX + 'px'
      el.style.top = e.pageY + 'px'
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        width: 300,
        background: '#111',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
        zIndex: 9999,
        fontSize: 12,
      }}
    >
      <div style={{ fontWeight: 'bold' }}>A11y Reader</div>

      <div style={{ marginTop: 10 }}>
        <strong>Current:</strong>
        <div>{current}</div>
      </div>

      <div style={{ marginTop: 10, maxHeight: 150, overflow: 'auto' }}>
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  )
}