'use client'
import { Container } from "@mui/material";
import Demo from './nav.js';
import './style.css'; // Import CSS file
import './headline.css'; // Import CSS file
import Content from "./HikingGuide.js";
import Headline1 from "./Headline1.js";


export default function Home() {
  return (
    <Container maxWidth="100%">
      {/* The Appbar */}
      <div><Demo/></div>

      {/* The Headline */}
        <Headline1/>
       
      {/* The Content */}
      <Content
                equipmentNumber="01"
                taglineText="GET STARTED"
                hikerLevel="What level of hiker are you?"
                description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
                readMoreText="read more"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WzAQoCkT1CIWIfMFlBUdL9I9QPqqlmrG14sclqk97w&s"
            />
            <Content
                equipmentNumber="02"
                taglineText="HIKING ESSENTIALS"
                hikerLevel="Picking the right Hiking Gear!"
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WzAQoCkT1CIWIfMFlBUdL9I9QPqqlmrG14sclqk97w&s"
                description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
                readMoreText="read more"
            />
            <Content
                equipmentNumber="03"
                taglineText="WHERE YOU GO IS THE KEY"
                hikerLevel="Understand Your Map & Timing"
                description="Immerse yourself in the wonders of the great outdoors. Connect with nature, breathe in the fresh air, and experience the joy of outdoor activities. Get outdoors and create lasting memories."
                readMoreText="read more"
                imageSrc="./images/03.jpg"
            />
      
          


    </Container>
  );
}
