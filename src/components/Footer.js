import React from 'react'
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <section class="icon-list">
    <div className='footer' >
        <div className='leftSide2'>
        <h1><NavLink to='https://www.instagram.com/' ><i class="nes-icon instagram is-small">  </i></NavLink></h1>
        <h2><NavLink to='https://x.com/i/flow/login' ><i class="nes-icon twitter is-small"></i></NavLink></h2> 
        </div>

        <div className='center' >
          <p> &copy;daisicalBlog.2024</p>

        </div>
      
      <div className='rightSide2'>
        <h1>  </h1>

      </div>

    </div>
    </section>
  )
}

export default Footer

