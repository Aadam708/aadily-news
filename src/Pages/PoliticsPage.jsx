import React from 'react';
import Navbar from '../components/UserNavbar';
import BottomNav from '../components/BottomNav';
import NewsGrid from '../components/NewsGrid';

// import BgImg from './Bg-img';



export default function PoliticsPage() {


  return (
    <div className="homepage">
       
      <Navbar />
      <NewsGrid category="politics" />
      <BottomNav />  


    </div>
  );
}
