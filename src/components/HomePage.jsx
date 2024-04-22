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
              <button><Link to='/' className='btn hover:bg-transparent'>Contact Us <i className="fa-solid fa-arrow-right ms-2" /></Link></button>
            </div>

            <div className="heroImgWrapper max-[978px]:hidden">
              <img className='heroImg absolute top-0 right-0 h-[400px]' src="images/hero-image 1.png" alt="" />
              <img className='absolute top-0 right-[30%]' src="images/test1.png" alt="" />
              <img className='absolute bottom-[10%] right-[1%]' src="images/test1.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="FAQwrapper py-6">
        <div className="container mx-auto">
          <div className="accordion">
            <h1 className='py-6 font-extrabold'>Frequently Asked Questions</h1>
            <div className="accordion-item">
              <input type="checkbox" id="accordion1" />
              <label for="accordion1" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What is SEO, and why is it important for online businesses?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site's ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion2" />
              <label for="accordion2" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How long does it take to see results from SEO efforts?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion3" />
              <label for="accordion3" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What are the key components of a successful SEO strategy?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website's relevance and authority in the eyes of search engines.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion4" />
              <label for="accordion4" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>How does mobile optimization impact SEO?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results.</div>
            </div>

            <div className="accordion-item">
              <input type="checkbox" id="accordion5" />
              <label for="accordion5" className="accordion-item-title bg-[#1e1e1e] text-[#fff]"><span className="icon"></span>What is the role of backlinks in SEO, and how can they be acquired?</label>
              <div className="accordion-item-desc border border-[#1e1e1e]">Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site's authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It's important to focus on natural and ethical link-building practices.</div>
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
                <input className='py-3 px-2 rounded-[2px] me-2 focus:outline-none text-[#838383] max-[520px]:m-0' type="text" placeholder='First Name' />
                <input className='py-3 px-2 rounded-[2px] focus:outline-none text-[#838383]' type="text" placeholder='Last Name' />
              </div>
              <div className="experienceInput text-center my-4">
                <textarea className='py-3 px-2 rounded-[2px] w-[100%] focus:outline-none text-[#838383] max-[520px]:w-[100%]' type="text" placeholder='Your Experience!' />
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