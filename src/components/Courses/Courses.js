import React, { useEffect, useState } from 'react';
import About from '../About/About';
import SingleCourse from '../SingleCourse/SingleCourse';

const Coursrss = () => {
    const [courses, setCourses] = useState([]); 
    useEffect(() =>{
        fetch('courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-5 text-danger'>Our Courses</h1>
            <div className="row g-4">
                {
                    courses.map(course => <SingleCourse
                        course={course}
                        key={course.key}
                    ></SingleCourse>)
                }
            </div>
            <About></About>
        </div>
        
    );
};

export default Coursrss;