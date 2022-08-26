import React from "react";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className='flex mb-[30px] max-w-[700px]'>
      <img
        src={image}
        alt='main thumbnail'
        className='object-contain w-[246px] h-[138px]'
      />
      <div className='ml-[14px]'>
        <h3 className='text-xl font-medium '>{title}</h3>
        <p className='text-xs text-[#606060]'>
          {channel} . <span className="bg-slate-300"> <span className='text-blue-700'>{subs}</span> Subscribers </span>
          {views} views . {timestamp}
        </p>
        <p className='mt-2 text-xs text-[#606060]'>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
