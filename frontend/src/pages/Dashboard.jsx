import React from 'react';
import Logo from '../assets/tablesprint_logo.png'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className='container'>
        <img src={Logo} />
        <h3>Welcome to TableSprint  admin</h3>
        </div>
    </div>
  )
}
