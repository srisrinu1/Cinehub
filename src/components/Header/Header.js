import React from 'react';
import './Header.css';

const Header = () => {
  return <div>
       <span className="header"  onClick={()=>window.scroll(0,0)}>
       <img src="https://img.icons8.com/ultraviolet/40/000000/cinema---v2.png"/>
        Cinemaa

         
       </span>
  </div>;
};

export default Header;
