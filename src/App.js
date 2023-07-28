import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation.component';
import Aboutus from './routes/headerPages/aboutUs/aboutus.component';
import Contact from './routes/headerPages/contact/contact.component';
import Gallery from './routes/headerPages/comingnext/gallery.component';
import Products from './routes/headerPages/signin/products.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
