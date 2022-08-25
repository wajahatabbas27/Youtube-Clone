import { Avatar } from "@mui/material";
import React from "react";

const VideoCards = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className='w-[270px] mb-[40px]'>
      <img src={image} alt='main video display ' className='h-[140px] w-[250px]' />
      <div className='flex mt-[10px] pr-[30px]'>
        <Avatar alt={channel} src={channelImage} className='h-[30px] w-[30px]' />
        <div className='ml-[15px]'>
          <h4 className='text-sm mb-[15px]'>{title}</h4>
          <p className='text-sm text-gray-500'>{channel}</p>
          <p className='text-sm text-gray-500'>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
