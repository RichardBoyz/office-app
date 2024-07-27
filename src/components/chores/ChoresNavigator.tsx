import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CreateChoresRoom from "./CreateChoresRoom";

const ChoresNavigator = () => {
  return (
    <div className="flex-auto flex flex-col items-center h-full overflow-hidden">
      <Tabs defaultValue="search" className="flex flex-col w-full h-full">
        <TabsList className="w-full *:w-full">
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>
        <TabsContent className="flex-auto overflow-y-auto" value="search">
          <div>Making some changes here.</div>
        </TabsContent>
        <TabsContent className="flex-auto overflow-y-auto" value="create">
          <CreateChoresRoom />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChoresNavigator;
