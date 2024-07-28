import React from "react";

type ChoresRoomListLayoutProps = {
  children?: React.ReactNode;
  isLoading?: boolean;
};

const ChoresRoomListLayout = ({
  children,
  isLoading = false,
}: ChoresRoomListLayoutProps) => {
  return (
    <div className="flex-auto overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 relative">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-2xl font-bold">Loading...</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ChoresRoomListLayout;
