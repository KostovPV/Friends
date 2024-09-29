
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import { Home } from './pages/home/Home.jsx';
import { Auth } from './pages/auth/Auth.jsx';
import { Parties } from './pages/parties/Paries.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Fooret.jsx';
import Contacts from './pages/contacts/Contacts.jsx';

function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/promo" element={''} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/parties" element={<Parties />} />
          <Route path='/contact' element={ <Contacts />}/>
        </Routes>
      </div>
      < Footer />
    </BrowserRouter>
  )
}

export default App
