import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Add from './pages/Add/Add';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import Login from './pages/Login/Login';

const clientId = '879595363712-teulgvpe0j6kq942v3u907ojsk0ke8me.apps.googleusercontent.com';
function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });

return(
    <div>
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/add" element = {<Add />} />
          <Route path = "/book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "/home" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
  </div>
);
}
export default App;
