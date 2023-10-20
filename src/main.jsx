import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Btn from './Btn.jsx'
// import Counter from './Counter.jsx'
import MovieApp from './MovieApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>,
)
