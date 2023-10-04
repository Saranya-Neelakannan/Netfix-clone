import React from 'react';
import './Nav.css';
import { useState,useEffect } from 'react';

function Nav() {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll",()=>{});
        };
    },[]);


  return (
    <div className={`nav ${show && "nav_black"}`} >
        <img
        className='nav_logo'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAQfY35reD-REva27VZzVgIXqOOl4eIhG8HaOQJEb&s"
        alt="Netflix Logo"/>
        <img
        className='nav_avatar'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwN1O_hov6n8yDVOwyRlRkMq22TQaq6pO2Yshr8RFjsA&s"
        alt="Netflix Avatar"/>
    </div>
  )
}

export default Nav