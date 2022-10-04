import React from 'react';
import { GiPartyPopper } from 'react-icons/gi';

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-60px w-96 text-center font-bold text-primary md:text-primarymd text-col240d57 leading-9 md:leading-12">
        Imagine if
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-col8456ec to-cole87bf8 md:text-col8456ec">Snapchat</span>
        <br />
        had events.
      </h1>

      <p className="w-3/4 text-center md:text-secondarymd mb-10 mt-16px mb-36px text-col4f4f4f">Easily host and share events with your friends across any social media.</p>

      <img className="rounded-2xl shadow-xl shadow-gray/0.5 mb-34px mx-105px" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T094656Z&X-Amz-Expires=86400&X-Amz-Signature=c8199887ca8e329a6229afdb82f7e1ed339d5f782a79033e9e21fba0818cc76d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject" alt="Snapchat for events" />
      <button className="bg-gradient-to-r from-col8456ec to-cole87bf8 px-21px py-16px rounded-xl mb-13.6px" type="button">
        <GiPartyPopper className="inline" />
        Create my event
      </button>
    </div>
  );
}

export default LandingPage;
