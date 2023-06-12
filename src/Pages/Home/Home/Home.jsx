import React from 'react';
import HoroSection from '../HoroSection';
import ServicesInfo from '../ServicesInfo';
import TrastedBy from '../TrastedBy';
import InstractorSection from '../InstractorSection';
import PopulerCourse from '../PopulerCourse';


const Home = () => {
    return (
        <div>
            <HoroSection></HoroSection>
            <ServicesInfo></ServicesInfo>
            <InstractorSection></InstractorSection> 
            <PopulerCourse></PopulerCourse>
            <TrastedBy></TrastedBy>
        </div>
    );
};

export default Home;