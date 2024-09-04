import React from 'react'
import { Link } from "react-router-dom";

const NavLink = ({ link, name}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
      <Link to={link}>{name}</Link>
    </li>
  )
}

export default NavLink
