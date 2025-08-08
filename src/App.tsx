import { useState } from 'react'
import ProgressBarIndex from './components/progressBar/progressBarIndex'
import OtpInputIndex from './components/otpInput/otpInputIndex'

import './App.css'
import RecursiveCheckboxes from './components/recursiveCheckboxes/recursiveCheckboxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ProgressBarIndex />
      <OtpInputIndex />
      <Recurssion /> */}
      <RecursiveCheckboxes />
    </>
  )
}

export default App
