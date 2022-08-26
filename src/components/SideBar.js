import React from "react";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SideBar = () => {
  return (
    <div className='flex-[0.2] sideBar'>
      <SideBarRow selected Icon={HomeIcon} title='Home' />
      <SideBarRow Icon={WhatshotIcon} title='Trending' />
      <SideBarRow Icon={SubscriptionsIcon} title='Subscriptions' />
      <hr className='h-[1px] border-0 bg-gray-200 my-[10px]' />
      <SideBarRow Icon={VideoLibraryIcon} title='Library' />
      <SideBarRow Icon={HistoryIcon} title='History' />
      <SideBarRow Icon={OndemandVideoIcon} title='Your Videos' />
      <SideBarRow Icon={WatchLaterIcon} title='Watch Later' />
      <SideBarRow Icon={ThumbUpAltIcon} title='Liked Videos' />
      <SideBarRow Icon={ExpandMoreIcon} title='Show More' />
      <hr className='h-[1px] border-0 bg-gray-200 my-[10px]' />
    </div>
  );
};

export default SideBar;
