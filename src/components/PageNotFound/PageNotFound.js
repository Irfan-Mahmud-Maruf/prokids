import React from 'react';
import PageNotFoundImg from '../../img/404.jpg';

const PageNotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img src={PageNotFoundImg} alt="" className='img-fluid' />
        </div>
    );
};

export default PageNotFound;