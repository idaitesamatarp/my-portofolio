import React from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="bg-white w-screen h-screen container mx-auto">
      <div className="flex flex-row w-full">
        <Navbar />
        <UserProfile />
        <div className="w-7/12">{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
