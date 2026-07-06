import React from 'react'
import './acceptedstatcard.css'

function Acceptedstatcard({count}) {
  return (
    <div className='card2'>
            <div className='icon_symbol'></div>

            <div className='details'>
              <p>Accepted Jobs</p>
              <h3>{count}</h3>
              <p>Current Jobs</p>
            </div>
          </div>
  )
}

export default Acceptedstatcard
