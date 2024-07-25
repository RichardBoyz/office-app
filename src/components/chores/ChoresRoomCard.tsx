type ChoresRoomCardType = {
  name: string;
  creator: string;
};

const ChoresRoomCard = ({
  name = "123123131jasfiosdjfiosadjfiosfsjkjsafasdojf asiodfjaosi jfas fsjdkjsoi jfaoisj fiosaj ois",
  creator,
}: ChoresRoomCardType) => {
  return (
    <div className="hover:scale-105 transition-transform h-[400px] flex rounded-md shadow-md border border-slate-400 px-2 pt-6 pb-2 flex-col">
      <div className="flex gap-1">
        <span className="shrink-0">名稱：</span>
        <span className="line-clamp-1 text-lg font-bold">{name}</span>
      </div>
      <div></div>
    </div>
  );
};

export default ChoresRoomCard;
