import React, { useEffect, useState } from 'react';
import CourseCardHome from '../CourseCardHome/CourseCardHome';

const CoursesHome = () => {
    const [courses, setCourses] = useState([]); 
    useEffect(() =>{
        fetch('home.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5 text-danger'>Our Courses</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    courses.map(course => <CourseCardHome
                        course={course}
                        key={course.key}
                    ></CourseCardHome>)
                }
            </div>
        </div>
    );
};

export default CoursesHome;