import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../PageTransition";
const ChoresRoomList = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [navAttribute, setNavAttribute] = useState({});
  const handleClickCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const layoutVariants = {
    collapsed: {
      gap: "var(--gap-from)",
    },
    expanded: {
      gap: "var(--gap-to)",
    },
  };

  const variants = {
    collapsed: {
      width: "var(--width-from)",
      height: "var(--height-from)",
      padding: "0",
      opacity: 0,
    },
    expanded: {
      width: "var(--width-to)",
      height: "var(--height-to)",
      padding: "p-4",
      opacity: 1,
    },
  };

  return (
    <PageTransition>
      <motion.div
        variants={layoutVariants}
        animate={isCollapse ? "expanded" : "collapsed"}
        className="h-full flex md:flex-row flex-col p-4 [--gap-from:0] [--gap-to:10px]"
      >
        <motion.div
          variants={variants}
          animate={isCollapse ? "expanded" : "collapsed"}
          className="flex rounded-md border border-slate-500 p-4 [--height-from:0px] [--height-to:200px] md:[--height-from:100%] md:[--height-to:100%] md:[--width-from:0px] md:[--width-to:300px]"
        >
          123
        </motion.div>
        <div className="flex rounded-md p-4 flex-col border border-slate-500 flex-auto">
          <button onClick={handleClickCollapse}>hahahah</button>
        </div>
      </motion.div>
    </PageTransition>
  );
};

export default ChoresRoomList;
