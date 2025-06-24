import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {

    const activeBox = useRef()
    const lastActiveLink = useRef();
    const initActiveBox = ()=>{
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
    useEffect(initActiveBox,[])
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink= (event)=>{
        lastActiveLink.current?.classList.remove("active");
        event.target.classList.add("active");
        lastActiveLink.current = event.target;


        activeBox.current.style.top = event.target.offsetTop + "px";
        activeBox.current.style.left = event.target.offsetLeft + "px";
        activeBox.current.style.width = event.target.offsetWidth + "px";
        activeBox.current.style.height = event.target.offsetHeight + "px";
    }

    const navItems = [

    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];
  


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 navbar ${navOpen ? 'active' : ''}`}>
        {
            navItems.map(({label,link,className,ref},key)=>(
                <a href={link} className={className} key={key} ref={ref} onClick={activeCurrentLink}>{label}</a>
            ))
        }
        <div className='active-box'
        ref={activeBox}> 

        </div>
    </nav>
  )
}

Navbar.propTypes = {
    navOpen:PropTypes.bool.isRequired
}

export default Navbar