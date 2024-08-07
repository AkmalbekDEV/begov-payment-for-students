import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <section className='shadow-md fixed w-full top-0 left-0 z-50 bg-white'>
            <div className='max-w-[1250px] mx-auto'>
                <div className='flex justify-between max-sm:justify-around items-center w-full'>
                    <img onClick={() => navigate('/')} src={Logo} alt="" className='w-[100px] cursor-pointer max-sm:' />
                    <a href='https://begov.uz' className='transition-all text-lg font-bold hover:underline text-blue-700'>Website</a>
                </div>
            </div>
        </section>
    )
}

export default Navbar