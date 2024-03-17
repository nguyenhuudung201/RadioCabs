import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackendUrl } from "../../api/backend-url";
import ProfileBox from "./ProfileBox";
import { CompanyProfile } from "../../model/CompanyProfile";
const ProfileCompany = () => {
  const [profiles, setProfiles] = useState<CompanyProfile[] | null>([]);
  useEffect(() => {
    axios
      .get(`${BackendUrl}/ProfileCompany`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h4 className="text-3xl font-bold">List Profile</h4>
      <div className="container flex items-center gap-4">
        <div>
          {profiles?.map((profile, i) => (
            <ProfileBox
              key={i}
              name={profile.name}
              image={profile.image}
              description={profile.description}
              id={profile.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileCompany;
