import React from 'react';
import styled from 'styled-components';




function Navbar() {
  return (
    <NavbarStyle id="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="index.html">
            {/* <img src={logo} alt="logo" className="navbar__logo--img" /> */}
          </a>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu--list">
            <li className="navbar__menu--list active">About Me</li>
            <li className="navbar__menu--list">Go to blog</li>
          </ul>
        </div>
        <button className="navbar__toggle--btn">Button
        </button>
      </div>
    </NavbarStyle>
  )
};


/////////////////////////

const NavbarStyle = styled.div`
  .navbar__container{
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  color: var(--color-dark-black);
  padding: 3px;
  box-shadow: rgba(0, 0.1, 0.1, 0.049) 0px 5px 12px;
  
  .navbar__menu--list{
    display :  flex;
    justify-content : space-between;
    align-items : center;
  }

  
}
`;



const Button = styled.button`
  background-color : blue;

  color: paleviletred;
  margin : 1em;
  padding : 0.25em 1em;
  border :2px 
`;
/////////////////////////

export default Navbar;