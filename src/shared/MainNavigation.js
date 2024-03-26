import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
const MainNavigation = props => {
  const [drawerisopen,setdrawerisopen]=useState(false);
  const opendrawer=()=>{
    setdrawerisopen(true);
  }
  const closedrawer=()=>{
    setdrawerisopen(false);
  }
  return (
    <React.Fragment>
    <MainHeader>
      
      <button className="main-navigation__menu-btn" onClick={opendrawer}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">Portfolio
        
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks/> 
      </nav>
    </MainHeader>
    <SideDrawer show={drawerisopen} onClick={closedrawer}><nav className='main-navigation__drawer-nav'><NavLinks/></nav></SideDrawer>

    </React.Fragment>
  );
};

export default MainNavigation;
