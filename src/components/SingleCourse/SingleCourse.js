import React from 'react';
import { Button, ProgressBar } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { name, img, discription, totalStudent, freestudentsit, progress } = props.course;
    return (
        <div className='card'>
            <div className="row">
                <div className="col-md-6">
                    <img src={img} className="img-fluid rounded-start" alt={name}/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text mb-1 text-muted lh-sm">{discription}</p>
                        <p className="card-text mb-0">Total Sit:  {totalStudent}</p>
                        <p className="card-text mb-2">Available:  {freestudentsit}</p>
                        <ProgressBar animated now={progress} className='mb-2'/>
                        <Button variant="outline-primary">Enrol Now</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleCourse;