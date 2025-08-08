import { useState } from 'react'
import ProgressBarIndex from './components/progressBar/progressBarIndex'
import OtpInputIndex from './components/otpInput/otpInputIndex'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProgressBarIndex />
      <OtpInputIndex />
    </>
  )
}

export default App
