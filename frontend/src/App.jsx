
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import { Home } from './pages/home/Home.jsx';
import { Auth } from './pages/auth/Auth.jsx';
import { Parties } from './pages/parties/Paries.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Fooret.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Terms from './pages/terms/Terms.jsx';
import BookParty from './pages/bookParty/BookParty.jsx';

function App() {


  return (
    <BrowserRouter>

      <div className='app-container'>
        <Header />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/promo" element={''} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/parties" element={<Parties />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/book-party' element={<BookParty />} />
        </Routes>
        < Footer />
      </div>

    </BrowserRouter>
  )
}

export default App
