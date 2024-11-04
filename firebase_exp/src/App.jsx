import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirebaseAuth from './component/FirebaseAuth'
import FireStore from './component/FireStore'

function App() {
  

  return (
    <>
     <h1>Firebase Demo</h1>
     {/* <FirebaseAuth></FirebaseAuth> */}
     <FireStore></FireStore>
    </>
  )
}

export default App
