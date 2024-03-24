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
import ProfileCompanyDetail from "./component/Profile/ProfileCompanyDetail";
import ProfileDriverDetail from "./component/Profile/ProfileDriverDetail";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import Driver from "./component/Driver/Driver";
import EditProfile from "./component/Profile/EditProfile";
import Advertise from "./component/Advertise/Advertise";
import AdvertiseDetail from "./component/Advertise/AdvertiseDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companies" element={<Company />} />
          <Route path="/drivers" element={<Driver />} />
          <Route path="/advertises" element={<Advertise />} />
          <Route path="/advertise/detail/:id" element={<AdvertiseDetail />} />
          <Route
            path="/company/detail/:id"
            element={<ProfileCompanyDetail />}
          />
          <Route path="/driver/detail/:id" element={<ProfileDriverDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<LayOutProfile />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/detail/:id" element={<ProfileDetail />} />
              <Route
                path="/profile/edit/:profileId"
                element={<EditProfile />}
              />
              <Route path="/profile/create" element={<CreateProfile />} />
            </Route>
          </Route>
        </Route>
        <Route path="/signin" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
