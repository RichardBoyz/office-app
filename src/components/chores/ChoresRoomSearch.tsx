import { useChoresRoom } from "@/context/ChoresRoomContext";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const ChoresRoomSearch = () => {
  const { toast } = useToast();
  const { getChoresRoomsList } = useChoresRoom();
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = async () => {
    if (!keyword.trim()) return;
    try {
      await getChoresRoomsList(keyword);
    } catch (error) {
      toast({ title: "Searching went wrong", duration: 1000 });
    }
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
