import PageTransition from "@/PageTransition";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ChoresRoom = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <div className="h-full flex flex-col bg-primary text-primary-foreground transition-all duration-200">
        <Button onClick={() => navigate(-1)}>123</Button>
        <div className="bg-slate-500 flex flex-auto">123123</div>
      </div>
    </PageTransition>
  );
};

export default ChoresRoom;
