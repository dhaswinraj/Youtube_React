import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Body from './Body.jsx'
import SignIn from './Signin.jsx'
import Shorts from './Shorts.jsx'
function Router() {
  return (
    <div>
        <Routes>
        <Route path='/body' element={<Body/>}/>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/shorts' element={<Shorts/>}/>

        </Routes>
    </div>
  )
}

export default Router