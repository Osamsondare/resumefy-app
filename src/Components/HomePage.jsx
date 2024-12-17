import React from 'react';
import backgroundImage from '../Assest/hero-background.jpg';
import { Link } from 'react-router-dom';
import VideoThumbnail from '../Assest/VideoThumbnail.png';
import FeatureImage1 from '../Assest/FeatureImage1.png';
import FeatureImage2 from '../Assest/FeatureImage2.png';
import FeatureImage3 from '../Assest/FeatureImage3.png';
import Vector1 from '../Assest/Vector1.png';
import Vector2 from '../Assest/Vector2.png';
import Vector3 from '../Assest/Vector3.png';

function HomePage() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-12 px-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stats shows that{' '}
            <span className="text-blue-400">1 out of 4 resumes</span> gets
            picked.
          </h2>
          <p className="mb-6 text-lg">
            Do you want yours to be the one that gets selected?
          </p>
          <Link className="bg-blue-600 ml-[30%] hover:bg-blue-700 text-white font-semibold py-4 px-6  w-fit rounded hidden md:block">
            Yes, I do - Help me write one that gets picked
          </Link>
          <Link
            to="/order"
            className="bg-blue-600 px-10 py-4 ml-[38%] text-white  w-fit rounded-md hover:bg-blue-700 md:hidden"
          >
            Order Now
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">How We Do It</h2>

          <div className="">
            <img
              src={VideoThumbnail}
              alt="Styled-Image"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            How We Stand Out
          </h2>
          <div className="flex flex-col ">
            <div className="flex flex-col  md:flex-row">
              <div>
                <img
                  src={FeatureImage1}
                  alt="Styled-Image"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2>1-on-1 Conversation</h2>
                <p>
                  {' '}
                  Our writers invest the nessary time to understand your career
                  goal and your preferences for your new resume. You'll have a
                  direct collaboration with our writers via calls at your
                  convenient time.
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row-reverse">
              <div className="w-full md:w-1/2 md:h-auto ">
                <img
                  src={FeatureImage2}
                  alt="Styled-Image"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2 ">
                <h2>1-on-1 Conversation</h2>
                <p>
                  {' '}
                  Our writers invest the nessary time to understand your career
                  goal and your preferences for your new resume. You'll have a
                  direct collaboration with our writers via calls at your
                  convenient time.
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row">
              <div>
                <img
                  src={FeatureImage3}
                  alt="Styled-Image"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2>1-on-1 Conversation</h2>
                <p>
                  {' '}
                  Our writers invest the nessary time to understand your career
                  goal and your preferences for your new resume. You'll have a
                  direct collaboration with our writers via calls at your
                  convenient time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="flex justify-center py-4 text-[28px] font-bold">
          <h2>Choose Your Package</h2>
        </div>
        <div className="md:flex ">
          <div className="flex flex-col items-center justify-center pb-5 center px-5">
            <div className="w-[300px] h-[450px]  border border-gray-300 rounded-lg  p-4 bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
              <div className="text-center flex bg-green-500 w-[112%] ml-[-6%] mt-4 h-12 ">
                <img
                  className="ml-[-7%] mt-[14px] w-[20px] h-[20px]"
                  src={Vector1}
                  alt="vector-1"
                />
                <h3 className="text-[20px] font-bold ml-[90px] text-white px-2 py-2">
                  ENTRY LEVEL
                </h3>
              </div>
              <div className="text-center mt-2 flex flex-col items-center      justify-center">
                <p className="text-4xl font-bold text-gray-800 mt-2">₦10k</p>
                <p className="text-sm text-[#000205] font-semibold mt-1 w-[180px] h-auto">
                  Best for Interns, Assistant Researchers, Junior Associates
                </p>
              </div>
              <p className="text-sm pt-4 px-4 text-[#000205] font-semibold mt-1 ">
                What's Included: --{' '}
              </p>
              <ul className="mt-4 space-y-2 pb-4 px-4">
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Resume / CV Writing</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Keyword Optimization</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Up to 3 free revisions</span>
                </li>
              </ul>
              <div className="px-5">
                <Link
                  to="/order"
                  className=" w-[100%] flex items-center justify-center p-4 bg-green-500 text-white  rounded-lg hover:bg-green-600"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-5 px-5 center">
            <div className="w-[300px] h-[auto]  border border-gray-300 rounded-lg  p-4 bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
              <div className="text-center flex bg-[#F3831B] w-[112%] ml-[-6%] mt-4 h-12 ">
                <img
                  className="ml-[-6%] mt-[14px] w-[20px] h-[20px]"
                  src={Vector2}
                  alt="vector-2"
                />
                <h3 className="text-[20px] font-bold ml-[90px] text-white px-2 py-2">
                  PROFESSIONAL
                </h3>
              </div>
              <div className="text-center mt-2 flex flex-col items-center      justify-center">
                <p className="text-4xl font-bold text-gray-800 mt-2">₦15k</p>
                <p className="text-sm text-[#000205] font-semibold mt-1 w-[180px] h-auto">
                  Best for IT Professionals, Marketing Specialists, Financial
                  Analysts
                </p>
              </div>
              <p className="text-sm pt-4 px-4 text-[#000205] font-semibold mt-1 ">
                What's Included:{' '}
              </p>
              <ul className="mt-4 space-y-2 pb-4 px-4">
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Resume / CV Writing</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Cover Letter Writing</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Keyword Optimization</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">LinkedIn Profile Optimization</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Unlimited Revisions</span>
                </li>
              </ul>
              <div className="px-5">
                <Link
                  to="/order"
                  className=" w-[100%] flex items-center justify-center p-4 bg-[#D06A0B] text-white  rounded-lg hover:bg-green-600"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pb-5 px-5 justify-center center">
            <div className="w-[300px] h-[auto]  border border-gray-300 rounded-lg  p-4 bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
              <div className="text-center flex bg-[#570BD2] w-[112%] ml-[-6%] mt-4 h-12 ">
                <img
                  className="ml-[-6%] mt-[14px] w-[20px] h-[20px]"
                  src={Vector3}
                  alt="vector-3"
                />
                <h3 className="text-[20px] font-bold ml-[90px] text-white px-2 py-2">
                  EXECUTIVE
                </h3>
              </div>
              <div className="text-center mt-2 flex flex-col items-center      justify-center">
                <p className="text-4xl font-bold text-gray-800 mt-2">₦25k</p>
                <p className="text-sm text-[#000205] font-semibold mt-1 w-[180px] h-auto">
                  Best for Senior Executives, Directors, CFOs, CTOs, Legal
                  Counsels
                </p>
              </div>
              <p className="text-sm pt-4 px-4 text-[#000205] font-semibold mt-1 ">
                What's Included:{' '}
              </p>
              <ul className="mt-4 space-y-2 pb-4 px-4">
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">
                    Resume / CV Writing for Executive Role
                  </span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Cover Letter Writing</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Keyword Optimization</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">LinkedIn Profile Optimization</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Career Follow-up</span>
                </li>
                <li className="flex items-center text-[#000205] font-semibold">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="ml-2">Unlimited Revisions</span>
                </li>
              </ul>
              <div className="px-5">
                <Link
                  to="/order"
                  className=" w-[100%] flex items-center justify-center p-4 bg-[#570BD2] text-white  rounded-lg hover:bg-green-600"
                >
                  Order now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-4 text-[28px] font-bold">
          <h2>What Our clinents Say</h2>
        </div>
        <div className="pb-4">
          <div className="flex flex-col justify-center py-5  w-[80%] ml-[10%] border border-gray-300 rounded-lg   bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
            <p className="text-5xl px-7 ">&#10077; </p>
            <p className="px-7 ">
              As a software engineer with 4+ years of experience, I was looking
              for a resume that would showcase my technical skills and
              accomplishments. This service helped me polish my resume and I got
              hired in a month!
            </p>
            <p className="px-7 pt-7">
              <span className="font-bold">Ayomiposi</span> |{' '}
              <span className="font-bold">Job Role: </span>
              Software Engineer | <span className="font-bold">
                Industry:
              </span>{' '}
              Technology
            </p>
          </div>
        </div>
        <div className="md:flex md:ml-[70px] md:mr-[40px]">
          <div className="pb-4">
            <div className="flex flex-col justify-center py-5  w-[80%] md:h-[290px] md:w-[385px] ml-[10%] border border-gray-300 rounded-lg   bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
              <p className="text-5xl px-7 ">&#10077; </p>
              <p className="px-7 ">
                They exceeded my expectations with a top-notch resume and
                valuable career guidance.
              </p>
              <p className="px-7 pt-7">
                <span className="font-bold">John </span>|{' '}
                <span className="font-bold">Job Role</span>: Marketing Manager |{' '}
                <span className="font-bold"> Industry</span>: Business Services
                Technology
              </p>
            </div>
          </div>
          <div className="pb-4 pl-5">
            <div className="flex flex-col justify-center py-5  w-[80%] md:h-[290px] md:w-[385px] ml-[10%] border border-gray-300 rounded-lg   bg-white shadow-[0_0_20px_10px_rgba(128,128,128,0.3)]">
              <p className="text-5xl px-7 ">&#10077; </p>
              <p className="px-7 ">
                This professional resume writing service helped me land my dream
                job as a Registered Nurse. Highly recommended!
              </p>
              <p className="px-7 pt-7">
                <span className="font-bold">Nora </span>|{' '}
                <span className="font-bold">Job Role:</span> Registered Nurse |
                <span className="font-bold">Industry: </span>Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-400 p-6 md:flex">
        <div>
          <p className="p-4 text-center text-xl">
            Get a FREE resume review from our expert team and take your job
            search to the next level.
          </p>
        </div>
        <div className="p-4 md:w-[300px] ">
          {' '}
          <Link
            to="/free-review"
            className="bg-blue-500 p-4 flex justify-center "
          >
            Get Free Review
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
