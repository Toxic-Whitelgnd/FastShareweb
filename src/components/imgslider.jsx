import React from 'react';
import { Carousel } from "react-bootstrap"
import "./imgslider.css"
import * as faico from "react-icons/fa";
import img1 from "../images/output-1.png"
import img2 from "../images/output-2.png"
import img3 from "../images/output-3.png"

const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },

];

const Imgslider = () => {
    return (
        <div className='containerimg'>
            <div className='header'>
                <h1>FastShare Outputs</h1>
            </div>

            <div className='slider'>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-200"
                            id='img'
                            src={img1}
                            alt="First slide"
                        />
                     
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-200"
                            id='img'
                            src={img2}
                            alt="Second slide"
                        />

                      
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-150"
                            id='img'
                            src={img3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>

            </div>
            <footer>
                <div className='footercontent'>

                    <p>View the project Source code in Github</p>

                    <a className='linkbox' href='https://github.com/Toxic-Whitelgnd/FastShare'>
                        <faico.FaGithubSquare />
                    </a>

                </div>
            </footer>

        </div>
    );
}

export default Imgslider;

