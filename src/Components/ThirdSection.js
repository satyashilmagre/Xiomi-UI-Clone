import React from 'react';

const ThirdSection = () => {
    return (
        <div>
            <div className='text-center mt-3'>
                <h2>Redmi Series</h2>
                <p>The Performance Racer</p>
                <button className='px-3 py-1 text-white bg-black rounded'>All Redmi Phones</button>
            </div>
            <div className='mt-5 third-banner'>
                <div className='container text-white '>
                    <h2 className='mb-4 fs-1'>Redmi A3</h2>
                    <p className='fs-4'>Smooth & Stylish</p>
                    <p className='fs-4'>Starting at Ru. 6,999*</p>
                    <button className='px-4 py-1 bg-white text-black rounded mt-3 fs-5'>Buy Now</button>
                </div>
            </div>
            <div className='mt-3 third-banner-two '>
                <div className='container text-white fw-bold '>
                    <h2 className='mb-4 fs-1'>Redmi Note 13 pro+ 5G</h2>
                    <p className='fs-4 fw-normal'>Special Launch Price Ru.29,999*</p>
                    <button className='px-4 py-3 fs-5 bg-black text-white rounded mt-3'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ThirdSection;
