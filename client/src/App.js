 import React from 'react';
// import './App.css';
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { Switch } from 'react-router-dom';

// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Help from './components/pages/help';
// import Navbar from './components/inc/navbar';
// import Contact from './components/pages/contact';
import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import MainContent from '././components/shared/MainContent'
// function App() {
//   return (
//   //   <Router>
//   //   <div>
//   //     <Navbar />
//   //     <Routes>
//   //       <Route exact path="/" element={<Home />} />
//   //       <Route path="/about" element={<About />} />
//   //       <Route path="/help" element={<Help />} />
//   //       <Route path="/contact" element={<Contact />} />
//   //     </Routes>
//   //   </div>
//   // </Router>
     
//        <div>
//         <Customer/>
//        </div>
        
      
//   );
// }

// export default App;

const App = () => {
  return (
    <div className="relative">
      <Header/>
      <Sidebar/>
      <MainContent/>
    </div>
  );
};

export default App;