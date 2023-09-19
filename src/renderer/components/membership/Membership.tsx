import React from 'react';
import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <div className="h-screen w-screen">
      <button
        type="button"
        className="rounded-full bg-sky-500 hover:bg-sky-700 text-white px-3 py-1"
      >
        <Link to="/">
          <p>membership</p>
        </Link>
      </button>
    </div>
  );
}
