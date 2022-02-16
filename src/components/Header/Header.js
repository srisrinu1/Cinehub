import React from 'react';
import './Header.css';

const Header = () => {
  return <div>
       <span className="header"  onClick={()=>window.scroll(0,0)}>
       <i class="fa-light fa-clapperboard-play"></i>
        Cinemaa
         
       </span>
  </div>;
};

export default Header;
