import React from 'react'
import { Helmet } from "react-helmet";
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import mainlogo from '../logo/mainlogo.png'
import 'bootstrap/dist/css/bootstrap.css';
// import { FcInfo } from "react-icons/fc";


function LandingPage() {
    let navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <style>{"body { background-color: #88CEAF; }"}</style>
            </Helmet>

            <div className='text-center pt-5 mt-5'>
                <img style={{ width: '9rem' }} src={mainlogo} alt="logo" />
            </div>

            <div className='d-flex aligns-items-center justify-content-center mt-5 ' >
                <div>
                    {/* <FcInfo /> */}
                </div>
                <div className='mt-1 text-white '>
                    <h6>Give order to plant trees </h6>
                </div>
                
            </div>
            <div className='d-flex aligns-items-center justify-content-center mt-3' >
                <div>
                    {/* <FcInfo /> */}
                </div>
                <div className='mt-1 text-white'>
                    <h6>Get suggestions for planting trees</h6>
                </div>
                
            </div>
            <div className='d-flex aligns-items-center justify-content-center mt-3' >
                <div>
                    {/* <FcInfo /> */}
                </div>
                <div className='mt-1 text-white'>
                    <h6>See your planted trees realtime photo</h6>
                </div>
                
            </div>
            <div className='d-flex aligns-items-center justify-content-center mt-3' >
                <div>
                    {/* <FcInfo /> */}
                </div>
                <div className='mt-1 text-white'>
                    <h6>Check your area's ratio of people and tree  </h6>
                </div>
                
            </div>
            <div className='d-flex aligns-items-center justify-content-center mt-3' >
                <div>
                    {/* <FcInfo /> */}
                </div>
                <div className='mt-1 text-white'>
                    <h6>Check estimated oxygen production by trees </h6>
                </div>
                
            </div>

            <div className='mt-5 text-center '>
                <Button className='btn btn-success rounded-circle  shadow-lg  py-4 px-3 mt-4' onClick={() => { navigate('/Homepage') }}>Go to Home</Button>
            </div>
            
        </div> 


    )
}

export default LandingPage