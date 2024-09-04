import React from 'react'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'
// import { NavbarLinks } from './Navbar'

const MobileNavLinks = ({setToggle, name, link }) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
      {/* {NavbarLinks.map((data) => (
        <li key={data.name}>
          <Link
          to={data.link}
          onClick={() => setToggle(false)}
          >
            {data.name}
          </Link>
        </li>
      ))} */}
      <Link to={link} onClick={(prev) => setToggle(!prev)}>{name}</Link>
    </li>
  )
}

export default MobileNavLinks
