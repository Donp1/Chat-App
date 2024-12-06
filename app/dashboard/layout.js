import CheckAuth from "@/components/CheckAuth";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <CheckAuth />
      {children}
    </>
  );
};

export default Layout;
