import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LayOut from "./layout/LayOut";
import Home from "./component/Home/Home";
import Services from "./component/Servicers/Services";
import SignUp from "./component/SignUp/SignUp";
import Registration from "./component/Registration/Registration";
import Contact from "./component/Contact/Contact";
import Company from "./component/company/Company";
import Profile from "./component/Profile/Profile";
import LayOutProfile from "./layout/LayOutProfile";
import CreateProfile from "./component/Profile/CreateProfile";
import ProfileDetail from "./component/Profile/ProfileDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<Company />} />
          <Route path="/profile" element={<LayOutProfile />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/detail/:id" element={<ProfileDetail />} />
            <Route path="/profile/create" element={<CreateProfile />} />
          </Route>
        </Route>
        <Route path="/signin" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
