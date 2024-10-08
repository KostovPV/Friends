
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

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyB3SQERW9UJzVK13Hp8zTfpC2c-rwNdvrc",
  authDomain: "friends-49039.firebaseapp.com",
  projectId: "friends-49039",
  storageBucket: "friends-49039.appspot.com",
  messagingSenderId: "39272086751",
  appId: "1:39272086751:web:b93d9bc98fd8bda64dfd6a",
  measurementId: "G-D0K049NB16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
