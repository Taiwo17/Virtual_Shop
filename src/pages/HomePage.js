import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className='pt-[81px] pl-[52px] flex flex-col lg:flex-row lg:justify-between lg:items-center  lg:flex-1'>
        <div className='lg:pl-[104px]'>
          <h1 className='font-beVietnamPro text-[46px] font-medium mb-[31px] md:text-[92px] lg:leading-[100px]'>
            Virtual shops made easy.
          </h1>
          <p className='text-[18px] font-medium opacity-50 w-[302px] mb-[28px]'>
            Give your business Gravvity and set up virtual shops in minutes.
          </p>
          <button className='mb-[3rem] bg-[#00DCC3] rounded-[100px] px-[28px] py-[16px] text-[#000] font-medium font-poppins text-[18px] md:text-[21px]'>
            Get started now
          </button>
        </div>
        <div className=''>
          <img
            className='object-center md:w-[100%] md:shrink-0 md:h-auto lg:w-[926px] h-[422px]  '
            src='/images/hero_image.png'
            alt='logo_image'
          />
        </div>
      </div>
      <div className='mb-[10rem] pt-[178px] pl-[32px] lg:mb-[2rem] lg:pt-0'>
        <p className='text-[18px] font-semibold font-beVietnamPro'>
          Already have an account? &nbsp;
          <span>
            <Link className='text-[#00DCC3] font-medium' to='/'>
              Log in
            </Link>
          </span>
        </p>
      </div>
    </>
  )
}

export default HomePage
