import { useState } from "react";
const ChoresNavigator = () => {
  const [currentTab, setCurrentTab] = useState<string>("search");

  const handleOnValueChange = (value: string) => {
    setCurrentTab(value);
  };
  return (
    <div className="flex-auto flex flex-col items-center">
      {/* <CreateChoresRoom /> */}
      <div>123</div>
    </div>
  );
};

export default ChoresNavigator;
