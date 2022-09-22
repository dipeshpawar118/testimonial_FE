import React from 'react';
import { TestimonialCard } from '../../components/TestimonialCard';
import { images } from '../../config/images'
import '../../css/style.css';
import '../../css/slick.css';
import '../../css/default.css';
import '../../css/LineIcons.css';
import '../../css/magnific-popup.css';
import '../../css/bootstrap.min.css'
import { Slider } from '../../components/Silder';

export const Testimonial = () => {
    const TestimonialData = [
        {
            id:1,
            image:images.Author1,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:2,
            image:images.Author2,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:3,
            image:images.Author3,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:4,
            image:images.Author4,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        }
    ]
    return(
        <section id="testimonial" className="testimonial-area">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-6">
        <div className="section-title text-center pb-10">
        <h4 className="title">Testimonial</h4>
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        </div> 
        </div>
        </div> 
        {/* <div className="row">
        <div className="col-lg-12">
        <div className="row testimonial-active">
        <div className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
        <img src={images.Author3} alt="Author" />
        </div>
        <div className="testimonial-content">
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        <h6 className="author-name">Isabela Moreira</h6>
        <span className="sub-title">CEO, GrayGrids</span>
        </div>
        </div> 
        </div>
        <div className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
        <img src={images.Author1} alt="Author" />
        </div>
        <div className="testimonial-content">
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        <h6 className="author-name">Fiona</h6>
        <span className="sub-title">Lead Designer, UIdeck</span>
        </div>
        </div> 
        </div>
        <div className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
        <img src={images.Author2} alt="Author" />
        </div>
        <div className="testimonial-content">
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        <h6 className="author-name">Elon Musk</h6>
        <span className="sub-title">CEO, SpaceX</span>
        </div>
        </div> 
        </div>
        <div className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
        <img src={images.Author4} alt="Author" />
        </div>
        <div className="testimonial-content">
        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        <h6 className="author-name">Fajar Siddiq</h6>
        <span className="sub-title">CEO, MakerFlix</span>
        </div>
        </div> 
        </div>
        </div> 
        </div>
        </div>  */}
        <Slider />
        </div> 
        </section>
    )
} 
