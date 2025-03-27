"use client";

import { FC } from "react";
import Navbar from "./Navbar"; // Your Navbar component

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* Render page content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
