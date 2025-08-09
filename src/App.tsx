import { useState } from 'react'
import ProgressBarIndex from './components/progressBar/progressBarIndex'
import OtpInputIndex from './components/otpInput/otpInputIndex'
import CommonEmployee from './components/recursiveCheckboxes/commonEmployee'

import './App.css'
import RecursiveCheckboxes from './components/recursiveCheckboxes/recursiveCheckboxes';
import InputChips from './components/inputChips/inputChips'
import TodoList from './components/todoList/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ProgressBarIndex />
      <OtpInputIndex />
      <Recurssion /> */}
      {/* <RecursiveCheckboxes /> */}
      {/* <CommonEmployee /> */}
      {/* <InputChips /> */}
      {<TodoList />}
    </>
  )
}

export default App
