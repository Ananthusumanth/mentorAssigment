import React, { useEffect, useState } from 'react';
import { IoSearchOutline, IoHeartOutline, IoBagOutline, IoMenuOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./index.css";

const apiContentResponse = {
  initally: "INITIAL",
  in_Progress: "IN_PROGRESS",
  success: "SUCCESS",
  is_Failed: "IS_FAILED"
}

function Home() {

  const [hidefillter, sethidefillter] = useState(false)
  const [response, setresponse] = useState({
    state: apiContentResponse.initally,
    productData: []
  })

  const getProductsData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    if (res.ok){
      const data = await res.json()
      setresponse({state: apiContentResponse.success, productData: data})
    }else {
      setresponse({state: apiContentResponse.is_Failed})
    }
  }

  useEffect(() => {
    setresponse({state: apiContentResponse.in_Progress})
    getProductsData()
  }, [])

  const isloadingView = () => (
    <div className="loader-container" data-testid="loader">
      <h1>..........</h1>
    </div>
  )

  const isfailureView = () => (
    <div className="loader-container">
      <h1>Something went Wrong!</h1>
      <p>Sorry, we cannot get data</p>
      <button type="button" className="failureButton">
        Try Again
      </button>
    </div>
  )

  const successView = () => (
    <div>
      <nav className='navbar'>
        <div className='navbar-1-large'>
          <div className='logo-menu'>
            <IoMenuOutline className='menu-smallDevice' size={25}/>
            <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1744275675/Logo_pqlcgf.jpg' alt='logo' className='img-logo'/>
          </div>
          <h1 className='headingLogo'>LOGO</h1>
          <div className='icons'>
            <IoSearchOutline size={24}/>
            <IoHeartOutline className='icon-2' size={24}/>
            <IoBagOutline size={24}/>
            <div className='icons-largedevice'>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1744277172/profile_xocxa7.png' alt='profile' className='icon-2' size={24}/>
              <select className='select-1'>
                <option>EN</option>
                <option>TE</option>
              </select>
            </div>
          </div>
        </div>
        <div className='navbar-2-large'>
          <p>SHOP</p>
          <p className='para-nav'>SKILLS</p>
          <p>STORIES</p>
          <p className='para-nav'>ABOUT</p>
          <p>CONTACT US</p>
        </div>
      </nav>
      <div className='small-device-view'>
        <p className='home'>HOME</p>
        <hr />
        <p>SHOP</p>
      </div>
      <div className='nav-intro'>
        <h1 className='nav-heading'>DISCOVER OUR PRODUCTS</h1>
        <p className='nav-para'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
      <hr />
      <div className='large-device-to-fillter'>
        <div className='large-device-items'>
          <p className='items-total'>{response.productData.length}  ITEMS</p>
          {
            hidefillter ? 
            <button className='hide-filter' onClick={(e) => sethidefillter(!hidefillter)}><FaAngleRight size={13}/>SHOW FILTTER</button>
            :
            <button className='hide-filter' onClick={(e) => sethidefillter(!hidefillter)}><FaAngleLeft size={13}/>HIDE FILTTER</button>
          }
        </div>
        <select className='select-2'>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <div className='sections-to-move'>
        <p>FILTTER</p>
        <select className='select-2'>
          <option>RECOMMENDED</option>
          <option>NEWEST FIRST</option>
          <option>POPULAR</option>
          <option>PRICE: HIGH TO LOW</option>
          <option>PRICE: LOW TO HIGH</option>
        </select>
      </div>
      <hr/>
      <div className='body-section-products-filters'>
        {
          hidefillter ? null 
          :
          <div className='side-bar'>
            <div className='checkbox'>
              <input type='checkbox' />
              <label>Customizble</label>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>IDEAL FOR</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>OCCASION</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>WORK</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>FABRIC</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>SEGMENT</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>SUITABLE FOR</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>RAW MATERIALS</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
            <div className='filter-div'>
              <h1 className='select-head'>PATTERN</h1>
              <select className='select-2'>
                <option>All</option>
                <option disabled>Unselect all</option>
                <option>Mens</option>
                <option>Womens</option>
                <option>baby & Kid</option>
              </select>
            </div>
          </div>
        }
        <div className='product-row'>
      {
        response.productData.map(each => (
          <div className='product-list' key={each.id}>
            <figure>
              <img src={each.image} alt="product" width={300} height={399}/>
              <figcaption className='para-product'>{each.title}</figcaption>
              <figcaption className='para-product'><i className='em-underline' >Sign in</i> or Create an account to see pricing</figcaption>
            </figure>
          </div>
        )
      )
      }
    </div>
      </div>
      <div className='footer'>
        <div className='footer-section-1'>
            <div>
                <h1 className='footer-heading'>BE THE FIRST TO NOW</h1>
                <p>Sign up for updates from mettā muse.</p>
                <div>
                  <input type='text' placeholder='Enter your e-mail.....' className='input'/>
                  <button type='button' className='sub-button'>Subscribe</button>
                </div>
            </div>
            <div>
              <h1 className='footer-heading'>Contact Us</h1>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
              <h1 className='footer-heading'>Current</h1>
              <div className='flag-div'>
                <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1744291894/Group_edjfje.jpg' alt='flag USD' className='flag'/>
                <p>.USD</p>
              </div>
              <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr />
        <div className='footer-section-2'>
          <div>
            <h1 className='footer-heading'>mettā muse</h1>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div>
            <h1 className='footer-heading'>Quick Links</h1>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1 className='footer-heading'>FOLLOW US</h1>
            <div className='icons-para-div'>
              <p className='para-icon'><IoLogoInstagram /></p>
              <p className='para-icon'><CiLinkedin /></p>
            </div>
            <div>
              <h1 className='footer-heading'>mettā muse Accepts</h1>
              <img src='https://res.cloudinary.com/dfgdjrtc1/image/upload/v1744293150/Frame_136278_s3qikb.png'  alt="payment pic"/>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </div>
  )


  const renderresponse = () => {
    const {state} = response
    switch (state) {
      case apiContentResponse.in_Progress:
        return isloadingView()
      case apiContentResponse.is_Failed:
        return isfailureView()
      case apiContentResponse.success:
        return successView()
      default:
        return isloadingView()
    }
  }

  


  return (
    <>{renderresponse()}</>
  )
}

export default Home
