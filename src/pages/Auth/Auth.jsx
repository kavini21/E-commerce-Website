import React from "react";
import { Outlet } from "react-router";

const Auth = () => {
  return (
    <div>
      Auth page

      <outlet/>
    </div>
  );
};

export default Auth;