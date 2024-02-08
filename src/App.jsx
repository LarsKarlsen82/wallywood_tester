import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'; // Import the About component
import Contact from './Pages/Contact/Contact'; // Import the Contact component
import Login from './Pages/Login/Login'; // Import the Login component
import Basket from './Components/Basket/Basket'; // Import the Basket component
import Posters from './Pages/Posters/Posters'; // Import the Posters component
import RandomPosters from './Pages/Posters/RandomPosters'; // Import the RandomPosters component
import PosterList from './Pages/Posters/PosterList'; // Import the PosterList component
import PosterDetails from './Pages/Posters/PosterDetails'; // Import the PosterDetails component
import NoPage from './Pages/NoPage/NoPage'; // Import the NoPage component
import { BasketProvider } from './Components/Basket/BasketContext';
import './App.scss';

const App = () => {
  return (
    <Router>
      <BasketProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/plakater" element={<Posters />}>
            <Route index element={<RandomPosters />} />
            <Route path=':genre' element={<PosterList />} />
            <Route path="/plakater/:slug" element={<PosterDetails />} />
            <Route path="/plakater/:slug/:name/:image" element={<PosterDetails />} />
            <Route path=':genre/:poster' element={<PosterDetails />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
        </BasketProvider>
    </Router>
  );
};

export default App;
