import { useSelector } from "react-redux";
import ProfileDriverDetail from "./ProfileDriverDetail";
import ProfileCompanyDetail from "./ProfileCompanyDetail";

const ProfileDetail = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  let markup: any;
  if (userInfo.roleId === 1) {
    markup = <ProfileCompanyDetail />;
  } else if (userInfo.roleId === 2) {
    markup = <ProfileDriverDetail />;
  }
  return markup;
};

export default ProfileDetail;
