import React from 'react';
import Navbar from '../components/UserNavbar';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../contexts/AuthContext';
import NewsGrid from '../components/NewsGrid';

// import BgImg from './Bg-img';



export default function UserHomePage() {


  const { userDetails } = useAuth();
  return (
    <div className="homepage">
       
      <Navbar />
      <h1>Welcome, {userDetails?.name}</h1>
      <NewsGrid category="default" />
      
      <BottomNav />  



      <Navbar />
      <BottomNav />

      <h1>Welcome, {userDetails?.name}</h1>


    </div>
  );
}
