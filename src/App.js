import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News from './components/News';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  const router = createBrowserRouter ([
    {
      path: "/",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/></>
    },
    {
      path: "/business",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business"/></>
    },
    {
      path: "/entertainment",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/></>
    },
    {
      path: "/general",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country="in" category="general"/></>
    },
    {
      path: "/health",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} country="in" category="health"/></>
    },
    {
      path: "/science",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} country="in" category="science"/></>
    },
    {
      path: "/sports",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports"/></>
    },
    {
      path: "/technology",
      element:<><Navbar/><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country="in" category="technology"/></>
    },
  ])
    
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <RouterProvider router={router}/>
      </div>
    )
}
export default App
