import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { BiSearch, BiNews, BiImage, BiBookBookmark } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdMic } from 'react-icons/io';
import { TbMinusVertical } from 'react-icons/tb';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdOndemandVideo, MdMoreVert } from 'react-icons/md';
import { refValue } from '../pages';
import Avatar from './Avatar';

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div>
      {/* Header */}
      <header className="flex w-full px-[10px] md:px-[50px] pt-4 justify-between text-sm text-gray-700 sticky top-0 bg-white">
        <div className="flex">
          <div className="flex items-center justify-center mr-[20px] md:mr-[50px] cursor-pointer">
            <img
              src="/Bolt_logo.png"
              alt="google-image"
              onClick={() => router.push('/')}
              className="w-[80px] md:w-[100px]"
            />
          </div>

          <form className="md:w-[50vw] flex ring-offset-0 ring-[1.5px] hover:shadow-lg rounded-[50px] ring-gray-200 items-center flex-grow">
            <input
              ref={searchInputRef}
              type="text"
              className="focus:outline-none flex-1 rounded-[50px] px-[20px] "
            />
            <AiOutlineClose
              className="h-10 w-5 text-gray-500 cursor-pointer mx-[5px] mr-[10px] md:mr-[0px] transition duration-100 transform hover:scale-105"
              onClick={() => (searchInputRef.current.value = '')}
            />
            <TbMinusVertical className="h-10 w-5 text-gray-300 cursor-pointer mx-[2px] hidden md:flex" />
            <IoMdMic className="h-10 w-5 text-green-700 cursor-pointer mx-[5px] hidden md:flex" />
            <BiSearch className="h-10 w-5 ml-[10px] mr-[15px] text-gray-500 cursor-pointer hidden md:flex" />
            <button hidden type="submit" onClick={search}>
              Search
            </button>
          </form>
        </div>

        <div className="flex space-x-4 items-center">
          {/* Icon */}
          <IoSettingsSharp className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-[7px] hidden lg:flex" />
          {/* Icon */}
          <CgMenuGridO className="h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-[7px]" />
          {/* Avatar */}
          <Avatar url="/gmail.jpg" />
        </div>
      </header>

      <div className="w-full divide-black/10 text-[13px] md:text-[14px] border-b">
        <div className="w-full flex  mt-[10px] md:pl-[200px] pl-[20px] justify-between md:w-[50vw] ">
          <div className="flex space-x-[30px] lg:mr-[4vw] xl:mr-[10vw] 2xl:mr-[15vw]">
            <div className="flex items-center border-b-[3px] border-green-600 cursor-pointer">
              <BiSearch className="h-10 w-5 mr-[5px] text-green-600" />
              <p className="text-green-600 hidden md:flex">All</p>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer">
              <MdOndemandVideo className="h-10 w-5 mr-[5px] " />
              <p className="hidden lg:flex">Videos</p>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer">
              <BiNews className="h-10 w-5 mr-[5px] " />
              <p className="hidden lg:flex">News</p>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer">
              <BiImage className="h-10 w-5 mr-[5px] " />
              <p className="hidden lg:flex">Images</p>
            </div>
            <div className="items-center text-gray-500 cursor-pointer hidden md:flex">
              <BiBookBookmark className="h-10 w-5 mr-[5px] " />
              <p className="hidden lg:flex">Books</p>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer">
              <MdMoreVert className="h-10 w-5 mr-[1px] " />
              <p className="">More</p>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer lg:hidden">
              <p className="">Tools</p>
            </div>
          </div>
          <div className="lg:flex items-center text-gray-500 cursor-pointer hidden">
            <p className="">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;