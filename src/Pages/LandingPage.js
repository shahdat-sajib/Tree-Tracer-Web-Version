import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    let navigate = useNavigate();

  return (
    <div>
        <h2>this is landing page</h2>
        <Button onClick={() => {navigate('/Homepage')}}>Go to Home</Button>
    </div>
    
    
  )
}

export default LandingPage