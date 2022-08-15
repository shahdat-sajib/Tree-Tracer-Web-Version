import React from 'react'
import './HomePageCss.css'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import mainlogo from '../../logo/mainlogo.png'
import searchIcon from '../../logo/searchIcon.png'
import satViewImg from '../../logo/satViewImg.jpg'
import mapViewImg from '../../logo/mapViewImg.jpg'
import checkBtn from '../../logo/checkBtn.png'
import { Button } from '@material-ui/core'

function HomaPage() {
  let navigate = useNavigate();
  return (
    //for background color
    <div>
      <Helmet>
        <style>{"body { background-color: #88CEAF; }"}</style>
      </Helmet>

      {/* for top logo */}
      <div className='text-center mt-5 '>
        <img style={{ width: '6rem' }} src={mainlogo} alt="logo" />
      </div>

      {/* for search bar */}
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search ">
              <img className='searchIcon' src={searchIcon} alt="" search />
              <input type="text" className="form-control" placeholder="     Have confusion? Search..." />
            </div>
          </div>
        </div>
      </div>

      {/* satellite img card */}
      <div className='d-flex mt-5'>
        <div>
          <p className='fw-bold text-decoration-underline' style={{ marginLeft: "2.5rem", color: "#054d24" }}>Satellite View</p>
          <div className="card shadow" style={{ width: "11rem", marginLeft: "2rem", borderRadius: "15px" }}>
            <img className='p-1' src={satViewImg} style={{ width: "11rem", borderRadius: "15px" }} alt="sat img" />
          </div>
        </div>

        <div>
          <p className='fw-bold' style={{ marginLeft: "2.5rem", color: "#054d24" }}>Map View</p>
          <div className="card shadow" style={{ width: "11rem", marginLeft: "2rem", borderRadius: "15px" }}>
            <img className='p-1' src={mapViewImg} style={{ width: "11rem", borderRadius: "15px" }} alt="sat img" />
          </div>
        </div>
      </div>

      {/* bottom button  */}
      <div className=' text-center '>
        <Button
          onClick={() => { navigate('/TreeDetection') }}
        style={{
          backgroundImage: `linear-gradient(to top, #02d8c4, #00d6da, #00d3ec, #2bcef9, #5dc8ff)`
        }}
          className='fw-bold rounded mt-5 px-4 shadow' variant="contained"
          startIcon={<img style={{ width: "2rem" }} src={checkBtn} alt="check btn img" />}>
          Check
        </Button>
      </div>



    </div>
  )
}

export default HomaPage