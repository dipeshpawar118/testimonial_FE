import React, { useEffect } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { images } from '../config/images';
import '../css/style.css';
import '../css/slick.css';
import '../css/default.css';
import '../css/LineIcons.css';
import '../css/magnific-popup.css';
import '../css/bootstrap.min.css'

export const Slider = () => {
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
    const { isLastItemVisible, scrollNext,scrollToItem } = React.useContext(VisibilityContext)
    const autoScroll = () => {
        setInterval(() => {
            scrollToItem()
        },2000)
    }
    useEffect(() => {
        autoScroll()
    }, [])
  return(
    <div className="container">
    <div className="row">
   <div className="col-lg-12">
    <ScrollMenu>     
      {TestimonialData.map((item) => (
        <div className="col-lg-12" style={{marginRight:100,marginLeft:100}}>
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
        </div>
      ))}
    </ScrollMenu>
    </div>
      </div>
      </div>
)
}