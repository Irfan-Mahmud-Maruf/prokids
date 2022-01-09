import React from 'react';
import About from '../About/About';
import CoursesHome from '../CoursesHome/CoursesHome';
import HeaderTop from '../HeaderTop/HeaderTop';

const Home = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <CoursesHome></CoursesHome>
            <About></About>
        </div>
    );
};

export default Home;    