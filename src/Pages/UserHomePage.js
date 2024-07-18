import React from 'react';
import Navbar from '../components/UserNavbar';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../contexts/AuthContext';

// import BgImg from './Bg-img';



export default function UserHomePage() {


  const { userDetails } = useAuth();
  return (
    <div className="homepage">


      <Navbar />
      <BottomNav />

      <h1>Welcome, {userDetails?.name}</h1>


    </div>
  );
}
