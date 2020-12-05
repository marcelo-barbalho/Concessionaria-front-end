
import React, { useState } from "react";
import styled from "styled-components"
import image1 from '../../../assets/images/lamborghini-veneno-1.jpg'
import image2 from '../../../assets/images/2021-jaguar-f-pace.jpg'
import image3 from '../../../assets/images/lamborguin.webp'
import image4 from '../../../assets/images/rs-experience-126.jpg'
import { Carousel } from 'react-bootstrap';


export default () => {
  const [index, setIndex] = useState(0);
const scroll=(direction)=>{
  var element=document.getElementById("carouselThumbnails");

  if(direction==="left"){
    element.scrollLeft+=200;
  }
  else{
    element.scrollLeft-=200;
  }
}
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);}
  const cars = [
    { 
      'name':'Lamborghini Veneno',
      'photo':`${image1}`,
      'thumb':`${image1}`,
      'description':'blablabla',
      'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Jaguar F-pace',
    'photo':`${image2}`,
    'thumb':`${image2}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Lamborghini Huracan',
    'photo':`${image3}`,
    'thumb':`${image3}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Audi R8',
    'photo':`${image4}`,
    'thumb':`${image4}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    
    },
    { 
    'name':'Jaguar F-pace',
    'photo':`${image2}`,
    'thumb':`${image2}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Lamborghini Huracan',
    'photo':`${image3}`,
    'thumb':`${image3}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    }

  ]

  return (
 <BannerContainer>
       <Carousel indicators={false} controls={false} activeIndex={index} onSelect={handleSelect}>
         {cars.map((car,index)=>
      <CarouselItem key={index} backgroundimage={car.photo}>
     
        <CarouselText>
          <h3>{car.name}</h3>
          <p>{car.description}</p>
        </CarouselText>
      </CarouselItem>)}
    
    </Carousel>
    <ThumbnailWrapper>
    <ButtonArrow onClick={()=>scroll("right")}>{"<"}</ButtonArrow>
   
    <CarouselThumbnails id="carouselThumbnails">

      {cars.map((car,index)=><CarouselThumbnail key={index} backgroundimage={car.thumb} onClick={()=>setIndex(index)}>
      <span>{car.name}</span>


      </CarouselThumbnail>
      )}
   
    </CarouselThumbnails>
    <ButtonArrow onClick={()=>scroll("left")}>{">"}</ButtonArrow>
    </ThumbnailWrapper>
</BannerContainer>
 
     )}
     
// Styled Components
const ThumbnailWrapper=styled.div`
display:flex;
width:80%;
margin:auto;
margin-top:-50px;
position:relative;
align-items:center;
`;
const ButtonArrow=styled.button`
width:30px;
color:#fff;
background-color:goldenrod;
height:30px;
border:none;
z-index:9;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;
const CarouselThumbnails=styled.div`
  display:flex;
width:110%;
  height:100px;
  overflow:hidden;
  scroll-behavior: smooth;
 
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;
const CarouselThumbnail=styled.div`
  min-width:20%;
  
  height:100px;
  background-image:url(${props => props.backgroundimage});
background-size:cover;
`;

const BannerContainer = styled.div`
width:100%;
background-color:#201E27;
padding-bottom:2em;
`
const CarouselText=styled(Carousel.Caption)`
width:30%;
background:rgba(52,58,64, 0.7);
bottom:40%;
left:10%;
`;
const CarouselItem = styled(Carousel.Item) `
background-image:url(${props => props.backgroundimage});
background-size:cover;
height:400px;
width:100%;
padding:5vh;
`