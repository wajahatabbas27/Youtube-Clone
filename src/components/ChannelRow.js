import { Avatar } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutline";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  return (
    <div className='flex items-center w-[70%]'>
      <Avatar src={image} alt={channel} className="avatar"/>
      <div className='flex flex-col '>
        <h4 className="flex items-center justify-between">
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p className='text-[#606060] text-xs'>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p className='text-[#606060] text-xs'>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
