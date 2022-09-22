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
        },
        {
            id:5,
            image:images.Author1,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:6,
            image:images.Author2,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:7,
            image:images.Author3,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        },
        {
            id:8,
            image:images.Author4,
            content:'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name:'Isabela Moreira',
            designation:'CEO, GrayGrids'
        }
    ]
 
  return(
    <div className="container">
    <div className="row">
   <div className="col-lg-12">
    <ScrollMenu transitionDuration={1000} transitionBehavior="smooth" RightArrow={RightArrow} >     
      {TestimonialData.map((item , index) => (
        <div   key={item.id}  itemId={item.id}  className="col-lg-12" style={{marginRight:100,marginLeft:100}}>
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

// function LeftArrow() {
//     const { isFirstItemVisible, scrollPrev } =
//       React.useContext(VisibilityContext);
//       scrollPrev()
//   }
  
  function RightArrow() {
    const { isLastItemVisible	, scrollNext } = React.useContext(VisibilityContext);
    var intervalId 
   
    const autoScroll = () => {
        setTimeout(()=>{
            if(isLastItemVisible){
                console.log("auto scroll Stop")
                clearTimeout()
            }else {
                scrollNext();
                autoScroll() 
            }    
        },2000)
    }
    useEffect(() => {

        const interval = setInterval(() => {
            if(isLastItemVisible){
                console.log("auto scroll Stop")
                clearInterval(interval);
            }else {
                scrollNext();
            }  
          }, 2000);
        console.log("auto scroll called")
    }, [])
  
    return (
     <>
     </>
    );
  }