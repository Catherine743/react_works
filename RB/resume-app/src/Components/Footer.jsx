import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function Footer() {
  return (
    <div className='text-center p-5 bg-primary'>
      <h3>Contact Us</h3>
      <div className='d-flex justify-content-center align-items-center gap-3 my-3'>
        <MdOutlineMailOutline className='fs-4'/>
        <a href="mailto: rbuilder@gmail.com" style={{textDecoration : "none", color : "black"}}>rbuilder@gmail.com</a>
      </div>
      <div className='d-flex justify-content-center align-items-center gap-3 my-3'>
        <IoPhonePortraitOutline className='fs-4'/>
        <a href="tel: 9898989898" style={{textDecoration : "none", color : "black"}}>9898989898</a>
      </div>
      <h4 className='mt-5 mb-3'>Connect With Us</h4>
      <div className='d-flex justify-content-center gap-3'>
        <FaInstagram className='fs-4'/>
        <FaWhatsapp className='fs-4'/>
        <FaLinkedin className='fs-4'/>
      </div>
      <h6 className='mt-3'>Designed & built with <FcLike className='fs-6'/> using React</h6>
    </div>
  )
}

export default Footer
