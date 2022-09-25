import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
      <nav className='navBar'>
        <NavLink to='/' className='link'>سوره</NavLink>
        <NavLink to='/juz' className='link'>جزء</NavLink>
        <NavLink to='/page' className='link'>صفحه</NavLink>
        <NavLink to='/favorite' className='link'>مورد علاقه</NavLink>
        <NavLink to='/setting' className='link'>تنظیمات</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default SharedLayout