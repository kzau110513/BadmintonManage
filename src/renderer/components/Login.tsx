import React from 'react';
import { Link } from 'react-router-dom';
import testimg from '../../../assets/R.jpg';

export default function Hello() {
  const style = {
    backgroundImage: `url(${testimg})`,
  } as React.CSSProperties;

  return (
    <div className="h-screen w-screen">
      <div className="flex bg-no-repeat bg-cover h-full w-full" style={style}>
        <div className="flex shrink-0 flex-col justify-center w-1/2 h-1/2 m-auto bg-white p-4 rounded-lg opacity-90">
          {/* title */}
          <div className="flex pb-10">
            <h1 className="mx-auto font-mono text-5xl font-bold">Login</h1>
          </div>
          {/* form */}
          <div className="grid grid-rows-4 gap-5 h-1/2">
            <div className="grid grid-cols-2 mx-auto">
              <p className=" text-2xl pr-10">username</p>
              <input type="text" required className="border rounded-lg px-3" />
            </div>
            <div className="grid grid-cols-2 mx-auto">
              <p className=" text-2xl pr-10">password</p>
              <input type="text" required className="border rounded-lg px-3" />
            </div>
            <div className="grid grid-cols-2 mx-auto">
              <p className=" text-2xl pr-10">verification</p>
              <input type="text" required className="border rounded-lg px-3" />
            </div>
          </div>
          {/* button */}
          <div className="flex mx-auto">
            <Link to="system">
              <button
                type="button"
                className="rounded-full bg-sky-500 hover:bg-sky-700 text-white px-3 py-1"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
