import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import UpdateAddress from './components/UpdateAddress.jsx'
import AddAddress from './components/AddAddress.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/'  element={<Layout/>} >

      <Route path='' element={<Home/>}/>
      <Route path='update' element={<UpdateAddress/>}/>
      <Route path='add' element={<AddAddress/>}/>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
    
  </React.StrictMode>,
)
