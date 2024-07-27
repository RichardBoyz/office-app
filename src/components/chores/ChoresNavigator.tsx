import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CreateChoresRoom from "./CreateChoresRoom";

const ChoresNavigator = () => {
  return (
    <div className="flex-auto flex flex-col items-center h-full overflow-hidden">
      <Tabs defaultValue="account" className="flex flex-col w-full h-full">
        <TabsList className="w-full *:w-full">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent className="flex-auto overflow-y-auto" value="account">
          <div className="">Make changes to your account here.</div>
        </TabsContent>
        <TabsContent className="flex-auto overflow-y-auto" value="password">
          <CreateChoresRoom />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChoresNavigator;
