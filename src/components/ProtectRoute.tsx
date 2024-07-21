import { AnimatePresence } from "framer-motion";
import React from "react";
import { Navigate, Outlet, useLocation, useOutlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Loading from "./Loading";

const AnimatedOutlet = (): React.JSX.Element => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait">
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

const ProtectRoute: React.FC = () => {
  const { user, isAuthLoading } = UserAuth();

  // return (
  //   <AnimatePresence mode="wait">
  //     {isAuthLoading ? <Loading /> : user ? <Outlet /> : <Navigate to={"/"} />}
  //   </AnimatePresence>
  // );
  if (isAuthLoading) return <Loading />;

  return user ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectRoute;
