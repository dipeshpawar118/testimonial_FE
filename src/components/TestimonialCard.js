import React from 'react';
import '../css/style.css';
import '../css/LineIcons.css'
import '../css/slick.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/bootstrap.min.css'

export const TestimonialCard = ({data}) => {
    return (
        <>{ 
        data.map((item) => (
        <div className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
        <div className="testimonial-image">
         <img src={item.image} alt="Author" />
        </div>
        <div className="testimonial-content">
        <p className="text">{item.content}</p>
        <h6 className="author-name">{item.name}</h6>
        <span className="sub-title">{item.designation}</span>
        </div>
        </div> 
        </div>))}
        </>
    )
}