
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import { Home } from './pages/home/Home.jsx';
import { Auth } from './pages/auth/Auth.jsx';
import { Parties } from './pages/parties/Paries.jsx';
import Header from './components/Header/Header.jsx';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/parties" element={<Parties />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
