import { useState } from 'react'
import Navigation from './assets/components/Navigation'
import AppRouter from './assets/components/AppRouter'
function App() {
  return (
    <>
      <header >
        <h1>Attendace Checker System</h1>
        <Navigation/>
      </header>
      <main style={{border:'1px solid red', height: '90vh'}}>
       <AppRouter/>
      </main>
    </>
  )
}

export default App
