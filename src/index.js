import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer } from './components/Footer';
import { HomeMain } from './components/HomeMain';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Projects } from './components/Projects';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={ <HomeMain/> } />
        
        <Route path='/home' element={ <HomeMain/> } />
        <Route path='/resume' element={ <Skills/> } />
        <Route path='/projects' element={ <Projects/> } />
          
      </Routes>

      <Footer />
    </HashRouter>
  </React.StrictMode>
);

