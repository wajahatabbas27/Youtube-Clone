import React, { useState } from "react";
import youtubeIcon from "../assets/images/youtubeIcon.png";
import mypic from "../assets/images/mypic.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  //state for search functionality
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='flex justify-between items-center p-[20px] sticky top-0 bg-white z-50'>
      <div className='flex items-center'>
        <MenuIcon />
        <Link to={'/'}>
          <img
            src={youtubeIcon}
            alt='this is the youtube icon '
            className='h-[25px] object-contain ml-5'
          />
        </Link>
      </div>
      <div className=' flex items-center w-[40%] border-2 border-gray-400'>
        <input
          type='text'
          placeholder='Search'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className='flex-1 outline-none'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='inputButton' />  
        </Link>
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
