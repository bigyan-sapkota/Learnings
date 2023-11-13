import React from "react";
import { DashboardContext } from "./context";

const Mycontext = () => {
  const [user] = useState < User > { isSubscribed: true, name: "You" };
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default Mycontext;
