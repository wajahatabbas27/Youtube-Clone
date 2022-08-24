import React from "react";
import youtubeIcon from "../assets/images/youtubeIcon.png";
import mypic from "../assets/images/mypic.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className='flex justify-between items-center p-[20px] sticky top-0 bg-white z-50'>
      <div className='flex items-center'>
        <MenuIcon />
        <img
          src={youtubeIcon}
          alt='this is the youtube icon '
          className='h-[25px] object-contain ml-5'
        />
      </div>
      <div className=' flex items-center w-[40%] border-2 border-gray-400'>
        <input
          type='text'
          placeholder='Search'
          className='flex-1 border-none outline-none '
        />
        <SearchIcon className='w-[50px] bg-gray-300 border-l-gray-300 border-l-2 stroke-gray-500 ' />
      </div>
      <div className='flex items-center '>
        <VideoCallIcon className='mr-2' />
        <AppsIcon className='mr-2' />
        <NotificationsIcon className='mr-2' />
        <Avatar src={mypic} alt='Wajahat Abbas' />
      </div>
    </div>
  );
};

export default Header;
