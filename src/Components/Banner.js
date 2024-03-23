import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='d-flex justify-content-center'>

                <div className='text-center'>
                    <h2>Xiomi Series</h2>
                    <p> Be A Class Apart</p>
                    <button className='px-3 py-1 bg-black text-white rounded'>All xiomi Phones</button>
                </div>
            </div>
            <div>
                <div className='d-flex justify-content-between align-items-center mt-4 banner'>
                    <div className='container text-white lh-1 fs-4' >
                    {/* <h1>XIAOMI 14</h1> */}
                    <p>The Pinnacle of SmartPhone Imagery </p>
                    <p>Reserve Now at Ru.9,999</p>
                    <button className='px-4 fw-normal fs-5 py-2 bg-white text-black rounded'>Reserve Now</button>
                    </div>
                    {/* <div>
                        <img  src='Images/ban-mobile.webp'/>
                    </div> */}

                </div>
            </div>
        </div>
    );
}

export default Banner;
