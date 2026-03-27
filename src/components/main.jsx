import React from 'react'
import './Navbar.css'

const main = () => {
  return (
    <div className='next-Nav'>
            <h2>Latest Posts</h2>
    <div>
        Discover the latest content from our community.
    </div>
    <div className='icon'>
        <svg className="my-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2
       h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19
       a2 2 0 01-2 2z" 
                />
        </svg> 
        Document
    </div>

    </div>
  )
}

export default main
