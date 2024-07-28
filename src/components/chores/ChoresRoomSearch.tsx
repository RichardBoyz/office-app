import { useChoresRoom } from "@/context/ChoresRoomContext";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const ChoresRoomSearch = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getChoresRoomsList } = useChoresRoom();
  const [keyword, setKeyword] = useState<string>("");
  const handleSearch = async () => {
    setIsLoading(true);
    try {
      await getChoresRoomsList(keyword);
    } catch (error) {
      toast({ title: "Searching went wrong", duration: 1000 });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col p-2">
      <Input
        placeholder="Search room..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button disabled={isLoading} className="mt-2" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default ChoresRoomSearch;
