import React from 'react'
import Navbar from './COMPONENTS/Navbar'
import Places from './COMPONENTS/Places'
import Place from './COMPONENTS/Place'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <div>
   
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Places />}/>
          <Route path='/:id' element={<Place />}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
