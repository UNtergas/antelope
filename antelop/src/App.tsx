import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TablePage from './routes/TablePage'
import GraphPage from './routes/GraphPage'
import OverviewPage from './routes/OverviewPage'
import SinglePage from './routes/SinglePage'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/graph' element={<GraphPage />} />
        <Route path='/single' element={<SinglePage />} />
      </Routes>
    </Router>
  )
}



export default App
