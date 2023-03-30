import { Routes, Route } from 'react-router-dom';

import { New_Movie } from '../pages/New_Movie';
import { Home_two } from '../pages/Home_two';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home_two />} />
      <Route path="/new_movie" element={<New_Movie />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />      
    </Routes>
  )
}
