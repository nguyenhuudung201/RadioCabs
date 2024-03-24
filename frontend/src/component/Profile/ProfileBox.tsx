import React from "react";
import { DriverProfile } from "../../model/DriverProfile";
import { BackendUrlImage } from "../../api/backend-url";
import { Link } from "react-router-dom";

const ProfileBox = ({ id, name, image, description, url }: DriverProfile) => {
  return (
    <div className="text-center ">
      <Link to={`/profile/detail/${id}`}>
        <img
          src={`${BackendUrlImage}${image}`}
          className="mx-auto h-[150px]  mb-4 w-32 rounded-lg"
          alt="Avatar"
        />
      </Link>
      <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">
        {description.slice(1, 20)}
      </p>
      <Link to={`/profile/edit/${id}`}>Edit</Link>
    </div>
  );
};

export default ProfileBox;
