import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home_component/Home';
import About from './components/about_component/About';
import Contact from './components/contact_component/Contact';
import CustomNavbar from './components/CustomNavbar';
import InstallSoftware from './components/installSoftware_component/InstallSoftware';
import SoftwareListByType from './components/softwareListByType_component/SoftwareListByType';
import Filter from './components/filter_component/Filter';
import Filterd from './components/filterd_component/Filterd';
import Form from './components/form_component/Form';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

function App() {
  return (
   <Router>
     <div>
       <CustomNavbar />
       <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={Form} />
        <Route path="/filter" component={Filter} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        <Route path="/filterd-data/:values" component={Filterd} />
        <Route path="/software/:softwareId" exact component={SoftwareListByType} />
        <Route path="/installSoftware/:installsoftwareId" exact component={InstallSoftware} />
     </div>
   </Router>
  );
}

export default App;
