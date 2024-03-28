import React from 'react';
const OurServicec = () => {
    return (
        <div className='services'>
            <div className='row mt-5 text-center'>
                <h3>Oue Services</h3>
                <h5>Trusted,Secure, Reliable</h5>
            </div>
            <div className='row mt-5'>
                <div className='col text-center'>
                    <h4>Mi Screen Protect</h4> 
                    <p>Screen Protection Against Accidental, Liquid Damage <br/>Avail 2 Claims Per Year</p>
                 
                    <div>
                        <img className='img-fluid' src='Images/screen-protect.png'/>
                    </div>
                </div>
                <div className='col text-center'>
                    <h4>Mi Complete Protect</h4> 
                    <p>Safeguard your smartphone Against Accidental & Liquid <br/>Damage</p>
                    <div>
                        <img className='img-fluid' src='Images/mi-protect.jpg'/>
                    </div>
                </div>
            </div>
            <div className='row mt-5 mb-4'>
                <div className='col text-center'>
                    <h4>Smartphone Quality </h4> 
                    <p>We are committed to provide the best quality at an honest<br/>price. </p>
                    <div>
                        <img className='img-fluid' src='Images/quality.png'/>
                    </div>
                </div>
                <div className='col text-center'>
                    <h4>Mi Exchange</h4> 
                    <p>Exchange your old Smart phone in three simple steps</p>
                    <div>
                        <img className='img-fluid' src='Images/exchange.png'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurServicec;
