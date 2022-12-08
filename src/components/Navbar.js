import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center pt-[30px] px-[32px]'>
      <div>
        <img src='/images/gravity_logo.png' alt='logo' />
      </div>
      <div>
        <p className='font-beVietnamPro text-sm'>Help?</p>
      </div>
    </div>
  )
}

export default Navbar
