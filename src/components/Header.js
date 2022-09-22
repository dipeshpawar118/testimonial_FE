import React, { useState } from 'react';
import '../css/style.css';
import '../css/slick.css';
import '../css/default.css';
import '../css/LineIcons.css';
import '../css/magnific-popup.css';
import '../css/bootstrap.min.css'
import { images } from '../config/images';
import Background from '../assets/images/header-bg.jpg'
export const Header = () => {
    const [activeClass,setActiveClass] = useState('navgition navgition-transparent')
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            setActiveClass('navgition navgition-transparent sticky');
        }
        else {
            setActiveClass('navgition navgition-transparent')
        }
     });
return (
<header className="header-area">
<div className={activeClass}>
<div className="container">
<div className="row">
<div className="col-lg-12">
<nav className="navbar navbar-expand-lg">
<a className="navbar-brand" href="#">
<img src={images.Logo} alt="Logo" />
</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
<span className="toggler-icon"></span>
<span className="toggler-icon"></span>
<span className="toggler-icon"></span>
</button>
<div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
<ul className="navbar-nav m-auto">
<li className="nav-item">
<a className="page-scroll" href="#home">HOME</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#service">SERVICES</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#pricing">PRICING</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#testimonial">Testimonial</a>
</li>
<li className="nav-item">
<a className="page-scroll" href="#contact">CONTACT</a>
</li>
</ul>
</div>
<div className="navbar-social d-none d-sm-flex align-items-center">
<span>FOLLOW US</span>
<ul>
<li><a href="#"><i className="lni-facebook-filled"></i></a></li>
<li><a href="#"><i className="lni-twitter-original"></i></a></li>
<li><a href="#"><i className="lni-instagram-original"></i></a></li>
<li><a href="#"><i className="lni-linkedin-original"></i></a></li>
</ul>
</div>
</nav> 
</div>
</div> 
</div> 
 </div> 
<div id="home" className="header-hero bg_cover" style={{backgroundImage: `url(${Background})`}} >
<div className="container">
<div className="row justify-content-center">
<div className="col-xl-8 col-lg-10">
<div className="header-content text-center">
<h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
<p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
<ul className="header-btn rounded-buttons">
<li><a className="main-btn rounded-three" href="#">GET IN TOUCH</a></li>
<li><a className="main-btn rounded-four video-popup" href="../../watch.html?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></a></li>
</ul>
</div> 
</div>
</div> 
</div> 
<div className="header-shape">
<img src={images.HeaderShape} alt="shape" />
</div>
</div> 
</header>
    )
}