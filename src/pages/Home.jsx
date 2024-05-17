import React from 'react'
import { imgData } from '../data'

const Home = () => {

    return (
        <div className='bg-gray-200 py-5'>
            <div className="my-container grid grid-cols-3 gap-5">
                {imgData.map((e) => {
                    return (
                        <img src={e.img_url} key={e.id} className='w-full h-full object-cover' alt="" />
                    )
                })}
            </div>
        </div>
    )
}

export default Home