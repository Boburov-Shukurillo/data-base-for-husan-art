import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-900 py-4'>
            <div className="my-container flex items-center justify-between">
                <h1 className='text-4xl text-white font-Antema'><Link to='/'>Husan Art</Link></h1>
            </div>
        </header>
    )
}

export default Header