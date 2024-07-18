// src/components/BgImg.js
import React from 'react';

const BgImg = ({ children }) => {
  return (
    <div style={{
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20230415/pngtree-website-technology-line-dark-background-image_2344719.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure it covers the full height of the viewport
      display: 'flex',
      flexDirection: 'column',
      position: 'relative', // Ensure it's positioned relative to its children
      zIndex: 1 // Ensure it doesn't overlay its children
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default BgImg;
