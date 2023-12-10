import React, { useContext } from "react";
import { ChangeProfile } from "../ChangeProfile";
import { AppContext } from "../PedroTech";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      PROFILE, user is: {username}
      <ChangeProfile />
    </div>
  );
};

export default Profile;
