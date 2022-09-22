import React, { useEffect, useState } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { images } from '../config/images';
import {config }  from '../config/config';
 import '../css/style.css';
import '../css/slick.css';
import '../css/default.css';
import '../css/LineIcons.css';
import '../css/magnific-popup.css';
import '../css/bootstrap.min.css'
export const Slider = () => {

    const userImage =  [  images.Author1,  images.Author2, images.Author3, images.Author4,]
   const  [serverData , setServerData  ] = useState([]);
    useEffect(() => {
        getTestimonialData();
        console.log(config.dev_server_url)
    }, [])

    async function getTestimonialData() {
        try {
            var path =  config.dev_server_url +'/testimonial/get' ;
            const response = await fetch(path);
            var result = await response.json();
             result.map((iteam , index) =>{
                iteam.image = userImage[(index % 4 )]
             } )
            console.log(result);
            setServerData(result)
          
        } catch (error) {
            return [];
        }

    }

    const TestimonialData = [
        {
            id: 1,
            image: images.Author1,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 2,
            image: images.Author2,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 3,
            image: images.Author3,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 4,
            image: images.Author4,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 5,
            image: images.Author1,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 6,
            image: images.Author2,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 7,
            image: images.Author3,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        },
        {
            id: 8,
            image: images.Author4,
            description: 'Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!',
            name: 'Isabela Moreira',
            post: 'CEO, GrayGrids'
        }
    ]



   

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ScrollMenu transitionDuration={1000} transitionBehavior="smooth" RightArrow={RightArrow} >
                        {TestimonialData.map((item, index) => (
                            <div key={item.testimonialId} itemId={item.testimonialId} className="col-lg-12" style={{ marginRight: 100, marginLeft: 100 }}>
                                <div className="single-testimonial mt-30 mb-30 text-center">
                                    <div className="testimonial-image">
                                        <img src={item.image} alt="Author" />
                                    </div>
                                    <div className="testimonial-content">
                                        <p className="text">{item.description}</p>
                                        <h6 className="author-name">{item.name}{" "} {item.lastname}</h6>
                                        <span className="sub-title">{item.post}</span>
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
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    var intervalId

    const autoScroll = () => {
        setTimeout(() => {
            if (isLastItemVisible) {
                console.log("auto scroll Stop")
                clearTimeout()
            } else {
                scrollNext();
                autoScroll()
            }
        }, 2000)
    }
    useEffect(() => {

        const interval = setInterval(() => {
            if (isLastItemVisible) {
                console.log("auto scroll Stop")
                clearInterval(interval);
            } else {
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