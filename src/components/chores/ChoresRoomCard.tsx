import { useNavigate } from "react-router-dom";

type ChoresRoomCardType = {
  roomId: string;
  name: string;
  creator?: string;
};

const ChoresRoomCard = ({ roomId, name, creator }: ChoresRoomCardType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/chores-room-list/${roomId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="hover:scale-105 transition-transform h-[400px] flex rounded-md shadow-md border border-slate-400 px-2 pt-6 pb-2 flex-col cursor-pointer"
      title={`要不要進入 ${name} 呀`}
    >
      <div className="flex gap-1">
        <span className="shrink-0">名稱：</span>
        <span className="line-clamp-1 text-lg font-bold">{name}</span>
      </div>
      <div></div>
    </div>
  );
};

export default ChoresRoomCard;
