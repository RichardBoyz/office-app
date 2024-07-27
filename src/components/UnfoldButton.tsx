import {
  IoChevronBackSharp,
  IoChevronDownSharp,
  IoChevronForwardSharp,
  IoChevronUpSharp,
} from "react-icons/io5";
import { WindowSize } from "../constants/windows";
import { useBreakpoint } from "../hooks/useBreakpoint";

type UnfoldButtonType = {
  isUnfoled: boolean;
  onClickSwitch: () => void;
};
const UnfoldButton = ({ isUnfoled, onClickSwitch }: UnfoldButtonType) => {
  const breakpoint = useBreakpoint();
  return (
    <div
      onClick={onClickSwitch}
      className="flex justify-center items-center p-4 hover:bg-slate-100 transition-colors rounded-md"
    >
      {breakpoint === WindowSize.Small ||
      breakpoint === WindowSize.ExtraSmall ? (
        isUnfoled ? (
          <IoChevronUpSharp />
        ) : (
          <IoChevronDownSharp />
        )
      ) : isUnfoled ? (
        <IoChevronBackSharp />
      ) : (
        <IoChevronForwardSharp />
      )}
    </div>
  );
};

export default UnfoldButton;
