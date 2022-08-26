import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchResults = () => {
  return (
    <div className='flex-[0.8] p-4'>
      <div className='flex items-center text-[#606060] text-sm'>
        <TuneIcon />
        <h2 className='ml-2'>FILTER</h2>
      </div>
      <hr className='h-[1px] bg-gray-400 border-0 my-2 ' />

      {/* To show channel on the search */}
      <ChannelRow
        image='https://i.ytimg.com/vi/tCAt8eEKPDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi2tKzi3NUkcsP7CKPkpUGz0GPOA'
        channel='Clever Programmer'
        verified
        subs='Clever Programmer'
        noOfVideos='389'
        description='You can find awesome programs and coding stuff here all for free on this particular channel over here!...'
      />
      
      <hr className='h-[1px] bg-gray-400 border-0 my-2 ' />

      {/* Video list will be shown here in this particular component whenever it is searched all the way thats it! */}
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/R_OERlafbmw/mqdefault_6s.webp?du=3000&sqp=CKSmoJgG&rs=AOn4CLALDeBd2not8E7SA0W2uHyGs0UVMA'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/tCAt8eEKPDc/mqdefault_6s.webp?du=3000&sqp=CJ-voJgG&rs=AOn4CLBDTSzRZtMJ-ONGUxVj4WMD30pO2g'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=COidoJgG&rs=AOn4CLCFS0UIw78iH5-p9PPvE9MbQR35bw'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/gnbzqtd2zgM/mqdefault_6s.webp?du=3000&sqp=CP_MoJgG&rs=AOn4CLCgXtmIdEMvkUgGz1XBblxlHUzpsg'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/W8IK3MeJ5H0/mqdefault_6s.webp?du=3000&sqp=CKHHoJgG&rs=AOn4CLD5cRgFthp45nSs7GorSFoOWlZTyA'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/R_OERlafbmw/mqdefault_6s.webp?du=3000&sqp=CKSmoJgG&rs=AOn4CLALDeBd2not8E7SA0W2uHyGs0UVMA'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/tCAt8eEKPDc/mqdefault_6s.webp?du=3000&sqp=CJ-voJgG&rs=AOn4CLBDTSzRZtMJ-ONGUxVj4WMD30pO2g'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=COidoJgG&rs=AOn4CLCFS0UIw78iH5-p9PPvE9MbQR35bw'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/gnbzqtd2zgM/mqdefault_6s.webp?du=3000&sqp=CP_MoJgG&rs=AOn4CLCgXtmIdEMvkUgGz1XBblxlHUzpsg'
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a free one year pack.................. '
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title='Lets Build a Youtube Clone'
        image='https://i.ytimg.com/an_webp/W8IK3MeJ5H0/mqdefault_6s.webp?du=3000&sqp=CKHHoJgG&rs=AOn4CLD5cRgFthp45nSs7GorSFoOWlZTyA'
      />
    </div>
  );
};

export default SearchResults;
