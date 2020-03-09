import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>Login功能</Link>
          <button className='navbar-toggler' type='button' data-toggler='collapse' data-target='bs-example-navbar-collapse-1'>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>注册</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar