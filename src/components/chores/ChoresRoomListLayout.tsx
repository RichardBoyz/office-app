import React from "react";

type ChoresRoomListLayoutProps = {
  children?: React.ReactNode;
};

const ChoresRoomListLayout = ({ children }: ChoresRoomListLayoutProps) => {
  return (
    <div className="flex-auto overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {children}
    </div>
  );
};

export default ChoresRoomListLayout;
