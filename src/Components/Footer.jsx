import React from 'react';
import { Link } from 'react-router-dom';
import Whatsapp from '../Assest/Whatsapp (1).png';
import Instagram from '../Assest/instagram.png';
import Linkedin from '../Assest/LinkedIn.png';
import Emailin from '../Assest/Email (1).png';

function Footer() {
  return (
    <div className="bg-black text-white ">
      <div className="md:flex">
        <div className="p-4 ml-8 md:w-[31%]">
          <h2 className="py-4 text-[28px] font-bold">Resumeefy</h2>
          <p>
            Our mission is to empower individuals by crafting compelling,
            tailored resumes that showcase their unique skills and experiences,
            enabling them to stand out and secure their dream job opportunities.
          </p>
        </div>

        <div className="ml-12 md:w-[31%]">
          <h2 className=" py-4 text-[28px] font-bold">Our Services</h2>
          <ol>
            <li className="pt-1 pb-1">Resume Writing</li>
            <li className="pt-1 pb-1">Entry Level Package</li>
            <li className="pt-1 pb-1">Professional Package</li>
            <li className="pt-1 pb-1">Executive Package</li>
            <li className="pt-1 pb-1">Cover Letter Writing</li>
            <li className="pt-1 pb-1">LinkedIn Optimization</li>
          </ol>
        </div>
        <div className="ml-12 md:w-[31%]">
          <h2 className="py-4 text-[28px] font-bold">Contact Us</h2>
          <div className="flex space-x-4 pb-4">
            {' '}
            <img
              src={Whatsapp}
              alt="whatsapp-icon"
              className="w-[14px] h-[14px] mt-1"
            />{' '}
            <Link className="">+234 909 378 8218 </Link>
          </div>
          <div className="flex space-x-4 pb-4">
            {' '}
            <img
              src={Instagram}
              alt="instagram-icon"
              className="w-[14px] h-[14px] mt-1"
            />{' '}
            <Link className="">resumeefy</Link>
          </div>
          <div className="flex space-x-4 pb-4">
            {' '}
            <img
              src={Linkedin}
              alt="Linkedin-icon"
              className="w-[14px] h-[14px] mt-1"
            />{' '}
            <Link className="">resumeefy</Link>
          </div>
          <div className="flex space-x-4 pb-4">
            {' '}
            <img
              src={Emailin}
              alt="email-icon"
              className="w-[14px] h-[14px] mt-1"
            />{' '}
            <Link className="">resumeefy</Link>
          </div>
        </div>
      </div>
      <div className="courtesty p-4">
        <p className="text-center border-t-2 border-t-slate-white m-8">
          Resumeefy (c) 2024 || All rights reserved. <br />
          Developed by Makzosof
        </p>
      </div>
    </div>
  );
}

export default Footer;
