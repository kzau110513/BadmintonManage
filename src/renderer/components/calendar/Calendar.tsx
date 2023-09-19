import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import MainCal from './MainCal';

export default function Calendar() {
  return (
    <div className="h-screen w-screen">
      <div>
        <nav
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="home"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <HomeIcon className="w-3 h-3" />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="w-3 h-3" />
                <Link
                  to="home"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Templates
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRightIcon className="w-3 h-3" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <MainCal />
      </div>
    </div>
  );
}
