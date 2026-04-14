# A11y Reader

A text-based accessibility reader overlay for React apps that simulates screen reader output (NVDA-style) for debugging and testing.

## ✨ Features

- 🔍 Focus tracking
- 🧠 NVDA-like text output
- 📦 Lightweight & dev-friendly
- 🖱️ Draggable overlay

## 📦 Installation

npm install @alew896/a11y-reader

## 🚀 Usage

import { A11yOverlay } from '@alew896/a11y-reader'

function App() {
  return (
    <>
      <A11yOverlay />
    </>
  )
}
