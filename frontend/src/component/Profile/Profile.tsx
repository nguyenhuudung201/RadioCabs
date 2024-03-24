import ProfileCompany from "./ProfileCompany";
import ProfileDriver from "./ProfileDriver";
import { useSelector } from "react-redux";
const Profile = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  let markup: any;
  if (userInfo.roleId === 1) {
    markup = <ProfileCompany />;
  } else if (userInfo.roleId === 2) {
    markup = <ProfileDriver />;
  }
  return markup;
};

export default Profile;
