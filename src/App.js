import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Upsc from "./pages/upsc/Upsc";
import Listing from "./pages/listing/Listing";
import Compare from "./pages/compare/Compare";
import Institute from "./pages/institute/Institute";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Vacancy from "./pages/vacancy/Vacancy";
import Course from "./pages/course/Course";
import Detail from "./pages/vacancy-detail/Detail";
import Profile from "./pages/profile/Profile";
import Saved from "./pages/saved/Saved";

import Loginstd from "./pages/Mobaccess/Loginstd";
import LoginInst from "./pages/Mobaccess/LoginInst";
import StdRegister from "./pages/Mobaccess/StdRegister";
import InstRegister from "./pages/Mobaccess/InstRegister";
import UserDetails from "./pages/UserDetails/UserDetails";
import ComparePage from "./pages/comparepage/ComparePage";
import UserForm from "./pages/registrationform/UserForm";
import InstituteForm from "./pages/registrationform/InstituteForm";

import SearchContext from "./context/SearchContext";
import RatingContext from "./components/RatingContext";

function App() {
  const [search, setSearch] = useState({
    name: "",
    location: "",
  });
  const [ratingAverage, setRatingAverage] = useState(0)


  return (
    <SearchContext.Provider value={{ search, setSearch }}>
    <RatingContext.Provider value={{ ratingAverage, setRatingAverage }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upsc" element={<Upsc />} />
            <Route path="/institute/:id" element={<Institute />} />

            <Route path="/listing" element={<Listing />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/compares/:id" element={<ComparePage />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/vacancy-detail/:id" element={<Detail />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/saved/:id" element={<Saved />} />

            <Route path="/student-login" element={<Loginstd />} />
            <Route path="/institute-login" element={<LoginInst />} />

            <Route path="/student-register" element={<StdRegister />} />
            <Route path="/institute-register" element={<InstRegister />} />
            <Route path="/userdetails/:id" element={<UserDetails />} />

            <Route path="/user-from/:id" element={<UserForm />} />
            <Route path="/institute-form" element={<InstituteForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RatingContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
