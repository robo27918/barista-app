import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import BaristaForm from './Components/BaristaForm';
function App() {
  

  return (
    <>
      <div className='title-container'>
          <h1 className='title'>On My Grind</h1>
          <p> So you think you can Barista? Lets put that to the test...</p>
          
      </div>
      <BaristaForm>

      </BaristaForm>
    </>
  );
}

export default App
