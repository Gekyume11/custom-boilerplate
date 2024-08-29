import React from 'react'

const Default_Screen = () => {
  return (
    <main> 
          <div className="blur-bg"></div>
          <div className="img-wrapper">
            <img className='dhruv' src="https://gekyume11.github.io/custom-boilerplate-cdn/dhruv.png" alt="Dhruv"/> 
            <img className='react-icon' src="https://gekyume11.github.io/custom-boilerplate-cdn/react-icon.png" alt="react-icon"/> 
          </div>
          <h1>DhReact App</h1>
          <p>DhReact or Dhruvact App, is a minimal React setup with only the<br/>essentials & no extra unneccessary files. Created by Dhruv. <span id='info'>Start ?</span></p>
    </main>
  )
}

export default Default_Screen;