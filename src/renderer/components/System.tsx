import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoimg from '../../../assets/icon.png';
// import NoMatch from './NoMatch';
// import Home from './home/Home';
// import Calendar from './calendar/Calendar';
// import Membership from './membership/Membership';

export default function System() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex-none w-32 bg-slate-500">
        <nav>
          <div>
            <Link to="home">
              <img src={logoimg} alt="" />
            </Link>
          </div>

          <div className="mt-10">
            <ul className="grid font-mono text-center text-lg">
              {[
                ['Home', 'home'],
                ['Calendar', 'calendar'],
                ['Membership', 'membership'],
              ].map(([title, url]) => (
                <Link to={url}>
                  <li className="text-white hover:bg-cyan-500 py-1">{title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div>
        {/* This allows nested UI to show up when child routes are rendered. */}
        <Outlet />
      </div>
    </div>
  );
}
