import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ChoresRoomSearch = () => {
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = () => {
    console.log(keyword);
  };
  return (
    <div className="flex flex-col p-2">
      <Input
        placeholder="Search room..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="mt-2" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default ChoresRoomSearch;
