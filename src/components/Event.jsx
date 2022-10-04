import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';

function Event() {
  return (
    <div className="flex flex-col md:m-10vw lg:flex-row-reverse lg:justify-between">
      <div>
        <img className="lg:w-500px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T110531Z&X-Amz-Expires=86400&X-Amz-Signature=a239934f8824ac383dfccfda8b903c2ed21b6e5ccce532051bda8f94159b618d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" alt="Cake" />
      </div>
      <div className="flex flex-col justify-center items-start m-20px">
        <h1 className="text-primary font-bold md:text-primarymd text-col240d57">Birthday Bash</h1>
        <p className="text-col828282 mb-37px">
          Hosted by
          <span className="font-bold"> Elysia</span>
        </p>

        <acticle className="w-full flex items-center justify-between">
          <div className="w-full flex items-center">
            <IoCalendarOutline className="text-primary text-col8456ec mr-34px" />
            <div>
              <p className="font-bold text-col240d57">18 August 6:00PM</p>
              <p className="text-col4f4f4f">
                to
                <span className="font-bold"> 19 august 1:00PM </span>
                UTC +10
              </p>
            </div>
          </div>
          <IoIosArrowForward className="text-colbdbdbd text-secondarymd" />
        </acticle>
        <acticle className="w-full flex items-center justify-between pt-27px">
          <div className="w-full flex items-center">
            <GoLocation className="text-primary text-col8456ec mr-34px" />
            <div>
              <p className="font-bold text-col240d57">Street name</p>
              <p className="text-col4f4f4f">Suburb, State, Postcode</p>
            </div>
          </div>
          <IoIosArrowForward className="text-colbdbdbd text-secondarymd" />
        </acticle>
      </div>
    </div>
  );
}

export default Event;
