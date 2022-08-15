import React from 'react'
import { Helmet } from 'react-helmet'
import mainlogo from '../../logo/mainlogo.png'
import searchIcon from '../../logo/searchIcon.png'
import './HomePageCss.css'

function HomaPage() {
  return (
    //for background color
    <div>
      <Helmet>
        <style>{"body { background-color: #88CEAF; }"}</style>
      </Helmet>

      {/* for top logo */}
      <div className='text-center mt-5'>
        <img style={{ width: '6rem' }} src={mainlogo} alt="logo" />
      </div>

      {/* for search bar */}
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <img className='searchIcon' src={searchIcon} alt="" search />
              <input type="text" className="form-control" placeholder="     Have confusion? Search..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomaPage