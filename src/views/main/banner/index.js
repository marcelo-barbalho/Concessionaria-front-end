import React from 'react'
import styled from "styled-components"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../../assets/images/lamborghini-veneno-1.jpg'
import image2 from '../../../assets/images/2021-jaguar-f-pace.jpg'
import image3 from '../../../assets/images/lamborguin.webp'
import image4 from '../../../assets/images/rs-experience-126.jpg'
import { Container,Card } from 'react-bootstrap';


export default () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:3  
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const cars = [
    { 
      'name':'Lamborghini Veneno',
      'photo':`${image1}`,
      'description':'blablabla',
      'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Jaguar F-pace',
    'photo':`${image2}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Lamborghini Huracan',
    'photo':`${image3}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Audi R8',
    'photo':`${image4}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Jaguar F-pace',
    'photo':`${image2}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    },
    { 
    'name':'Lamborghini Huracan',
    'photo':`${image3}`,
    'description':'blablabla',
    'complete-description':'akhsgigqsiygdiqwdq'
    }

  ]

  return (
    <>
    
    <BannerContainer>
      <BannerCarousel responsive={responsive} autoPlay={true} autoPlaySpeed='3500' swipeable={true} arrows={false} infinite={true}>
      {cars.map((item, i)=> (
        <CarrosselItem key={i} >
          <CarImg src={item.photo}/>
          <CarrouselText>
          <h4>{item.name}</h4>
          <p>{item.description}</p></CarrouselText>
        </CarrosselItem>
      ))}
      </BannerCarousel>
    </BannerContainer>
    <HighlightCard>
    <CardWraper>
      <Card.Body >
        <Card.Title>Bugatti Chiron</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
        O Bugatti Chiron é um automóvel superesportivo de motor central e dois lugares desenhado e desenvolvido pela Bugatti como sucessor do Bugatti Veyron. 
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </CardWraper>
    </HighlightCard>
    </>
     )}
     
// Styled Components
const BannerCarousel = styled(Carousel)`
h3{
  padding-top:15px;

}
`
const HighlightCard = styled.div`
min-height:550px;
  
`
const CardWraper = styled(Card)`
background:rgba(190,190,190, 0.5);
border:none;
margin-top:35px;
margin-left:105px;
width:20rem;
height:9rem;
font-size:small;
`


const BannerContainer = styled(Container)`
background:rgba(52,58,64, 0.7);
max-width:90%;
padding:1em 0;
`


const CarrosselItem = styled.div `

display:flex;

height:8rem;

margin:3px;
justify-items:center;
text-align:center;
background:goldenrod;
border-radius:5px;
font-size:small
`

const CarImg = styled.img`
 // max-height: 50%;
  width: 50%;
  background-color: #fff;
  background-size: auto 100%;
  background-position: center;
  border-radius:5px;
  /* opacity: 0.4; */
`;
const CarrouselText= styled.div`
padding:1em;
`;




