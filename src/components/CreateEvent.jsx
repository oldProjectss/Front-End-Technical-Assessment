import React from 'react';
import { Link } from 'react-router-dom';

function CreateEvent() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <h1 className="mt-60px w-96 text-center font-bold text-primary md:text-primarymd text-col240d57 leading-9 md:leading-12 mb-60px">Create Event</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="eventname" placeholder="Event name" />
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="host" placeholder="Host name" />
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="start" placeholder="Start time/date" />
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="end" placeholder="End time/date" />
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="location" placeholder="Location" />
        <input className="mb-10px rounded font-bold border outnine-none active:border-2 px-10vw py-10px" type="text" name="photo" placeholder="Event photo url" />
        <button className="bg-gradient-to-r from-col8456ec to-cole87bf8 px-21px py-16px rounded-xl mb-13.6px font-bold text-white" type="submit">
          Create Event
        </button>
      </form>
      <Link to="/event" className="bg-gradient-to-r from-col8456ec to-cole87bf8 px-21px py-16px rounded-xl mb-13.6px font-bold text-white" type="submit">
        Next
      </Link>
    </div>
  );
}

export default CreateEvent;
