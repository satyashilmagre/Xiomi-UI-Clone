
import "bootstrap/dist/css/bootstrap.min.css";

const OfferSection = () => {
    return (
        <div className='container'>
            <div className='row offer-section'>
                <div className=' col-6 text-center offer-first'>
                    <h3 className=''>Xiomi 14</h3>
                    <p>Next Generation Leica Optics</p>
                    <p>Sale Start on 11<sup>th</sup>March  </p>
                    <p> From Rs. 69,999</p>
                    <button>Learn More</button>
                    <div>
                        <img src='Images/xiomi14.webp' />

                    </div>
                </div>

                <div className='col-6 text-center offer-first'>
                    <h3>Xiomi 14 Ultra</h3>
                    <p>The Pinaacle of Smartphone imagery</p>
                    <p>Reserve Start on 11<sup>th</sup>March  </p>
                    <p>Rs. 99,999</p>
                    <button>Learn More</button>
                    <div>
                        <img src='Images/xiomi14ultra.webp' />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default OfferSection;


