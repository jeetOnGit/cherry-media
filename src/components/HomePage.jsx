import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
function HeroSection() {
  return (
    <>
      <div className="heroSectionWrapper">
        <div className="container mx-auto">
          <div className="heroSection flex justify-between items-center h-screen relative max-[978px]:w-[100%] max-[978px]:h-[600px]">
            <div className="heroText w-[70%] max-[978px]:text-center max-[978px]:w-[100%]">
              <h1 className='text-6xl font-extrabold max-[978px]:text-5xl'>Build Authority.</h1>
              <h2 className='text-6xl font-extrabold mt-2 max-[978px]:text-5xl'>Monetize <span className='text-[#ff5757]'>Your LinkedIn</span>.</h2>
              <p className='w-[70%] my-5 max-[978px]:w-[100%]'>Get the free Newsletter helping 7,500+ Service-Based Biz Owners build Authority online, turn LinkedIn into a 6-figure revenue channel, and create the life & business they love to wake up to.</p>
              <button><Link to='/'  className='btn hover:bg-transparent'>Contact Us <i className="fa-solid fa-arrow-right ms-2" /></Link></button>
            </div>

            <div className="heroImgWrapper max-[978px]:hidden">
              <img className='heroImg absolute top-0 right-0 h-[400px]' src="images/hero-image 1.png" alt="" />
              <img className='absolute top-0 right-[30%]' src="images/test1.png" alt="" />
              <img className='absolute bottom-[10%] right-[1%]' src="images/test1.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="footerWrapper bg-[#161616] text-[#fff] py-6 max-[520px]:px-[20px]" id='footer'>
        <div className="container mx-auto">
          <div className="footer flex justify-between gap-[100px] py-6 max-[520px]:flex-col">

          <div className='companyDetails basis-2/4'>
              <div className="logo">
                      <Link to="/">
                        <h3 className="logoName text-[23px] font-bold">Cherry Media<span className="text-[#ff5757] text-3xl">.</span></h3>
                      </Link>
              </div>
              
              <div className="details my-3">
                <p className='text-[#838383]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, recusandae!</p>
              </div>

              <div className="socialIcons flex justify-start gap-[10px]">
                  <Link className='hover:text-[#ff5757]' to='/'><i class="fa-brands fa-linkedin" /></Link>
                  <Link className='hover:text-[#ff5757]' to='/'><i class="fa-brands fa-x-twitter" /></Link>
                  <Link className='hover:text-[#ff5757]' to='/'><i class="fa-brands fa-instagram" /></Link>
              </div>

            </div>

            <div className='findUs basis-2/4'>
              <div className="footerHeading">
                <h3 className='font-bold text-[1.5rem]'>Find Us</h3>
              </div>
              <div className="address my-3">
                <h6 className=''>Address:</h6>
                <p className='text-[#838383]'>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="email">
                <h6 className=''>E-mail:</h6>
                <p className='text-[#838383]'>hello@cherrymedia.com</p>
              </div>

              <div className="phone my-3">
                <h6 className=''>Phone No:</h6>
                <p className='text-[#838383]'>+91 111 222 333</p>
              </div>
            </div>

            <div className='contactUs 3/4'>

              <div className="footerHeading max-[520px]:text-start"><h3 className='font-bold text-[1.5rem]'>Contact Us</h3></div>

              <div className="nameInput my-3 flex justify-center max-[520px]:justify-between max-[520px]:flex-col max-[520px]:gap-[20px]">
                  <input className='py-3 px-2 rounded-[2px] me-2 focus:outline-none text-[#838383] max-[520px]:m-0' type="text" placeholder='First Name'/>
                  <input className='py-3 px-2 rounded-[2px] focus:outline-none text-[#838383]' type="text" placeholder='Last Name'/>
              </div>
              <div className="experienceInput text-center my-4">
                  <textarea className='py-3 px-2 rounded-[2px] focus:outline-none text-[#838383] max-[520px]:w-[100%]' type="text" placeholder='Your Experience!'/>
              </div>
              <button className='btn focus:outline-none hover:text-[#fff] block py-[15px] px-[50px] max-[520px]:inline-block' >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection