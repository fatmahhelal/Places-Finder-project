import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Top from './component/Top'
import Banner from './component/Banner';
import Footer from './component/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';
import Places from './component/Places';

function App() {
  
  return (
    <div className="App">
      <Top></Top>
      <Footer/>
    </div>
  );
}

export default App;
