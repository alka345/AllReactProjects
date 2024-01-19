import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements ,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Counter from './components/Counter/Counter.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import PassGen from './components/P2PassGen/PassGen.jsx'
import CurrConv from './components/CurrConv/CurrConv.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/> }>
    <Route path='' element={<CurrConv/> }/>
    <Route path='passgen' element={<PassGen/>}/>
    <Route path='counter' element={<Counter/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route loader={githubInfoLoader}
     path='github'
     element={<Github/>}/>

  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
