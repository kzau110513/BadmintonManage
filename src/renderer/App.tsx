import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import System from './components/System';
import NoMatch from './components/NoMatch';
import Home from './components/home/Home';
import Calendar from './components/calendar/Calendar';
import Membership from './components/membership/Membership';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="system" element={<System />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="membership" element={<Membership />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}
