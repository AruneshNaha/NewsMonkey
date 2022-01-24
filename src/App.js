import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return <Router>
      <Routes>
        <Route exact path="/" element={<Navbar key="general" category="general"/>}/>
        <Route exact path="/business" element={<Navbar key="business" category="business"/>}/>
        <Route exact path="/entertainment" element={<Navbar key="entertainment" category="entertainment"/>}/>
        <Route exact path="/health" element={<Navbar key="health" category="health"/>}/>
        <Route exact path="/science" element={<Navbar key="science" category="science"/>}/>
        <Route exact path="/sports" element={<Navbar key="sports" category="sports"/>}/>
        <Route exact path="/technology" element={<Navbar key="technology" category="technology"/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<News key="general" country="in" category="general" pageSize={20}/>}/>
        <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize={20}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize={20}/>}/>
        <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize={20}/>}/>
        <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={20}/>}/>
        <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={20}/>}/>
        <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize={20}/>}/>
      </Routes>
    </Router>;
  }
}
