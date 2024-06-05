 import React from 'react';

 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/SignUp';



import Header from './components/shared/Header';
import Sidebar from './components/shared/Sidebar';
import MainContent from '././components/shared/MainContent'
import AdiminSidebar from './components/shared/SidebarAdmin';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import Customer from './components/shared/Customer';
import Layout from './components/shared/Layout';
import Home from './components/pages/Home';
import AdminLayout from './components/shared/LayoutAdmin';
import UserList from './components/userlist';
import Protected from './components/protected';
function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route index element={<Home/>}></Route>
      <Route
            index
            element={
              
                <Home />
             
            }
          />
           <Route
           
            element={
              
                <AdminLayout />
             
            }
          />
       
        
        <Route path="/allusers" element={<UserList />} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/admin" element={<AdminLayout/>} />
      </Routes>
    </div>
</Router>
     
     
        
      
  );
}

export default App;





